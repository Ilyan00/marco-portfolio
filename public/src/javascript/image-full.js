function toggleFullscreen(element) {
  const fullscreenElement =
    document.fullscreenElement || document.webkitFullscreenElement;

  const description = element.querySelector(".description");
  const title = element.querySelector(".title");

  if (fullscreenElement !== element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    }

    if (description) {
      description.classList.add("visible");
      description.classList.remove("fade-out");

      setTimeout(() => {
        if (document.fullscreenElement === element) {
          description.classList.add("fade-out");

          setTimeout(() => {
            description.classList.remove("visible", "fade-out");
          }, 1000);
        }
      }, 10000);
    }

    if (title) {
      title.classList.add("hidden");
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }

    if (description) {
      description.classList.remove("visible", "fade-out");
    }

    if (title) {
      title.classList.remove("hidden");
    }
  }
}
document.querySelectorAll(".brooklyn, .ninho, .kyrie").forEach((element) => {
  element.addEventListener("dblclick", function () {
    toggleFullscreen(this);
  });
});
