const name = document.getElementById('name');
const age = document.getElementById('age')
const email = document.getElementById('email');
const button = document.getElementById('btn');
const table = document.getElementById('table')

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

function volidate() {
    if (!name.value) {
        name.style.outlineColor = 'red';
        name.focus();
        return
    }

    if (!age.value) {
        age.style.outlineColor = 'red';
        age.focus();
        return
    }

    if (!email.value) {
        email.style.outlineColor = 'red';
        email.focus();
        return
    }

    if (!validateEmail(email.value)) {
        alert("notog'ri email kiritgansiz!")
    }
}

function inputValueRemove() {
    age.value = '';
    name.value = '';
    email.value = '';
};

function SetLocalsroge() {
    let data = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
    let user = {};
    user.id = Date.now()
    user.name = name.value;
    user.age = age.value;
    user.email = email.value;
    data.push(user);
    localStorage.setItem('users', JSON.stringify(data));
    CreateRow(user,data.length - 1);
};

function CreateRow(user, index) {
    let strRow = `
        <tr>
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.age}</td>
            <td>
                <span>delete</span>
                <span>update</span>
            </td>
        </tr>
    `;
    table.innerHTML += strRow;
}

button.addEventListener('click', function () {
    volidate();
    SetLocalsroge();
    CreateRow();
    inputValueRemove()
})

window.onload = function () {
    let data = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
    if(data.length){
        data.forEach((user, index) => {
            CreateRow(user, index);
        });
    }
}