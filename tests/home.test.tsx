import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Home from "@/app/page";
import { timeUntil } from "@/components/motion/Countdown";
import { registrationHref } from "@/lib/site";

vi.mock("next/image", () => ({
  default: ({ alt, fill: _fill, priority: _priority, ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean; priority?: boolean }) => {
    void _fill;
    void _priority;
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img alt={alt ?? ""} {...props} />
    );
  },
}));

describe("Flat Hack 604 homepage", () => {
  it("renders the primary landmarks and event content", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { level: 1, name: /build what.s next/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /choose a direction/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /built on real-world creative expertise/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /feedback.*that feels.*human/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /useful questions/i })).toBeInTheDocument();
    expect(screen.getByText("Registration opens soon")).toHaveAttribute("aria-disabled", "true");
    expect(document.querySelector("video source")).toHaveAttribute("src", "/assets/flat-hack-hero-branded.webm");
    expect(screen.getAllByAltText("Flat Hack 604").length).toBeGreaterThan(0);
  });

  it("uses in-page navigation targets", () => {
    render(<Home />);
    const navigation = within(screen.getByRole("navigation", { name: "Primary navigation" }));

    expect(navigation.getByRole("link", { name: "About" })).toHaveAttribute("href", "#about");
    expect(navigation.getByRole("link", { name: "Tracks" })).toHaveAttribute("href", "#tracks");
    expect(navigation.getByRole("link", { name: "Schedule" })).toHaveAttribute("href", "#schedule");
    expect(navigation.getByRole("link", { name: "FAQ" })).toHaveAttribute("href", "#faq");
  });

  it("opens and closes the mobile navigation", () => {
    render(<Home />);
    const toggle = screen.getByRole("button", { name: "Open navigation" });

    fireEvent.click(toggle);
    expect(screen.getByRole("button", { name: "Close navigation" })).toHaveAttribute("aria-expanded", "true");
    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.getByRole("button", { name: "Open navigation" })).toHaveAttribute("aria-expanded", "false");
  });

  it("lets visitors skip and replay the opening sequence", () => {
    render(<Home />);

    fireEvent.click(screen.getByRole("button", { name: "Skip intro" }));
    expect(screen.queryByRole("button", { name: "Skip intro" })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Replay opening animation" }));
    expect(screen.getByRole("button", { name: "Skip intro" })).toBeInTheDocument();
  });

  it("contains no legacy brand references", () => {
    const { container } = render(<Home />);
    expect(container.textContent).not.toMatch(/contra|framer/i);
  });

  it("counts down only when a valid event time is configured", () => {
    expect(timeUntil("", Date.now())).toBeNull();
    expect(timeUntil("2027-04-12T09:00:00+05:30", Date.parse("2027-04-10T03:29:30Z"))).toEqual([2, 0, 0, 30]);
  });

  it("accepts a Google Form as the registration destination", () => {
    expect(registrationHref("https://forms.gle/example")).toBe("https://forms.gle/example");
    expect(registrationHref("https://example.com/form")).toBeNull();
  });
});
