import Lentool_Gif from "../images/LT_Chatting.gif";
import CodeCooperation_Gif from "../images/CC_Modify.gif";
import TellMeRestaurant_Gif from "../images/SignUp.gif";

export default Project;
function Project() {
  return (
    <section className="relative min-h-screen h-full bg-white pb-16 border-b-2">
      <div className="text-center text-7xl font-bold pt-10 mb-16">Projects</div>
      <div className="flex">
        <div>
          <div className="reveal_top">
            <img src={TellMeRestaurant_Gif}></img>
          </div>
          <div className="reveal ml-4">
            <div>
              <div className="font_Oswald font-bold">
                Project TellMeRestaurant
              </div>
              <div className="mt-4">첫번째 프로젝트입니다</div>
              <p>처음 협업을 통해 만들어 보았던 프로젝트입니다.</p>
              <p>
                1주동안 기획하고 1주 동안 개발하였으나 완성시키지 못하였습니다.
              </p>
              <p>
                맛집만을 유저간에 업로드하고 공유하는 사이트를 제작하려고
                하였습니다.
              </p>
              <div className="mt-4">
                <span className="border-4">
                  <a
                    href="https://docs.google.com/presentation/d/1urSB1RtsfkCVvjV0akC-L7v-Se-aE5-u7g4JTLKxxm0/edit?usp=sharing"
                    target="_blank"
                  >
                    확인해보기
                  </a>
                </span>
                &nbsp;
                <span className="">
                  <a
                    href="https://github.com/codestates/TellMeRestaurant"
                    target="_blank"
                  >
                    Source Code
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="reveal_top">
            <img src={CodeCooperation_Gif}></img>
          </div>
          <div className="reveal ml-4">
            <div>
              <div className="font_Oswald font-bold">
                Project CodesCooperation
              </div>
              <div className="mt-4">서브 프로젝트입니다.</div>
              <p>다른 팀이 진행하던 4주 프로젝트입니다.</p>
              <p>
                진행중인 프로젝트에 다른 팀원이 빠져 도움을 구하는 요청을 받고
                제가 진행되고 있던 프로젝트에 도움을 준 프로젝트입니다.
              </p>
              <p>프로젝트를 할때 프로그래머 팀원을 구하는 앱입니다.</p>
              <div className="mt-4">
                <span className="border-4">
                  <a href="https://codescooperation.com/" target="_blank">
                    확인해보기
                  </a>
                </span>
                &nbsp;
                <span className="">
                  <a
                    href="https://github.com/codestates/CodeCooperation"
                    target="_blank"
                  >
                    Source Code
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div>
        <div className="reveal_top">
          <img src={Lentool_Gif}></img>
        </div>
        <div className="reveal">
          <div className="ml-4 ">
            <div className="font_Oswald font-bold">Project Lentools</div>
            <div className="mt-4">
              <p>마지막 프로젝트입니다.</p>
              <p>4주간 4인이 진행하던 프로젝트입니다.</p>
              <p>당근마켓과 대여서비스를 합친 형태입니다.</p>
              <p>
                위치 기반 공구 탐색, 이모티콘-카테고리 검색, 채팅 기능,
                소셜로그인를 구현하였습니다.
              </p>
            </div>
            <div className="mt-4">
              <span className="border-4">
                <a href="https://lentools.com/" target="_blank">
                  확인해보기
                </a>
              </span>
              &nbsp;
              <span className="">
                <a href="https://github.com/codestates/Lentool" target="_blank">
                  Source Code
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
