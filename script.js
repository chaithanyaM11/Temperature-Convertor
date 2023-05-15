// const degreeInput = document.querySelector(".deg");
// const typeSelect = document.querySelector("#converter");
// const resultInput = document.querySelector(".answer");
// const convertBtn = document.querySelector("button");

// convertBtn.addEventListener("click", (event) => {
//   event.preventDefault();

//   const degree = degreeInput.value;
//   const type = typeSelect.value;

//   let convertedDegree;
//   switch (type) {
//     case "Celsius":
//       convertedDegree = parseFloat(degree) * 9 / 5 + 32;
    
//       break;
//     case "Kelvin":
//       convertedDegree = parseFloat(degree) + 273.15;
//       break;
//     case "fahrenheit":
//       convertedDegree = (parseFloat(degree) - 32) * 5 / 9;
//       break;
//     default:
//       break;
//   }

//   resultInput.value = convertedDegree.toFixed(2);
// });












const degreeInput = document.querySelector(".deg");
const typeSelect = document.querySelector("#converter");
const converstiontype=document.querySelector('#converter1')
const resultInput = document.querySelector(".answer");
const convertBtn = document.querySelector(".btn");

convertBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const degree = degreeInput.value;
  const converstion = converstiontype.value;

  let convertedDegree;
  switch (converstion) {
    case "Celsius":
      convertedDegree = parseFloat(degree) * 9 / 5 + 32;
      resultInput.value = convertedDegree.toFixed(2)+ "C";
      break;
    case "Kelvin":
      convertedDegree = parseFloat(degree) + 273.15;
      resultInput.value = convertedDegree.toFixed(2)+ "K";
      break;
    case "fahrenheit":
      convertedDegree = (parseFloat(degree) - 32) * 5 / 9;
      resultInput.value = convertedDegree.toFixed(2) + "F";
      break;
    default:
      break;
  }

 
});