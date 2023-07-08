import Image from "next/image";

import './header.css'

export default function Header() {
  return (
    <header className="s-header" style={{ backgroundColor: "black" }}>
      <div className="header-logo">
        <div className="flex flex-row">
          {/* <a
            className="site-logo"
            href="index.html"
            style={{ width: "40px", height: "25px", marginLeft: "4px", marginRight: "10px" }}
          >
            <Image
              src="/images/brand.png"
              alt="logo1"
              width={40}
              height={40}
              placeholder="blur"
              blurDataURL={"/images/brand.png"}
            />
          </a> */}
          <a className="site-logo flex flex-col" href="index.html">
            <Image
              src="images/herologo1.svg"
              alt="logo"
              width={108}
              height={28}
              placeholder="blur"
              blurDataURL={"images/herologo1.svg"}
            />
          </a>
        </div>
      </div>

      <nav className="header-nav-wrap">
        <ul className="header-nav">
          <li className="current">
            <a href="index.html" title="Home">
              Home
            </a>
          </li>
          <li>
            <a href="about.html" title="About">
              About
            </a>
          </li>
          <li>
            <a href="events.html" title="Services">
              Events
            </a>
          </li>
          <li>
            <a href="contact.html" title="Contact us">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <a className="header-menu-toggle" href="#0">
        <span>Menu</span>
      </a>
    </header>
  );
}
