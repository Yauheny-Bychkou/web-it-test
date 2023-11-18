window.addEventListener("load", () => {
  document.documentElement.style.setProperty(
    "--scrollbar-width",
    window.innerWidth - document.documentElement.clientWidth + "px"
  );
});

const initShowModal = () => {
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const buttonShowModal = document.querySelector(".wrap__button");
  const body = document.querySelector("body");

  buttonShowModal.addEventListener("click", () => {
    body.classList.add("body-overlay");
    modal.classList.add("modal--visible");
    overlay.classList.add("overlay--visible");
  });
  overlay.addEventListener("click", () => {
    body.classList.remove("body-overlay");
    modal.classList.remove("modal--visible");
    overlay.classList.remove("overlay--visible");
  });
};

initShowModal();
