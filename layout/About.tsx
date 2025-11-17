export default function About() {
  return (
    <section className="about-section flex w-full min-h-screen items-center justify-center font-sans py-32 bg-[#0c1b3c]">
      <div className="about-container max-w-[1150px] gap-6 flex">
        <div className="about-image relative flex items-center justify-center">
          <img
            className="rounded-2xl relative w-full z-10 h-auto object-contain"
            src="/Images/illustration-4.jpg"
            alt="profile-picture"
          />
        </div>
        <div className="about-text mt-10 max-w-3xl text-start mx-auto text-gray-300">
          <h5 className="text-md font-semibold mb-2 text-white">About Me</h5>
          <h2 className="capitalize mb-6 text-4xl font-bold">Turning ideas into smooth, modern, and intuitive digital experiences.</h2>
          <p className="mb-4">
            I'm a passionate Front-End Developer with a strong interest in creating interactive and user-friendly web experiences. I've won multiple Web Design and IT quiz competitions, and I've worked professionally as a Web Developer at a private company in Bali.
          </p>
        </div>
      </div>
    </section>
  );
}
