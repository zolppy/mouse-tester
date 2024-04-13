const clickableAreaEl: HTMLElement | null = document.querySelector(".clickable-area");
const leftButtonEl: HTMLElement = document.querySelector(".mouse__left-button") as HTMLButtonElement;
const middleButtonEl: HTMLElement = document.querySelector(".mouse__middle-button") as HTMLButtonElement;
const rightButtonEl: HTMLElement = document.querySelector(".mouse__right-button") as HTMLButtonElement;

const toggleActiveEl = (event: MouseEvent): void => {
  switch (event.button) {
    case 0:
      leftButtonEl.classList.toggle("active");
      break;
    case 1:
      middleButtonEl.classList.toggle("active");
      break;
    case 2:
      rightButtonEl.classList.toggle("active");
  }
}

clickableAreaEl?.addEventListener("mousedown", (event: MouseEvent): void => toggleActiveEl(event));

clickableAreaEl?.addEventListener("mouseup", (event: MouseEvent): void => toggleActiveEl(event));

clickableAreaEl?.addEventListener("contextmenu", (event: MouseEvent): void => event.preventDefault());