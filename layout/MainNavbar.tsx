"use client";

export default function MainNavbar() {
  return (
    <div className="main-navbar fixed w-full">
      <nav className="w-full mx-auto max-w-[1250px] flex justify-between">
        <div className="logo">
          <img
            className="w-[100px]"
            src="/Logos/logo-white-remove-bg.png"
            alt=""
          />
        </div>
        <ul className="flex justify-center gap-10 w-full items-center">
          <li>
            <a className="nav-fonts" href="#">Home</a>
          </li>
          <li>
            <a className="nav-fonts" href="#">About Me</a>
          </li>
          <li>
            <a className="nav-fonts" href="#">My Portfolio</a>
          </li>
          <li>
            <a className="nav-fonts" href="#">Contact Me</a>
          </li>
        </ul>
        <div className="cv-btn flex">
          <button className="w-full">Get My CV</button>
        </div>
      </nav>
    </div>
  );
}
