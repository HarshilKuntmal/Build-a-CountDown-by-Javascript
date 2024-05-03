//  Vars
const endDate = "6 May 2024 10:00 PM";
document.querySelector("#end-date").innerText = endDate;
const remainingTime = document.querySelectorAll("input");

function countDown() {
  const end = new Date(endDate);
  const present = new Date();
  const differeanceTime = (end - present) / 1000;

  //convert into days
  
  remainingTime[0].value = Math.floor(differeanceTime / 3600 / 24);

  //convert into Hours
  
  remainingTime[1].value = Math.floor(differeanceTime / 3600) % 24;

  //convert into Minutes
  
  remainingTime[2].value = Math.floor(differeanceTime / 60) % 60;

  //convert into Seconds

  remainingTime[3].value = Math.floor(differeanceTime) % 60;
}

// call the function in every  1 Second 

setInterval(() => {
  countDown();
}, 1000);
