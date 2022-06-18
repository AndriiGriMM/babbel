function FormValidate(form) {
    const _elements = form.elements;
    const _parentItemClass = 'form-control';
    const _errorWrapperClass = 'error';
    const _errorItemClass = 'error__item';

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        this.checkFormElement();
    });
    this.checkFormElement = function () {
        for (let i = 0; i < _elements.length; i++) {
            const element = _elements[i];
            const reqMessage = element.dataset.req;
            this.cleanError (element)
            if (reqMessage) {
                this.required(element, reqMessage);
            }
        }
    }
    this.required = function (element, message) {
        const notValidString = element.value.length === 0;
        const notValidCheckBox = element.type === 'checkbox' && element.checked === false;
        if (notValidString || notValidCheckBox) {
            this.errorTemplate(element, message);
        }
    }

    this.errorTemplate = function (element, message) {
        const parent = element.closest(`.${_parentItemClass}`);
        if (parent.classList.contains(_errorWrapperClass) === false) {
            parent.classList.add(_errorWrapperClass);
            parent.insertAdjacentHTML('beforeend', `<small class="${_errorItemClass}">${message}</small>`)
        }
    }


    this.cleanError = function (element) {
        const parent = element.closest(`.${_parentItemClass}`);
        if (parent !== null && parent.classList.contains(_errorWrapperClass) === true) {
           element.parentNode.classList.remove(_errorWrapperClass);
           element.parentNode.querySelector(`.${_errorItemClass}`).remove()
        }
    }
}

new FormValidate(document.querySelector('#form'));