import { render, screen, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { education, experience, exploring, objective, profile, projects, sections, shippedApps, skills } from "@/content/resume";

const renderApp = async () => {
  const result = render(<App />);
  // Sections below the hero are lazy-loaded.
  await screen.findByTestId("resume-download");
  return result;
};
const section = (id: string) => {
  const el = document.getElementById(id);
  if (!el) throw new Error(`#${id} not found`);
  return el;
};

describe("Portfolio page", () => {
  it("renders every section with a single h1 for the name", async () => {
    await renderApp();
    for (const s of sections) expect(document.getElementById(s.id)).toBeInTheDocument();
    const h1s = screen.getAllByRole("heading", { level: 1 });
    expect(h1s).toHaveLength(1);
    expect(h1s[0]).toHaveAccessibleName(profile.name);
    expect(
      screen.getByText((_, el) => el?.tagName === "P" && el.textContent === "Product Engineer · Mobile & Full-Stack"),
    ).toBeInTheDocument();
  });

  it("falls back to the CSS gradient when WebGL2 is unavailable", async () => {
    await renderApp();
    expect(screen.getByTestId("aurora-fallback")).toBeInTheDocument();
    expect(screen.queryByTestId("aurora")).not.toBeInTheDocument();
  });

  it("shows final hero stat values under reduced motion", async () => {
    await renderApp();
    await waitFor(() => {
      expect(screen.getByTestId("stat-0")).toHaveTextContent("4");
      expect(screen.getByTestId("stat-1")).toHaveTextContent("500K+");
      expect(screen.getByTestId("stat-2")).toHaveTextContent("35%");
      expect(screen.getByTestId("stat-3")).toHaveTextContent("3");
    });
  });

  it("renders the full objective", async () => {
    await renderApp();
    const text = screen.getByTestId("objective").textContent ?? "";
    expect(text).toContain(objective);
  });

  it("renders 4 shipped app cards linking to the real pages", async () => {
    await renderApp();
    const cards = within(section("apps")).getAllByTestId("app-card");
    expect(cards).toHaveLength(4);
    shippedApps.forEach((app, i) => {
      const link = within(cards[i]).getByRole("link");
      expect(link).toHaveAttribute("href", app.url);
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
      if (app.icon) {
        expect(within(cards[i]).getByAltText(`${app.name} app icon`)).toHaveAttribute("src", app.icon);
      }
    });
  });

  it("renders the experience timeline in order with every bullet", async () => {
    await renderApp();
    const roles = within(section("experience")).getAllByTestId("role");
    expect(roles).toHaveLength(3);
    experience.forEach((r, i) => {
      expect(roles[i]).toHaveTextContent(r.company);
      r.bullets.forEach((b) => expect(within(roles[i]).getByText(b)).toBeInTheDocument());
    });
    expect(roles[0]).toHaveTextContent("Present");
  });

  it("renders all skill groups and skills without percentages", async () => {
    await renderApp();
    const el = section("skills");
    expect(within(el).getAllByTestId("skill-group")).toHaveLength(7);
    skills.forEach((g) => {
      expect(within(el).getByText(g.category)).toBeInTheDocument();
      g.items.forEach((s) => expect(within(el).getByText(s)).toBeInTheDocument());
    });
    expect(el.textContent).not.toContain("%");
  });

  it("renders only the resume projects", async () => {
    await renderApp();
    const el = section("projects");
    expect(within(el).getAllByTestId("project")).toHaveLength(3);
    projects.forEach((p) => {
      expect(within(el).getByText(p.title)).toBeInTheDocument();
      expect(within(el).getByText(p.description)).toBeInTheDocument();
    });
    expect(document.body.textContent).not.toMatch(/Therapy|Diabetes/);
  });

  it("renders all five verification checks", async () => {
    await renderApp();
    const list = screen.getByTestId("checks");
    exploring.checks.forEach((c) => expect(within(list).getByText(c)).toBeInTheDocument());
  });

  it("shows education scores", async () => {
    await renderApp();
    await waitFor(() => {
      expect(screen.getByTestId("score-CGPA")).toHaveTextContent("8.38");
      expect(screen.getByTestId("score-Score")).toHaveTextContent("82.7%");
    });
    education.forEach((e) => expect(screen.getByText(e.institution)).toBeInTheDocument());
  });

  it("copies the email to the clipboard", async () => {
    const user = userEvent.setup();
    const writeText = vi.spyOn(navigator.clipboard, "writeText").mockResolvedValue();
    await renderApp();
    await user.click(screen.getByRole("button", { name: /copy email address/i }));
    expect(writeText).toHaveBeenCalledWith("abhay060704@gmail.com");
    expect(await screen.findByText("Copied to clipboard")).toBeInTheDocument();
  });

  it("offers a resume download pointing at the PDF", async () => {
    await renderApp();
    const link = screen.getByTestId("resume-download");
    expect(link).toHaveAttribute("href", profile.resumeUrl);
    expect(link).toHaveAttribute("download", profile.resumeFileName);
  });

  it("never exposes a phone number", async () => {
    const { container } = await renderApp();
    expect(container.ownerDocument.body.innerHTML).not.toMatch(/tel:|8317368961/);
  });
});

describe("Navbar", () => {
  it("links only to sections that exist", async () => {
    await renderApp();
    const nav = screen.getByRole("navigation", { name: "Primary" });
    const hashes = within(nav)
      .getAllByRole("link")
      .map((a) => a.getAttribute("href"))
      .filter((h): h is string => !!h && h.startsWith("#"));
    expect(hashes.length).toBeGreaterThan(5);
    hashes.forEach((h) => expect(document.getElementById(h.slice(1))).toBeInTheDocument());
  });

  it("opens and closes the mobile menu", async () => {
    const user = userEvent.setup();
    await renderApp();
    const toggle = screen.getByRole("button", { name: "Open menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    await user.click(toggle);
    expect(document.getElementById("mobile-menu")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Close menu" })).toHaveAttribute("aria-expanded", "true");
    await user.click(screen.getByRole("button", { name: "Close menu" }));
    await waitFor(() => expect(document.getElementById("mobile-menu")).not.toBeInTheDocument());
  });
});
