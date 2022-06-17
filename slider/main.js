function Slider(params) {
  let timerId = undefined
  params.next.addEventListener('click', function () {
    next()
  });

  params.prev.addEventListener('click', function () {
    prev()
  });

  function updateSelection() {
    const active = params.list.querySelector('.active');
    if (active) active.classList.remove('active');
    params.items[params.index].classList.add('active');
  };

  function next() {
    params.index = params.index + 1;
    params.prev.disabled = false
    params.index === params.maxLenghs
      ? params.next.disabled = true
      : params.next.disabled = false
    clearTimeout(timerId)
    updateSelection();
    if (params.index !== params.maxLenghs) {
      timer(next)
    }
  };

  function prev() {
    params.index = params.index - 1;
    params.next.disabled = false;
    params.index === 0
      ? params.prev.disabled = true
      : params.prev.disabled = false
    clearTimeout(timerId)
    updateSelection();
    if (params.index !== 0) {
      timer(prev)
    }

  }
  function timer(arg) {
    timerId = setTimeout(arg, 5000)
  }

}
new Slider({
  prev: document.querySelector('.select-prev'),
  next: document.querySelector('.select-next'),
  list: document.querySelector('.list-items'),
  items: document.querySelectorAll("li"),
  index: 0,
  maxLenghs: document.querySelectorAll("li").length - 1
})
