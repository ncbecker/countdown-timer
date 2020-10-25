import "./app.css";
import { createElement } from "./utils/element";

export function createApp() {
  const app = createElement("div", {
    className: "app",
    children: [
      createElement("div", {
        className: "time",
        innerText: "60",
      }),
      createElement("button", {
        classname: "startTimeButton",
        innerText: "Go!",
        onclick: () => {
          createCountdownTimer();
        },
      }),
    ],
  });

  // document.createElement("div");
  // app.className = "app";
  // app.innerHTML = "60";

  function createCountdownTimer() {
    const sec = 30;
    const timer = setInterval(function () {
      document.querySelector(".time").innerHTML = "00:" + sec;
      sec--;
      if (sec < 0) {
        clearInterval(timer);
      }
    }, 1000);
  }
  return app;
}
