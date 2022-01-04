// document.querySelector(".form").addEventListener("submit", function () {
//   document
//     .querySelectorAll("input")
//     .forEach((input) => alert(`${input.name}: ${input.value}`));
// });

document.querySelector(".form").addEventListener("submit", function modal() {
  var name = document.querySelector("#fname").value;
  var lname = document.querySelector("#lname").value;
  var email = document.querySelector("#email").value;
  var phone = document.querySelector("#phone").value;
  var message = document.querySelector("#message").value;

  alert("Frst Name : " + name+ "\nLast Name: "+lname+ "\nEmail address : " + email + "\nPhone Number : " + phone+"\nMessage: "+message);
});

