'use client'
import '../../../style/index/main.scss'
import assets from '../assets';
import Cards from '../assets/cards/cards';


export default function Main() {
  
  return (
    <main className="container_principal">
      <article className="container_info">
        <h1 className="container_title">Coffee Stellar</h1>
        <p className="container-description">
          A cafeteria que vai te dar uma <br />
          experiência interestelar!
        </p>
        <button className="know_btn">
          Venha conhecer {'<'}3
        </button>
      </article>

      <Cards images={assets.mainJs} hadHelp={true}/>
    </main>
  );
}