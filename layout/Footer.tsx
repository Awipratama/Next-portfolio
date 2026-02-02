export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <section id="footer" className="footer bg-[#1a2340] w-full py-6">
      <div className="footer-container max-w-[1150px] mx-auto text-center">
        <p className="text-white text-[14px]">
          © {year} My Portfolio. All rights reserved.
        </p>
      </div>
    </section>
  );
}
