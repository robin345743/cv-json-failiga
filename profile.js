const fnameSpan = document.querySelector('#fname');
const lnameSpan = document.querySelector('#lname');
const ageSpan = document.querySelector('#age');
const mailSpan = document.querySelector('#mail');

window.onload = () => {


    fetch('profile.json')
    .then(response => response.json())
    .then (data => {

    fnameSpan.textContent = data.fname;
    lnameSpan.textContent = data.lname;
    ageSpan.textContent = data.age;
    mailSpan.textContent = data.mail;

   // for(let i = 0; i < data.skills.length; i++) {

   //     let li = document.createElement('li');
   //     li.innerHTML = data.skills[i];

   //     skillslist.appendChild(li);
   // }

    })
    }
