

// 2. Доработать форму регистрации из прошлых заданий, сделав для нее валидацию через JS.


let errors = [];
function checkInput(input) {
    let validity = input.validity;

    if(validity.valueMissing)
        {errors.push('Поле ' + input.placeholder + ' не заполнено');}
    if (validity.patternMismatch) 
		{ errors.push('Неверный формат заполнения'); }
    if(validity.tooLong)
        {errors.push('Придумайте пароль покороче');}
    if(validity.tooShort)
        {errors.push('Придумайте пароль подлиннее');}
    if (password.value != checkPassword.value) 
        {errors.push('Ваши пароли не совпадают');}
    }
function check() {
    errors = [];
    let inputs = document.querySelectorAll("input");

    for (let input of inputs) {
        checkInput(input)
    }
    document.querySelector('#welcomeMsg').innerHTML = errors.join('. <br>');

}

//ЭТО СТАРЫЙ КОД
// const firstName = document.querySelector("#firstName");
// const lastName = document.querySelector("#lastName");
// const email = document.querySelector("#email");
// const password = document.querySelector("#password");
// const checkPassword = document.querySelector("#checkPassword");

// function check()
// {
//     document.querySelector('#smthWrong_firstName').innerHTML = "";
//     document.querySelector('#smthWrong_lastName').innerHTML = "";
//     document.querySelector('#smthWrong_email').innerHTML = "";
//     document.querySelector('#smthWrong_password').innerHTML = "";
//     document.querySelector('#smthWrong_checkPassword').innerHTML = "";
//     document.querySelector("#welcomeMsg").innerHTML = "";
// if (firstName.value == '')
// {document.querySelector('#smthWrong_firstName').innerHTML+= "Это обязательное поле";
// }

// if (lastName.value == '')
// {document.querySelector('#smthWrong_lastName').innerHTML+= "Это обязательное поле";
// }

// if (email.value == '')
// {document.querySelector('#smthWrong_email').innerHTML+= "Это обязательное поле";
// }

// if (password.value == '')
// {document.querySelector('#smthWrong_password').innerHTML+= "Это обязательное поле";
// }

// if (checkPassword.value == '')
// {document.querySelector('#smthWrong_checkPassword').innerHTML+= "Это обязательное поле";
// }

// if (password.value != checkPassword.value)
// {document.querySelector('#smthWrong_checkPassword').innerHTML+= "Ваши пароли не совпадают";
// }

// else 
// {
//     document.querySelector("#welcomeMsg").innerHTML+= "Добро пожаловать в систему, " + firstName.value + "!!!";
//     firstName.value = '';
//     lastName.value = '';
//     email.value = '';
//     password.value = '';
//     checkPassword.value = '';
// }}




// 3. Доработать сохранение комментариев из прошлого домашнего задания 
//через веб-хранилище, дать возможность пользователю сохранять свое имя и 
//аватарку при вводе и запоминать их.
//     ⚠️ *Аватарку задаем в виде ссылки на картинку в интернете. Работу с 
//файлами тут использовать не нужно.*

const message = document.querySelector('#messageInput');
const sendBtn = document.querySelector('#sendComment');
const messageOut = document.querySelector('#messageContainer');
const avatarContainer = document.querySelector('#avatarContainer');



document.addEventListener("DOMContentLoaded", function (event) {
let user = localStorage.getItem('userName');
        if(user != null) {
        document.querySelector("#inputName").value = user;
    }

let ava = localStorage.getItem('userAva');
if(ava != null) {
    document.querySelector("#inputAva").value = ava;
}
});

function sendMessage(userName, comment) {

    let avaSrc = localStorage.getItem('userAva');
    let image = new Image();
    image.src = avaSrc;
    avatarContainer.append(image);
    messageOut.innerHTML += `<span class="user">${userName}: </span><span>${comment}</span> </br>`;
}


function getInfo() {
    let userAvatar = document.querySelector("#inputAva").value;
    let userName = document.querySelector("#inputName").value;
    let comment = message.value;

    localStorage.setItem('userName', userName);
    localStorage.setItem('userAva', userAvatar);

sendMessage(userName, comment);
}

sendBtn.onclick = function () {


    const messageIn = message.value;
    
    if (messageIn.includes('viagra')){
            const messageCorrected = messageIn.replace(/viagra/ig, '***');
            messageOut.innerHTML = messageCorrected;
        }
        else if (messageIn.includes('xxx')){
            const messageCorrected1 = messageIn.replace(/xxx/ig, '***');
            messageOut.innerHTML = messageCorrected1;
        }
        else {
            getInfo()
        }
        }




// 4. Сделать локальное хранилище заметок для себя любимой. 
//Не забыть валидацию при добавлении заметки.
//Значение инпута в массив, массив - в хранилище

document.addEventListener("DOMContentLoaded", function (event) {
    let note = localStorage.getItem('note');
    if(note != null) {
        myNotesArea.innerHTML = note;
    }
});

const btnSendNote = document.querySelector('#sendNote');
const noteArea = document.querySelector("#noteArea");
let myNotesArea = document.querySelector("#myNotes");

btnSendNote.onclick = function() {
    localStorage.setItem('note', noteArea.value);
    myNotesArea.innerHTML = localStorage.getItem('note');
    }
