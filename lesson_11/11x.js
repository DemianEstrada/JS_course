function addAct(){

  const inputAct = document.querySelector('.js-input');
  const inputDate = document.querySelector('.js-dateLimit')

  const name = inputAct.value;
  const dueDate = inputDate.value;
  
  activities.push({
    name,
    dueDate,
  });

  inputAct.value = '';
  inputDate.value='';

  updateText();

  return;
}

function updateText(){

  let activitiesListHtml = '';

  for (let i=0; i<activities.length;i++){

    const activityObject = activities[i];
    const {name, dueDate} = activityObject;

    const html = `<div class="activity">
    ${name}</div>
    <div>${dueDate}</div>
    <button class="delete-button" onclick="
      activities.splice(${i}, 1);
      updateText();
    ">Delete</button>`;

    activitiesListHtml += html;
  }

  listHtml.innerHTML = activitiesListHtml;

  localStorage.setItem('activities',JSON.stringify(activities));
  return;
}


const activities = JSON.parse(localStorage.getItem('activities'))||[];

const listHtml = document.querySelector('.js-list');

listHtml.innerHTML ='';

updateText();
