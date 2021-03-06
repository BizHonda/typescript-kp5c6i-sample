// Import stylesheets
import "./style.css";
import { Question } from "./question";

const qnum: number = 4;

function main() {
  const restart: HTMLElement = document.getElementById("restart");
  const frame: HTMLElement = document.getElementById("frame");

  const question: Question = new Question(qnum);
  frame.textContent = question.init();

  restart.addEventListener("click", () => {
    frame.textContent = question.init();
  });

  window.addEventListener("keydown", (e: KeyboardEvent) => {
    e.preventDefault();
    const res: string | boolean = question.main(e.key.toUpperCase());
    if (typeof res == "string") frame.textContent = res;
  });
}

main();
