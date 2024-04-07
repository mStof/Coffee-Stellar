import { TbDragDrop } from "react-icons/tb";

export default function HelpPicture() {
  function handleRemoveHelp() {
    const helpContainer = document.querySelector('.help_picture');
    helpContainer.style.opacity = 0;
    setTimeout(() => {
      helpContainer.style.display = "none";
    }, 270);
  }

  return (
    <div className="help_picture" onClick={handleRemoveHelp}>
      <TbDragDrop className="help_icon" />
      <p className="help_paragraph">
        Arraste as imagens de nossos produtos para prosseguir
      </p>
      <p>Clique, para continuar</p>
    </div>
  );
}
