import dp from "../images/displaypic.png";
/**아래에서 위로 */
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = -50;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

/**
위에서 
*/
function reveal_top() {
  var reveals = document.querySelectorAll(".reveal_top");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 0;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal_top);

/**
  왼쪽에서 에니메이션 나옴
 */
function reveal_left() {
  var reveals = document.querySelectorAll(".reveal_left");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = -50;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal_left);

export default function AboutMe() {
  return (
    <div
      id="about"
      className="relative h-full bg-gradient-to-r py-2.5  from-[#02aab0] to-[#00cdac] pb-16  "
    >
      <div className=" w-full ">
        <div className=" reveal_top text-center text-white text-7xl pt-10 mb-16 font-bold  ">
          {/* animate-fade-in-delay-0-100-zero */}
          About Me
        </div>
        <div className=" m-auto mx-auto flex flex-wrap">
          <div className="flex items-center justify-center w-1/2  ">
            <img className="reveal_left" src={dp}>
              {/* animate-fade-in-up */}
            </img>
          </div>
          <div className="animate-fade-in-delay text-white  w-1/3 flex flex-col h-full  ">
            <div className="justify-center ">
              <div className="text-3xl reveal"> 소통하는 개발자</div>
              <div className="mt-2 reveal">
                2,4 주 프로젝트 진행 할 때에 프론트 개발만 하는 것이 아닌 풀스택
                개발로 코드의 흐름을 이해하며 팀원분들과 더욱 소통하려고 노력을
                하였습니다. 문제나 오류가 생겼을시 혼자서 최대한 오류와 문제를
                풀려고 노력을 하고 문제점을 찾아 팀원분들과 의견을 나누어가며
                문제를 해결한 경험이 있습니다.
              </div>
              <div className="mt-5 text-3xl reveal"> 성장하는 개발자 </div>
              <div className="mt-2 reveal">
                개발자가 되기 위하여 지난 5개월 간 코드스테이츠 부트캠프
                소프트웨어 엔지니어링 과정을 수료하였습니다. 이때 저는
                Javascript 바탕으로 프론트 개발에 핵심인 React를 공부하고
                Node.js, express, MySql 통해 서버 개발 및 배포 익혀 배포한
                경험도 있습니다.
              </div>
              <div className="mt-5 text-3xl reveal">도와주는 개발자 </div>
              <div className="mt-2 reveal">
                4주동안 프로젝트 진행 후에 다른 팀의 도움요청에 응하여 타 팀원의
                프로젝트 리팩토리 작업을 도와 주었습니다. 그만큼 협업 능력을
                중요시하고 다른 팀원의 도와주며 목표나 맡은일에 어려움이 있으면
                서로 동료를 도와 끊임없이 노력하여 완수 해냅니다.
              </div>
              <br></br>
              <div className="mt-2 reveal">
                <span>
                  제가 우선하는 것은 업무의
                  <span className="font-bold">'협업'</span>과
                  <span className="font-bold">'소통'</span>이 정말 중요하다고
                  생각합니다.
                </span>
              </div>
            </div>
            {/* <div className="inline reveal">
              <div className="border-2 inline-block py-1 px-2 mt-3 ">
                <a target="-blank" className="" href="/assets/resume.pdf">
                  이력서 보기
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
