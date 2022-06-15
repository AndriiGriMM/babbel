function Slider(params) {

  params.next.addEventListener('click', function (event) {
    params.index = params.index + 1

    console.log(params.maxLenghs)
    updateSelection();
    checkBtnNext()
    checkBtnPrev()
  });

  params.prev.addEventListener('click', function () {
    params.index = params.index - 1

    updateSelection();
    checkBtnPrev()
    checkBtnNext()
  });

  function checkBtnNext() {
    params.next.disabled = params.index === params.maxLenghs
    console.log(params.index)
  }

  function checkBtnPrev() {
    params.prev.disabled = params.index === 0
  }

  function updateSelection() {

    const active = params.list.querySelector('.active');

    if (active) active.classList.remove('active');

    params.items[params.index].classList.add('active');

  }

}
const slider = new Slider({
  prev: document.querySelector('.select-prev'),
  next: document.querySelector('.select-next'),
  list: document.querySelector('.list-items'),
  items: document.querySelectorAll("li"),
  index: 0,
  maxLenghs: document.querySelectorAll("li").length - 1

}
)

