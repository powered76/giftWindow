const btnCheck = document.querySelector('#btnCheck')
const msg = document.querySelector("#msg")

function initModal(modalType, modalContent) {
  let modal = document.createElement("div")
  modal.setAttribute("id", "windowModal");
  modal.innerHTML = modalContent
  modal.classList.add('modal')
  document.getElementById('btnCheck').remove();
  msg.append(modal)
  countdown() ;// вызов функции
   }


btnCheck.onclick = (e) => initModal('btnCheck')

let timer; // пока пустая переменная
let x =10; // стартовое значение обратного отсчета

function countdown(){  // функция обратного отсчета
  document.getElementById('windowModal').innerHTML = x;
  x--; // уменьшаем число на единицу
  if (x<0){
    clearTimeout(timer); // таймер остановится на нуле
    location.href=location.href;
  
  }
  else {
    timer = setTimeout(countdown, 1000);
  }
}



