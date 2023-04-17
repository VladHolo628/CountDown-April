import { intervalToDuration } from "date-fns";
import { addToHistory, renderResult } from "./UI";

const form = document.querySelector(".countdown__form");
const input = form.querySelector(".countdown__input");

const getDatesDistance = (date) => {
  const futureDate = new Date(date).setHours(0);
  const presentDate = Date.now();

  const distance = intervalToDuration({
    start: presentDate,
    end: futureDate,
  });

  return distance;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const selectedDistance = getDatesDistance(input.value);

  renderResult(selectedDistance);
  addToHistory(input.value, renderResult(selectedDistance));
});
