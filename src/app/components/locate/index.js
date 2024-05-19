import Cards from "../assets/cards/cards";
import assets from '../assets'
import "../../../style/index/main.scss";
import "../../../style/index/locate.scss";
import LocateMedias from "./socialMedia";
import LocateInfo from "./info";

export default function Locate() {

  const [ cafeImg, googleIcons, socialMedia ] = assets.locateJs
  
  return (
    <div className="locate_container" id="locate">
      <Cards images={cafeImg} hadHelp={false} preload={false}/>
      <div className="locate_info"> 
        <LocateInfo icons={googleIcons} />
        <LocateMedias icons={socialMedia} />
      </div>
    </div>
  );
}
