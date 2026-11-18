import * as content from "./resume";
import { education, experience, projects, sections, shippedApps, skills } from "./resume";

describe("resume content", () => {
  it("lists the three roles in reverse-chronological order with resume dates", () => {
    expect(experience.map((r) => [r.company, r.title, r.start, r.end])).toEqual([
      ["Kulcha Cultr Technologies", "Full-Stack Developer", "02/2026", null],
      ["Aulosa", "Software Developer Intern", "10/2025", "01/2026"],
      ["Tranna", "Backend Engineer Intern", "01/2025", "09/2025"],
    ]);
  });

  it("uses the resume's education scores", () => {
    expect(education[0]).toMatchObject({ institution: "Global Academy of Technology", score: 8.38 });
    expect(education[1]).toMatchObject({ institution: "NMKRV College", score: 82.7 });
  });

  it("has 4 shipped apps, 7 skill groups and 3 projects", () => {
    expect(shippedApps).toHaveLength(4);
    expect(skills).toHaveLength(7);
    expect(projects).toHaveLength(3);
  });

  it("never includes the phone number", () => {
    const serialized = JSON.stringify(content);
    expect(serialized).not.toMatch(/8317368961|\+91/);
  });

  it("has unique section ids", () => {
    const ids = sections.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
