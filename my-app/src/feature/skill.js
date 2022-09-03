import AWSI from "../images/AWS.png";
import CSS3I from "../images/CSS3.png";
import HTML5I from "../images/HTML5.png";
import REACTI from "../images/React.png";
import JAVASCRIPTI from "../images/Javascript.png";
import APACHEI from "../images/apache.png";
import EXPRESSJSI from "../images/expressJs.png";
import GITI from "../images/git.png";
import GITHUBI from "../images/github.png";
import NODE from "../images/node.png";
import MYSQLI from "../images/mySql.svg";
import REDUXI from "../images/redux.png";
import TYPESCRIPTI from "../images/typeScript.png";

export default Skill;

function Skill() {
  return (
    <div className="relative h-full bg-gradient-to-r py-2.5  from-[#2e77a9] to-[#123344] pb-16  ">
      <div className="relative felx text-center text-white text-7xl font-bold pt-10 mb-16">
        Tech Stack
      </div>
      <div className="flex flex-wrap">
        <div className="flex w-1/2 text-white">
          <div className="">
            <div className="">기술 스택에 대한 전반적인 경험 보유</div>
            <div className="">
              프론트 엔드를 지향하면서 React를 중심으로한 기술 스택을 사용
            </div>
            <div className="">
              DB 스키마 작성, AWS를 통햬 도메인을 구입하여 배포를 한 경험이
              있습니다.
            </div>
          </div>
        </div>
        <div className=" flex w-1/2 justify-center text-white">
          <div>
            <div className="flex flex-wrap">
              <img className="animate-fade-in-up photo" src={CSS3I}></img>
              <img className="animate-fade-in-up photo" src={HTML5I}></img>
              <img className="animate-fade-in-up photo" src={JAVASCRIPTI}></img>
              <img className="animate-fade-in-up photo" src={REDUXI}></img>
              <img className="animate-fade-in-up photo" src={TYPESCRIPTI}></img>
              <img className="animate-fade-in-up photo" src={REACTI}></img>
            </div>
            <br></br>
            <div className="flex flex-wrap ">
              <img className="animate-fade-in-up photo" src={APACHEI}></img>
              <img className="animate-fade-in-up photo" src={GITHUBI}></img>
              <img className="animate-fade-in-up photo" src={GITI}></img>
              <img className="animate-fade-in-up photo" src={NODE}></img>
              <img className="animate-fade-in-up photo" src={AWSI}></img>
              <img className="animate-fade-in-up photo" src={MYSQLI}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
