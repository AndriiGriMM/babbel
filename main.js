function Slider(params) {

  params.next.addEventListener('click', function (event) {
    params.index = params.index + 1
    updateSelection();
    params.prev.disabled = false
    this.disabled = params.index === params.maxLenghs
    
  });

  params.prev.addEventListener('click', function () {
    params.index = params.index - 1
    params.next.disabled = false;
    this.disabled = params.index === 0
    updateSelection();
  });

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
