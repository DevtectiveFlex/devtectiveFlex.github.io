const clockface = document.querySelectorAll('.timer__clockface');
const setTimeToNewYear = () => {
  const currentDate = new Date();
  const NEW_YEAR = new Date(2025, 0, 1, 0, 0, 0);
  const timeDifference = NEW_YEAR - currentDate;

  const seconds = Math.floor(timeDifference / (1000) % 60);
  const minutes = Math.floor(timeDifference / (1000 * 60) % 60);
  const hours = Math.floor(timeDifference / (1000 * 60 * 60) % 24);
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
  clockface[0].textContent = days;
  clockface[1].textContent = hours;
  clockface[2].textContent = minutes;
  clockface[3].textContent = seconds;
}

setInterval(setTimeToNewYear, 1000);