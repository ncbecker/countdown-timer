import "./app.css";
import { createElement } from "./utils/element";

export function Countdown() {
  let timeLeft = 3;

  const container = document.createElement("div");
  container.innerText = timeLeft;
  const intervalId = setInterval(() => {
    timeLeft--;
    container.innerText = timeLeft;
    if (timeLeft === 0) {
      clearInterval(intervalId);
      alert("Time's over");
    }
  }, 1000);

  const timer = createElement("div", {
    className: "app",
    children: [
      createElement("input", {
        className: "timeInput",
        type: "number",
      }),
      createElement("div", {
        className: "timeOutput",
        innerText: container,
      }),
      createElement("button", {
        classname: "startTimeButton",
        innerText: "Go!",
        // onclick: () => {
        //   const seconds = document.querySelector(".timeInput").nodeValue;
        //   countdown(seconds, timeOutput)
        // };
      }),
    ],
  });

  // return container;

  return timer;
}

// export function createApp() {
//   let timeLeft = 4;

//   const timer = createElement("div", {
//     className: "app",
//     children: [
//       createElement("input", {
//         className: "timeInput",
//         type: "number",
//       }),
//       createElement("div", {
//         className: "timeOutput",
//         innerText: countdown,
//       }),
//       createElement("button", {
//         classname: "startTimeButton",
//         innerText: "Go!",
//         onclick: () => {
//           const seconds = document.querySelector(".timeInput").nodeValue;
//           countdown(seconds, timeOutput)
//         };
//       }),
//     ],
//   });

//   const countdown = function createCountdown(seconds, timeOutput) {

//     const intervalId = setInterval(() => {
//       timeLeft--;
//       container.innerText = timeLeft;
//       if (timeLeft === 0) {
//         clearInterval(intervalId);
//         alert("Time's over");
//       }
//     }, 1000);
//     return container;
//   };

//   return timer;
// }
