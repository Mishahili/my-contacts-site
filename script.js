/* =================================
   НАСТРОЙКИ КОНТАКТОВ
   МЕНЯЙТЕ ТОЛЬКО ЭТОТ БЛОК
================================= */


const CONTACTS = {


    phone: "+7 (996) 535-72-31",


    telegram:
    "https://t.me/mishahili",


    whatsapp:
    "https://wa.me/qr/QWARXQTYSIKCJ1",


    facebook:
    "временно отсутствует",


    instagram:
    "https://www.instagram.com/mapper_from_serbiayt?igsh=MXQxNTg2Zjk0aXlnMg=="


};



/* =================================
   ЗАГРУЗКА КОНТАКТОВ
================================= */


document.addEventListener(
"DOMContentLoaded",
()=>{


document
.getElementById("telegram")
.href =
CONTACTS.telegram;



document
.getElementById("whatsapp")
.href =
CONTACTS.whatsapp;



document
.getElementById("facebook")
.href =
CONTACTS.facebook;



document
.getElementById("instagram")
.href =
CONTACTS.instagram;



document
.getElementById("year")
.textContent =
new Date()
.getFullYear();



});



/* =================================
   ТЕЛЕФОН
================================= */


function openPhone(){


window.open(

"tel:" + CONTACTS.phone,

"_self"

);


}



/* =================================
   КОПИРОВАНИЕ НОМЕРА
================================= */


function copyPhone(){


navigator
.clipboard
.writeText(
CONTACTS.phone
)


.then(()=>{


showToast(
"Номер скопирован"
);


})


.catch(()=>{


showToast(
"Ошибка копирования"
);


});


}



/* =================================
   УВЕДОМЛЕНИЕ
================================= */


function showToast(text){


const toast =
document
.getElementById("toast");



toast.textContent =
text;



toast.classList.add(
"show"
);



setTimeout(()=>{


toast.classList.remove(
"show"
);


},2500);



}



/* =================================
   ЗАЩИТА
================================= */


document
.addEventListener(
"contextmenu",
function(e){


/*
Можно убрать,
если хотите разрешить
правую кнопку мыши
*/


});



/* Запрет открытия сайта
во фреймах */

if(window.top !== window.self){


window.top.location =
window.self.location;


}



/* =================================
   PWA SERVICE WORKER
================================= */


if(
"serviceWorker" in navigator
){


window.addEventListener(
"load",
()=>{


navigator.serviceWorker
.register(
"sw.js"
)
.catch(
()=>{}
);


});


}
