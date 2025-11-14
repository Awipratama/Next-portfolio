import Image from "next/image";

export default function Home() {
  return (
    <div className="flex main-page w-full min-h-screen items-center justify-center font-sans">
      <main className="flex max-w-[1150px] min-h-screen w-full items-center justify-between py-32">
        <div className="text-section flex flex-col w-1/2 pr-10">
          <h1 className="text-[48px]/14 font-bold mb-6">
            Hai, I'm Awipratama <br /> an FrontEnd Web Developer
          </h1>
          <p className="pb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            incidunt quia explicabo optio nostrum veritatis natus fugiat maxime
            tenetur libero.
          </p>
          <a className="text-center text-[18px] py-3 bg-[#4F46E5] hover:bg-[#6366F1] w-50 rounded-2xl" href="#">Learn More</a>
        </div>
        <div className="image-section w-1/2">
          <img className="rounded-full w-[80%] ml-auto" src="/Images/profile-1.jpg" alt="" />
        </div>
      </main>
    </div>
  );
}
