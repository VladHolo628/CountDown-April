const resultOutput = document.querySelector(".result");
const historyOutput = document.querySelector(".countdown__history-list");

export const renderResult = (resultObj) => {
  const { years, months, days, hours } = resultObj;

  const output = {
    years: years > 0 ? years + " YEARS" : "",
    months: months > 0 ? months + " MONTHS" : "",
    days: days > 0 ? days + " DAYS" : "",
    hours: hours > 0 ? hours + " HOURS" : "",
  };

  const formattedResult = `${output.years} ${output.months} ${output.days} ${output.hours}`;
  resultOutput.textContent = formattedResult;
  return formattedResult;
};

export const addToHistory = (date, result) => {
  const newHistoryItem = document.createElement("li");

  const newHistoryItemContent = date + " - " + result;

  newHistoryItem.classList.add("countdown__history-item");
  newHistoryItem.textContent = newHistoryItemContent;

  historyOutput.appendChild(newHistoryItem);
};
