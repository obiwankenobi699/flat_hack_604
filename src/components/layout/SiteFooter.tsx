import Image from "next/image";

export function SiteFooter() {
  return (
    <footer>
      <a className="footer-mark" href="#top"><Image src="/assets/flat-hack-house.svg" alt="" width={58} height={58} />Flat Hack <span>604</span></a>
      <p>Built for people who make things.</p>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
