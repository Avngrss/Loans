import { setInterval } from "core-js";
import Slider from "./slider";

export default class MiniSlider extends Slider {
  constructor(container, next, prev, activeClass, animate, autoplay) {
    super(container, next, prev, activeClass, animate, autoplay);
  }

  decorazeiSlide() {
    this.slidesArr.forEach((slide) => {
      slide.classList.remove(this.activeClass);
      if (this.animate) {
        slide.querySelector(".card__title").style.opacity = "0.4";
        slide.querySelector(".card__controls-arrow").style.opacity = "0";
      }
    });

    if (!this.slides[0].closest("button")) {
      this.slides[0].classList.add(this.activeClass);
    }

    if (this.animate) {
      this.slidesArr[0].querySelector(".card__title").style.opacity = "1";
      this.slidesArr[0].querySelector(".card__controls-arrow").style.opacity =
        "1";
    }
  }

  nextSlide() {
    if (
      this.slides[1].tagName == "BUTTON" &&
      this.slides[1].tagName == "BUTTON"
    ) {
      this.container.appendChild(this.slidesArr[0]);
      this.container.appendChild(this.slidesArr[1]);
      this.container.appendChild(this.slidesArr[2]);
      this.decorazeiSlide();
    } else if (this.slides[1].tagName == "BUTTON") {
      this.container.appendChild(this.slidesArr[0]);
      this.container.appendChild(this.slidesArr[1]);
      this.decorazeiSlide();
    } else {
      this.container.appendChild(this.slidesArr[0]);
      this.decorazeiSlide();
    }
  }

  bindTriggers() {
    this.next.addEventListener("click", () => this.nextSlide());

    this.prev.addEventListener("click", () => {
      for (let i = this.slides.length - 1; i > 0; i--) {
        if (this.slides[i].tagName !== "BUTTON") {
          let active = this.slidesArr[i];
          this.container.insertBefore(active, this.slidesArr[0]);
          this.decorazeiSlide();
          break;
        }
      }
    });
  }

  init() {
    this.container.style.cssText = `
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        align-items: flex-start;
    `;
    this.bindTriggers();
    this.decorazeiSlide();
    if (this.autoplay) {
      setInterval(() => this.nextSlide(), 5000);
    }
  }
}
