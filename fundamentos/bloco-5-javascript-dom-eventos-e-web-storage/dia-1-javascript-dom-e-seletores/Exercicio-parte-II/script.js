
let headerContainer = document.getElementById('header-container');
headerContainer.style.backgroundColor = "blue";

let emergencyTasks = document.querySelector(".emergency-tasks");
emergencyTasks.style.backgroundColor = "rgb(0,128,128)"
emergencyTasks.style.color = 'black'

let emergencyTasks2 = document.querySelectorAll(".emergency-tasks h3");
emergencyTasks2[0].style.backgroundColor = 'rgb(95,158,160)'
emergencyTasks2[1].style.backgroundColor = 'rgb(95,158,160)'

let noEmergencyTasks = document.querySelector(".no-emergency-tasks");
noEmergencyTasks.style.backgroundColor = "rgb(186,85,211)"
noEmergencyTasks.style.color = 'black'

let noEmergencyTasks2 = document.querySelectorAll(".no-emergency-tasks h3");
noEmergencyTasks2[0].style.backgroundColor = "rgb(221,160,221)"
noEmergencyTasks2[1].style.backgroundColor = 'rgb(221,160,221)'

let footerContainer = document.getElementById("footer-container");
footerContainer.style.backgroundColor = "salmon"