import logo from "../assets/ammh.webp";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-18 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-6 w-12" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a
          href="https://www.linkedin.com/in/prathyusha-g-2b911123a/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      <a
          href="https://github.com/PEK-1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/_ii_ammu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.twitter.com/your-twitter-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
