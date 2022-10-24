import upArrow from "../images/up-arrow.png";
import icGithub from "../images/ic-github.png";
import icGoogle from "../images/google-logo.png";
import icPhone from "../images/phone.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Footer() {
  const notify = () => toast("010-9304-1889");
  return (
    <footer className="h-10v mt-2">
      <div className="flex mx-20 justify-between">
        <div className="inline-block">© JKS5 2022, All Rights Reserved</div>
        <ul className="flex inline-block ">
          <li className="mr-1 ">
            <a href="https://github.com/JKS5">
              <img className="w-7" src={icGithub} />
            </a>
          </li>
          <li className="mx-1">
            <a href="mailto:jokekhanson@gmail.com">
              <img className="w-7" src={icGoogle} />
            </a>
          </li>
          <li className="mx-1">
            <a onClick={notify}>
              {/* 아이페드 처럼 클릭시 가볍게 올라오고 클릭시 copid뜨고 5초뒤 사라지기 */}
              <img className="w-7" src={icPhone} />
            </a>
          </li>
          <ToastContainer />
        </ul>
      </div>
      {/* <div className="z-100" onclick={ScrollUp}>
            <img className="w-10" src={upArrow}></img>
          </div> */}
    </footer>
  );
}
export default Footer;
