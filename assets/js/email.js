// IIFE
// (() => {
//   // https://dashboard.emailjs.com/admin/account
//   emailjs.init("rvosgLsXhHJmYfrb2");
// })();

/* userForm is grabbing the forms input fields and making sure the value are not null, if they are null they will get an error message 
to try again. if the fields arent null, the emailjs will send the form with serviceID, templateID, and the forms content,
it will then confirm if the message was sent or if there was an error in the process.*/
const btn = document.getElementById("contactSend");

window.onload = () => {
  document.getElementById("form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      if (this.from_name.value === "" || this.to_name.value === "" || this.message.value === "") {
        inputEmpty();
        return;
      }

      btn.value = "Sending...";

      const serviceID = "service_hah64qf";
      const templateID = "template_aqb48l6";

      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = "Send Email";
          Swal.fire("Wooo!", "Your message has been sent :)", "success");
        }, (err) => {
          btn.value = "Send Email";
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        });
    });
};

/* If the user doesn't fill out the form, they will get a sweet alert message telling them to try again */
function inputEmpty() {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Field was left blank!',
  })
}