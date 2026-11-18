import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { profile } from "@/content/resume";

export default function Footer() {
  return (
    <footer className="border-t border-line/[0.08] py-10">
      <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <ul className="flex items-center gap-1">
          {[
            { href: profile.github, label: "GitHub", Icon: FaGithub },
            { href: profile.linkedin, label: "LinkedIn", Icon: FaLinkedin },
            { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
          ].map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-line/10 hover:text-fg"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
