import "@/style/coffeePage/info.scss";
import ImgsContainer from "./imgsContainer";

export default function CoffeeInfos({description, imgs}) {

  return (
    <div className="container_info">
      <div className="container_paragraph">
        <p className="paragraph_coffee">
          {description}
        </p>
      </div>
      <ImgsContainer imgs={imgs}/>
    </div>
  );
}
