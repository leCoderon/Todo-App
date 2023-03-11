const form = document.querySelector('form');
const tasks = document.querySelector('ul.tasks');
const input = document.querySelector('form input');


form.addEventListener('submit', (Event) => {
    Event.preventDefault();

    //CREATION DES TACHES:
    if (input.value.length == 0) {
        alert('PLease enter a task!');
    }
    else {
        tasks.innerHTML += `<li>
        <input type="checkbox">
        <span>${input.value}</span>
        <button class="delete"><img src="./images/delete.png" alt=""></button>
    </li>`;

        input.value = '';
    }

    //SUPPRESSION DES TACHES:
    var currentTasks = document.querySelectorAll('ul .delete');
    currentTasks.forEach(task => {
        task.addEventListener('click', (Event) => {
            Event.target.parentNode.remove();
        })
    });

    //MARQUER LES TACHES ACCOMPLIES:
    var tasksDone = document.querySelectorAll('ul input');
    for (let i = 0; i < tasksDone.length; i++) {
        tasksDone[i].addEventListener('click', function (e) {
            e.target.parentNode.classList.toggle('taskDone');
        })
    }
})





