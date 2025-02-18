const brooklyn = document.querySelector(".brooklyn");

brooklyn.addEventListener("dblclick", () => {
  const fullscreenElement =
    document.fullscreenElement || document.webkitFullscreenElement;

  if (!fullscreenElement) {
    if (brooklyn.requestFullscreen) {
      brooklyn.requestFullscreen();
    } else if (brooklyn.webkitRequestFullscreen) {
      brooklyn.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
});

const ninho = document.querySelector(".ninho");

ninho.addEventListener("dblclick", () => {
  const fullscreenElement =
    document.fullscreenElement || document.webkitFullscreenElement;

  if (!fullscreenElement) {
    if (ninho.requestFullscreen) {
      ninho.requestFullscreen();
    } else if (ninho.webkitRequestFullscreen) {
      ninho.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
});

const kyrie = document.querySelector(".kyrie");

kyrie.addEventListener("dblclick", () => {
  const fullscreenElement =
    document.fullscreenElement || document.webkitFullscreenElement;

  if (!fullscreenElement) {
    if (kyrie.requestFullscreen) {
      kyrie.requestFullscreen();
    } else if (kyrie.webkitRequestFullscreen) {
      kyrie.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
});
