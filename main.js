function formValidate(fields) {
  const reg = /\D/g;
  fields.number.addEventListener("input", function (e) {
    const value = this.value;
    this.value = this.value.replace(reg, "").substring(0, 16);
    if (this.value.length >= 16) {
      document.querySelector(".js--res_number").innerHTML = `
        ${value.substring(0, 4)} - ${value.substring(4, 8)}
         - ${value.substring(8, 12)} - ${value.substring(12, 16)}
    `;
    }
    checkAllField();
  });

  fields.name.addEventListener("input", function (e) {
    this.value = this.value.replace(/[^A-Za-zА-Яа-яЁё\s]/g, "").substring(0, 13);
    document.querySelector(".js--res_name").innerHTML = this.value;
    checkAllField();
  });

  fields.month.addEventListener("input", function () {
    if (this.value !== "null") {
      document.querySelector(".js--res_month").innerHTML = this.value;
      checkAllField();
    }
  });

  fields.year.addEventListener("input", function () {
    if (this.value !== "null") {
      document.querySelector(".js--res_year").innerHTML = this.value;
      checkAllField();
    }
  });
  const validElement = document.querySelector(".js--cvv");
  validElement.addEventListener("input", function () {
    this.value = +this.value.substring(0, 3).replace(reg, "");
    checkAllField();
  });

  function checkAllField() {
    let valid = [];
    const validElement = document.querySelector(".js--submit");
    for (let key in fields) {
      fields.number.value.length >= 16 &&
      fields.cvv.value.length >= 3 &&
      fields.name.value.length >= 3
        ? valid.push(true)
        : valid.push(false);
      fields[key].value.length !== 0 ? valid.push(true) : valid.push(false);
    }

    valid.some((validElement) => validElement === false)
      ? (validElement.disabled = true)
      : (validElement.disabled = false);
  }
  const form = document.querySelector(".form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log({
      number: fields.number.value,
      month: fields.month.value,
      year: fields.year.value,
      cvv: validElement.value,
    });
  });
}

formValidate({
  number: document.querySelector(".js--number"),
  name: document.querySelector(".js--name"),
  month: document.querySelector(".js--month"),
  year: document.querySelector(".js--year"),
  cvv: document.querySelector(".js--cvv"),
});
