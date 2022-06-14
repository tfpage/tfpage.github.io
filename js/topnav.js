function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

const modal2 = document.querySelector('#my2-modal2');
const modalBtn2 = document.querySelector('#modal2-btn2');
const closeBtn2 = document.querySelector('.close2');

modalBtn2.addEventListener('click', openModal2);
closeBtn2.addEventListener('click', closeModal2);
window2.addEventListener('click', outsideClick2);

function openModal2() {
  modal2.style.display = 'block';
}

function closeModal2() {
  modal2.style.display = 'none';
}

function outsideClick2(e) {
  if (e.target == modal2) {
    modal2.style.display = 'none';
  }
}