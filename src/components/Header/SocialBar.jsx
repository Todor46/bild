import { ReactComponent as Twitter } from "./img/twitter.svg";
import { ReactComponent as Facebook } from "./img/facebook.svg";
import { ReactComponent as Rss } from "./img/rss.svg";
import { ReactComponent as Pinterest } from "./img/pinterest.svg";
import { ReactComponent as Google } from "./img/google-plus.svg";
import { ReactComponent as Dribbble } from "./img/dribbble.svg";

const SocialBar = () => {
  return (
    <div className="gap-2 hidden sm:flex">
      <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
        <Twitter className="fill-current text-[#dadada] hover:text-blue-500" />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <Facebook className="fill-current text-[#dadada] hover:text-blue-500" />
      </a>
      <a href="https://www.rss.com" target="_blank" rel="noreferrer">
        <Rss className="fill-current text-[#dadada] hover:text-blue-500" />
      </a>
      <a href="https://www.pinterest.com" target="_blank" rel="noreferrer">
        <Pinterest className="fill-current text-[#dadada] hover:text-blue-500" />
      </a>
      <a href="https://www.google.com" target="_blank" rel="noreferrer">
        <Google className="fill-current text-[#dadada] hover:text-blue-500" />
      </a>
      <a href="https://www.dribbble.com" target="_blank" rel="noreferrer">
        <Dribbble className="fill-current text-[#dadada] hover:text-blue-500" />
      </a>
    </div>
  );
};

export default SocialBar;
