"use client";

export default function MainNavbar() {
  return (
    <div className="main-navbar fixed flex justify-center w-full">
      <nav className="w-full max-w-[1150px] flex justify-between">
        <div className="logo py-2">
          <img
            className="w-[100px]"
            src="/Logos/logo-white-remove-bg.png"
            alt=""
          />
        </div>
        <ul className="flex justify-center gap-4 w-full items-center">
          <li>
            <a className="nav-fonts active" href="#">Home</a>
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
        <div className="cv-btn flex py-7">
          <button className="cursor-pointer font-medium w-[120px] rounded-2xl bg-[#6366F1] hover:bg-[#4F46E5] px-4">Get My CV</button>
        </div>
      </nav>
    </div>
  );
}
