import { FaWhatsapp, FaInstagram, FaGithub } from "react-icons/fa";

export default function LeftSidebar() {
  return (
    <div className="fixed left-5 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50">
      {/* Garis kecil */}
      <div className="w-px h-10 bg-gray-500 mx-auto mt-2"></div>

      {/* WhatsApp */}
      <a
        href="https://wa.me/62xxxxxxxxx"
        target="_blank"
        className="group"
      >
        <FaWhatsapp className="text-gray-300 group-hover:text-green-400 
          transition-transform duration-300 group-hover:-translate-y-1 hover:scale-110" 
          size={28}
        />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/yourusername"
        target="_blank"
        className="group"
      >
        <FaInstagram className="text-gray-300 group-hover:text-pink-500 
          transition-transform duration-300 group-hover:-translate-y-1 hover:scale-110" 
          size={28}
        />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/yourusername"
        target="_blank"
        className="group"
      >
        <FaGithub className="text-gray-300 group-hover:text-white 
          transition-transform duration-300 group-hover:-translate-y-1 hover:scale-110" 
          size={28}
        />
      </a>

      {/* Garis kecil */}
      <div className="w-px h-10 bg-gray-500 mx-auto mt-2"></div>
    </div>
  );
}