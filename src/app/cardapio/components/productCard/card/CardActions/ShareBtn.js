"use client";
import { FaShareFromSquare } from "react-icons/fa6";

export default function ShareBtn({ path }) {
  const shareData = {
    title: "Café Stellar",
    text: "Venha conhecer os maravilhos sabores de nossos produtos <3",
    url: path,
  };

  return (
    <button
      className="card_share_btn"
      onClick={async () => {
        await navigator.share(shareData);
      }}
    >
      <FaShareFromSquare />
    </button>
  );
}
