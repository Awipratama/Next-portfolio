import FloatingShapes2 from "@/components/FloatingShapes2";

export default function About() {
  return (
    <section
      id="about"
      className="about-section flex w-full items-center justify-center font-sans pt-10 bg-[#0c1b3c]"
    >
      <div className="about-container max-w-[1150px] gap-10 flex">
        <FloatingShapes2 />
        <div className="about-image relative flex items-center justify-center">
          <img
            className="rounded-2xl relative w-full z-10 h-auto object-contain"
            src="/Images/illustration-4.jpg"
            alt="profile-picture"
          />
        </div>
        <div className="about-text max-w-3xl flex flex-col justify-center text-start mx-auto text-gray-300">
          <h5 className="text-md font-semibold mb-2 text-white">About Me</h5>
          <h2 className="capitalize mb-4 text-4xl font-bold">AWIPRATAMA</h2>
          <p className="mb-6">
            I'm a passionate Front-End Developer with a strong interest in
            creating interactive and user-friendly web experiences. I've won
            multiple Web Design and IT quiz competitions, and I've worked
            professionally as a Web Developer at a private company in Bali.
          </p>
          <div className="about-card-1 flex justify-between items-center rounded-2xl p-6 bg-[#202b50] mb-4 transition-all duration-300 cursor-default hover:scale-105">
            <h5 className="text-lg font-semibold">5+ Complete Web Projects</h5>
            <a href="#" className="hover:underline">
              See More
            </a>
          </div>
          <div className="about-card-2 flex justify-between items-center rounded-2xl p-6 bg-[#1a2340] transition-all duration-300 cursor-default hover:scale-105">
            <h5 className="text-lg font-semibold">20+ GitHub Repository</h5>
            <a href="#" className="hover:underline">
              See More
            </a>
          </div>
          <a
            href="#"
            className="text-lg rounded-2xl px-6 py-4 mt-6 w-60 bg-[#4F46E5] hover:bg-[#6366F1]"
          >
            Download Resume <strong>&rarr;</strong>
          </a>
        </div>
      </div>
    </section>
  );
}
