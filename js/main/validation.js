document.addEventListener("DOMContentLoaded", function(event) {

  function Validation(form) {
    this.form = form;
    this.inputs = this.form.querySelectorAll('input');
    this.textarea = this.form.querySelector('textarea');
  };

  Validation.prototype.validateInput = function (input) {

    if (input.name === 'email' && input.value.indexOf('@') === -1) {
      input.style.border="1px solid rgba(255, 0, 0, 0.3)";
      return false;
    }else{
      input.style.border="1px solid rgba(45, 134, 37, 0.6)"
    }

    if (input.name === 'name' && input.value.length < 5) {
      input.style.border="1px solid rgba(255, 0, 0, 0.3)";
      return false;
    }else{
      input.style.border="1px solid rgba(45, 134, 37, 0.6)"
    }

    return true;
  };

  Validation.prototype.bindSubmitEvent = function () {
    this.form.addEventListener('submit', this.handleSubmitEvent.bind(this));
  };

  Validation.prototype.handleSubmitEvent = function (e) {
    for (var i = 0; i < this.inputs.length; i++) {
      if (!this.validateInput(this.inputs[i])) {
        e.preventDefault();
        break;
      }
    }
  };

  Validation.prototype.init = function () {
    this.bindSubmitEvent();
  };

  var validator = new Validation(document.querySelector('form'));
  validator.init();

});
