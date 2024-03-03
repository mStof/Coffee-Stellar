import assets from "./assets";
import Cards from "./assets/cards/cards";
import '../../style/aboutUs.scss'

export default function AboutUs() {
  return (
    <div className="about-container" id="about-us">
      <h2 className="about-title">Sobre nós :{">"}</h2>
      <p className="about-paragraph">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet vitae
        accusamus reprehenderit ipsum ullam quia! Eaque commodi sint libero quis
        blanditiis ad minus temporibus, facilis debitis repudiandae dignissimos!
        A, voluptates, illum quo ullam corporis tempora error cupiditate neque
        quod maxime non vero, molestiae nam! Officiis hic maiores cumque facere
        placeat pariatur debitis iusto, dolores est.
      </p>
      <Cards images={assets.aboutUsJs} hadHelp={false} />
    </div>
  );
}
