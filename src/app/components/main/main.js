'use client'
import '../../../style/main.scss'
import Cards from './cards';

export default function Main() {
  
  return (
    <main className="container_principal">
      <article className="container_info">
        <h1 className="container_title">Coffee Stellar</h1>
        <p className="container-description">
          A cafeteria que vai te dar uma <br />
          experiência interestelar
        </p>
        <button className="know_btn">
          Venha conhecer &lt;3
        </button>
      </article>

      <Cards board={0}/>
    </main>
  );
}