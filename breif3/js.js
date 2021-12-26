// document.querySelectorAll("input").forEach(input => console.log(input.value))
// function myFunction() {
//     alert("input");
//   }
document.querySelector("#send").addEventListener("click", function() {
document.querySelectorAll("input").forEach(input => alert(`Value of ${input.name}: ${input.value}`));
});
//$ means value of the variable
    