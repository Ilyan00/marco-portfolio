const valentino = document.querySelector(".valentino");

valentino.addEventListener("dblclick", () => {
  const fullscreenElement =
    document.fullscreenElement || document.webkitFullscreenElement;

  if (!fullscreenElement) {
    if (valentino.requestFullscreen) {
      valentino.requestFullscreen();
    } else if (valentino.webkitRequestFullscreen) {
      valentino.webkitRequestFullscreen();
    }
    valentino.querySelector("video").muted = false;
    valentino.querySelector("video").controls = true;
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
    valentino.querySelector("video").muted = true;
    valentino.querySelector("video").controls = false;
  }
});

const silent = document.querySelector(".silent");

silent.addEventListener("dblclick", () => {
  const fullscreenElement =
    document.fullscreenElement || document.webkitFullscreenElement;

  if (!fullscreenElement) {
    if (silent.requestFullscreen) {
      silent.requestFullscreen();
    } else if (silent.webkitRequestFullscreen) {
      silent.webkitRequestFullscreen();
    }
    silent.querySelector("video").muted = false;
    silent.querySelector("video").controls = true;
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
    silent.querySelector("video").muted = true;
    silent.querySelector("video").controls = false;
  }
});

const ville = document.querySelector(".ville");

ville.addEventListener("dblclick", () => {
  const fullscreenElement =
    document.fullscreenElement || document.webkitFullscreenElement;

  if (!fullscreenElement) {
    if (ville.requestFullscreen) {
      ville.requestFullscreen();
    } else if (ville.webkitRequestFullscreen) {
      ville.webkitRequestFullscreen();
    }
    ville.querySelector("video").muted = false;
    ville.querySelector("video").controls = true;
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
    ville.querySelector("video").muted = true;
    ville.querySelector("video").controls = false;
  }
});
