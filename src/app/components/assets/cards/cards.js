"use client";
import Image from "next/image";
import HelpPicture from "./help";
import { useEffect } from "react";
import "../../../../style/index/cards/cards.scss";

export default function Cards({ images, hadHelp }) {

  useEffect(() => {
    const hammerFunction = async () => {
      await import("hammerjs");

      class Carousel {
        constructor(element) {
          this.board = element;
          this.handle();
        }

        handle() {
          this.cards = Array.from(this.board.childNodes);

          [this.topCard, this.nextCard] = Array.from(this.cards).reverse();

          if (this.cards.length > 0) {
            if (this.hammer) this.hammer.destroy();

            this.hammer = new Hammer(this.topCard);
            this.hammer.add(
              new Hammer.Pan({
                position: Hammer.position_ALL,
                threshold: 0,
              })
            );

            this.hammer.on("pan", (e) => {
              this.onPan(e);
            });
          }
        }

        onPan(e) {
          if (!this.isPanning) {
            this.isPanning = true;

            this.topCard.style.transition = null;
            if (this.nextCard) this.nextCard.style.transition = null;

            let style = window.getComputedStyle(this.topCard);
            let mx = style.transform.match(/^matrix\((.+)\)$/);
            this.startPosX = mx ? parseFloat(mx[1].split(", ")[4]) : 0;
            this.startPosY = mx ? parseFloat(mx[1].split(", ")[5]) : 0;

            let bounds = this.topCard.getBoundingClientRect();

            this.isDraggingFrom =
              e.center.y - bounds.top > this.topCard.clientHeight / 2 ? -1 : 1;
          }
          let posX = e.deltaX + this.startPosX;
          let posY = e.deltaY + this.startPosY;

          let propX = e.deltaX / this.board.clientWidth;
          let propY = e.deltaY / this.board.clientHeight;

          let dirX = e.deltaX < 0 ? -1 : 1;

          let deg = this.isDraggingFrom * dirX * Math.abs(propX) * 45;

          this.topCard.style.transform = `translate(${posX}px, ${posY}px) rotate(${deg}deg)`;

          if (e.isFinal) {
            this.isPanning = false;
            let successful = false;
            this.topCard.style.transition =
              "transform 200ms ease-out, opacity 500ms";

            if (this.nextCard) {
              this.nextCard.style.transition =
                "transform 100ms linear, rotate 200ms ease";
            }

            if (propX > 0.25 && e.direction == Hammer.DIRECTION_RIGHT) {
              successful = true;
              posX = this.board.clientWidth;
            } else if (propX < -0.25 && e.direction == Hammer.DIRECTION_LEFT) {
              successful = true;
              posX = -(this.board.clientWidth + this.topCard.clientWidth);
            } else if (propY < -0.25 && e.direction == Hammer.DIRECTION_UP) {
              successful = true;
              posY = -(this.board.clientHeight + this.topCard.clientHeight);
            }

            if (successful) {
              this.topCard.style.transform = `translate(${posX}px, ${posY}px) rotate(${deg}deg)`;
              this.topCard.style.opacity = 0;

              setTimeout(() => {
                if (this.nextCard) this.nextCard.style.rotate = "0deg";
                if (this.topCard.parentNode !== null) {
                  this.board.removeChild(this.topCard);
                  this.push(this.topCard)
                  this.handle();
                }
                if (this.board.childNodes.length === "0") setHasCard(false);
              }, 500);
            } else {
              this.topCard.style.transform =
                "translate(0px) rotate(0deg) scale(1)";
            }
          }
        }
        push(card) {
          this.board.insertAdjacentElement('afterbegin', card)
          card.style = ''
        }
      }
      const boards = document.querySelectorAll(".pictures_list");
      boards.forEach((board) => {
        const carousel = new Carousel(board);
      });
    };
    hammerFunction();
  }, []);

  return (
    <div className="container_pictures">
      <div className="pictures_list">
        {images.map((image) => {
          return (
            <Image
              key={images.indexOf(image) + 1}
              draggable="true"
              className="coffee_pictures"
              src={image}
              alt="Imagem do café"
              priority
            />
          );
        })}
      </div>
      {hadHelp && <HelpPicture />}
    </div>
  );
}
