import upArrow from "../images/up-arrow.png";

import HTML5I from "../images/HTML5.png";
function Footer() {
  return (
    <footer className="relative flex flex-wrap bg-gray-300">
      <div>
        맨위 얇은 선 1개---------------------------
        <div>
          <div>
            <ul>
              <li>
                <a href="">
                  <img>github</img>
                </a>
              </li>
              <li>
                <a>
                  <img>notion</img>
                </a>
              </li>
              <li>
                <a>
                  <img>gmail주소 로고</img>
                </a>
              </li>
            </ul>
          </div>
          <div>선</div>
          <div>© 2022 - developed by 이규동</div>
          <img src={upArrow}></img>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
