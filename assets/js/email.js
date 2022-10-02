// // IIFE
// (() => {
//   // https://dashboard.emailjs.com/admin/account
//   emailjs.init("KhoGgtZIZC_WbZDOZ");
// })();

// /* userForm is grabbing the forms input fields and making sure the value are not null, if they are null they will get an error message 
// to try again. if the fields arent null, the emailjs will send the form with serviceID, templateID, and the forms content,
// it will then confirm if the message was sent or if there was an error in the process.*/
// const btn = document.getElementById("contactSend");

// window.onload = () => {
//   document.getElementById("form")
//     .addEventListener("submit", function (event) {
//       event.preventDefault();

//       const from_name = document.getElementById("from_name").value;
//       console.log(from_name)
//       const to_name = document.getElementById("contactEmail").value;
//       console.log(to_name)
//       const message = document.getElementById("message").value;
//       console.log(message)

//       if (this.from_name.value === "" || this.to_name.value === "" || this.message.value === "") {
//         inputEmpty();
//         return;
//       }

//       btn.value = "Sending...";

//       const serviceID = "default_service";
//       const templateID = "template_aqb48l6";

//       emailjs.sendForm(serviceID, templateID, this)
//         .then(() => {
//           btn.value = "Send Email";
//           Swal.fire("Wooo!", "Your message has been sent :)", "success");
//         }, (err) => {
//           btn.value = "Send Email";
//           Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Something went wrong!',
//           });
//         });
//     });
// };

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