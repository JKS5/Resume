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
        <div className="flex w-1/2 items-center justify-center text-white">
          <div className="justify-center mx-10 ">
            <div className="text-5xl reveal font_Jua">프론트</div>
            <div className="mt-2 text-2xl reveal">
              기본적인 JavaScript, CSS, HTML을 다룹니다. 위 3가지를 기반으로
              TypeScript, React, Redux(toolkit) 및 Figma, Miro등을 사용 경험이
              있습니다.
            </div>
            <div className="mt-5 text-5xl reveal  font_Jua">백엔드</div>
            <div className="mt-2 text-2xl reveal">
              Node.js, express, MySql 통해 서버 개발 및 배포 익혀 배포한 경험도
              있습니다. Git 과 Github를 사용하여 협업을 하였습니다.
            </div>
            <div className="mt-5 text-5xl reveal  font_Jua"> 배포 </div>
            <div className="mt-2 text-2xl reveal">
              AWS를 통해 EC2를 구매하여 서버를 구매하고, 도메인을 구매하여
              서버를 apache를 통해 항시 유지되도록 하였습니다.
            </div>
          </div>
        </div>
        <div className=" flex w-1/2 justify-center text-white reveal_right">
          <div>
            <div className="flex flex-wrap">
              <img className="animate-fade-in-up photo" src={CSS3I}></img>
              <img className="animate-fade-in-up photo" src={HTML5I}></img>
              <img className="animate-fade-in-up photo" src={JAVASCRIPTI}></img>
            </div>
            <div className="flex flex-wrap">
              <img className="animate-fade-in-up photo" src={REDUXI}></img>
              <img className="animate-fade-in-up photo" src={TYPESCRIPTI}></img>
              <img className="animate-fade-in-up photo" src={REACTI}></img>
            </div>

            <br></br>
            <div className="flex flex-wrap ">
              <img className="animate-fade-in-up photo" src={APACHEI}></img>
              <img className="animate-fade-in-up photo" src={GITHUBI}></img>
              <img className="animate-fade-in-up photo" src={GITI}></img>

              <div className="flex flex-wrap ">
                <img className="animate-fade-in-up photo" src={NODE}></img>
                <img className="animate-fade-in-up photo" src={AWSI}></img>
                <img className="animate-fade-in-up photo" src={MYSQLI}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
