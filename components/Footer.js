import {
  faDiscord,
  faGithub,
  faReddit,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer grid-flow-col items-center p-4 text-neutral-content">
      <div className="items-center grid-flow-col text-xs">
        <p>copyright © 2022 everything labs llc. all rights reserved.</p>
      </div>
      <div className="grid-flow-col gap-1 place-self-center justify-self-end">
        <Link
          href="/privacy-policy.html"
          target="_blank"
          rel="noreferrer"
        >
          <p className="mx-1 transition ease-in-out duration-500 hover:text-red-400 cursor-pointer">privacy policy</p>
        </Link>
        <a
          href="https://twitter.com/evrythingprject"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="mx-1 transition ease-in-out duration-500 hover:text-blue-400 cursor-pointer"
            size="lg"
            icon={faTwitter}
          />
        </a>
        <a
          href="https://discord.gg/pEGGmMGDfy"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="mx-1 transition ease-in-out duration-500 hover:text-indigo-700 cursor-pointer"
            size="lg"
            icon={faDiscord}
          />
        </a>
        <a
          href="https://old.reddit.com/r/everythingproject/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="mx-1 transition ease-in-out duration-500 hover:text-orange-600"
            size="lg"
            icon={faReddit}
          />
        </a>
        <a
          href="https://github.com/near-everything"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="mx-1 transition ease-in-out duration-500 hover:text-violet-600 cursor-pointer"
            size="lg"
            icon={faGithub}
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
