import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export default Top;

function Top() {
  return (
    <div className="relative flex items-center px-20 min-h-screen ">
      <div className="mr-auto ml-auto text-4xl font-bold marker:text-blue-500">
        <h1 className="font-serif animate-fade-in">
          안녕하세요. Frontend Developer &nbsp;
          <span className="font-serif font-extrabold text-transparent bg-gradient-to-r bg-clip-text from-cyan-500 to-teal-300">
            이규동
          </span>
          입니다.
          <br />
          주니어 소프트웨어 개발자 입니다.
        </h1>
        <br />
        <div className="animate-fade-in-delay inline-block rounded-xl mx-auto text-black bg-gradient-to-r p-[6px] from-cyan-500 to-teal-300">
          <a
            href=""
            className="transition-all 
            duration-500 flex flex-col justify-between h-full
           bg-white rounded-lg p-2 
           hover:text-white
           hover:bg-gradient-to-r from-cyan-500 to-teal-300
           "
          >
            <Link to="about" spy={true}>
              {/* smooth={true}삭제 */}더 알아 보기
            </Link>
          </a>
          {/* <button className="transition-all duration-500 bg-gradient-to-t to-white via-black from-red-500 bg-size-200 bg-pos-0 hover:bg-pos-100">
            Hover me
          </button> */}
          {/* 실패 
          <div
            className="transition-all 
            duration-500 flex flex-col justify-between h-full
           bg-white rounded-lg p-2 
           hover:text-white
           hover:bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]
           "
          >
            더 알아 보기
          </div> */}
        </div>

        {/* <a
          className="animate-fade-in-delay inline-block 
          border-2 
          hover:bg-sky-700 
          text-transparent bg-gradient-to-r bg-clip-text from-cyan-500 to-teal-300  "
          href="#AboutMe"
        >
          1번 더 알아보기
        </a> */}
      </div>
    </div>
  );
}
