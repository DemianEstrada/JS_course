
function updateCalcDisplay(){
  document.querySelector('.js-calculation')
    .innerHTML= `${calculation}`;
}

let calculation = localStorage.getItem('calculation') || '';

updateCalcDisplay();

function updateCalculation(add) {
  typeof add === 'number' || add==='.' ?  calculation += add: calculation = calculation + (` ${add} `);
  localStorage.setItem('calculation', calculation);
  updateCalcDisplay();
  return;
}
