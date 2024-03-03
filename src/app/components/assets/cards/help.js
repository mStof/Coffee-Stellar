import { TbDragDrop } from "react-icons/tb";

export default function HelpPicture() {
  function handleRemoveHelp(e) {
    e.target.parentNode.style.opacity = 0;
    setTimeout(() => {
      e.target.parentNode.style.display = "none";
    }, 270);
  }

  return (
    <div className="help_picture">
      <TbDragDrop className="help_icon" />
      <p className="help_paragraph">
        Arraste as imagens de nossos produtos para prosseguir
      </p>
      <p onClick={handleRemoveHelp}>Clique, para continuar</p>
    </div>
  );
}
