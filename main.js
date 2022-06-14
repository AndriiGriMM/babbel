const btn = {

  prev: document.querySelector('.select-prev'),
  next: document.querySelector('.select-next'),

};

const list = document.querySelector(".list-items");
const items = list.querySelectorAll("li");
let index = 0;
const button = document.querySelector('.select-next');

btn.next.addEventListener('click', function () {
  index = index+1 
  updateSelection();
  checkBtn()

});

btn.prev.addEventListener('click', function () {
  index = index - 1
  updateSelection();
  checkBtn()

});

function checkBtn() {
  const maxLenghs = items.length - 1
  index === 0 ? btn.prev.disabled = true 
  : btn.prev.disabled = false
  index === maxLenghs ? btn.next.disabled = true 
  : btn.next.disabled = false

}

function updateSelection() {

  const active = list.querySelector('.active');

  if (active) active.classList.remove('active');

  items[index].classList.add('active');

}

