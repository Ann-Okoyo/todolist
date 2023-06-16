const namePlace= document.getElementById('addition');
const myInformation = () => {
  return fetch('https://dummyjson.com/todos?limit=12')
    .then(response => response.json())
    .then(response => response.todos)
    .catch(error => error);
};
const dispInfo = async () => {
  const dispInfo = await myInformation();
  console.log(dispInfo);
  if (Array.isArray(dispInfo)) {
      dispInfo.forEach(item => {
      let div = document.createElement('div');
      let myName = document.createElement('input');
      let details = document.createElement('span');
      let look = document.createElement('input');
      let icon = document.createElement('i');
      look.type = 'check';
      look.checked = item.completed;
      icon.classList.add('fa', 'fa-trash');
      details.appendChild(icon);
      myName.value = item.todo;
      look.addEventListener('change', () => {
        if (look.checked) {
          myName.style.textDecoration = 'line-through';
        } else {
          myName.style.textDecoration = 'none';
        }
      });
      icon.addEventListener('click', () => {
        removeName(item.id);
        div.remove();
      });
      div.appendChild(look);
      div.appendChild(myName);
      div.appendChild(details);
      div.setAttribute('key', item.id);
      div.setAttribute('class', 'people');
      namePlace.appendChild(div);
    });
  }
};
const removeName = async (userId) => {
  try {
    const response = await fetch(`https://dummyjson.com/todos/${userId}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
  } catch (error) {
    console.log(error);
  }
};
dispInfo();

const information = document.getElementById('information');
  information.addEventListener('add', event => {
  event.preventDefault();
  const Enter = document.getElementById('add');
  const extraWork = Enter.value;
  Enter.value = '';
  if (extraWork) {

    const div = document.createElement('div');
    const myName = document.createElement('input');
    const details = document.createElement('span');
    const look = document.createElement('input');
    const icon = document.createElement('i');
    look.type = 'check';
    look.checked = false;
    icon.classList.add('fa', 'fa-trash');
    details.appendChild(icon);
    myName.value = extraWork;
    look.addEventListener('change', () => {
      if (look.checked) {
        myName.style.textDecoration = 'line-through';
      } else {
        myName.style.textDecoration = 'none';
      }
    });
    div.appendChild(check);
    div.appendChild(myName);
    div.appendChild(details);
    div.setAttribute('key', Date.now());
    div.setAttribute('class', 'people');
    namePlace.prepend(div);
  }
});