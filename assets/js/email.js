// /* If the user doesn't fill out the form, they will get a sweet alert message telling them to try again */
function inputEmpty() {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Field was left blank!',
  })
}

function error() {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'There seems to be an error with EmailJS.',
    footer: 'If this keeps happening please send me an email the traditional way. Apologies for the inconvenience!'
  })
}

function success() {
  Swal.fire("Success!", "Your message has been sent!", "success");
}

const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Sending...';

    this.to_name = "anthonyq032@gmail.com";

    const serviceID = 'default_service';
    const templateID = 'template_c8segls';

    if (!this.from_name.value || !this.message.value || !this.reply_to.value) {
      inputEmpty();
      return;
    }

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        success();
        return;
      }, (err) => {
        btn.value = 'Send Email';
        console.log(err)
        error();
      });
  });