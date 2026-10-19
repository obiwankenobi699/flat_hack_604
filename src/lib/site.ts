export const site = {
  name: "Flat Hack 604",
  title: "Flat Hack 604 — Build beyond the brief",
  description: "A focused hackathon for ambitious ideas, unlikely teams, and prototypes that earn their place in the world.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export const event = {
  startAt: process.env.NEXT_PUBLIC_HACKATHON_START ?? "",
  registrationUrl: process.env.NEXT_PUBLIC_REGISTRATION_URL ?? "",
};

export function registrationHref(url: string): string | null {
  return /^https:\/\/(docs\.google\.com\/forms\/|forms\.gle\/)/i.test(url) ? url : null;
}
