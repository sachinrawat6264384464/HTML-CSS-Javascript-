const btn = document.querySelector(".btn");
const errorMessage = document.getElementById("bbb");
const password = document.querySelector(".password").value;
btn.addEventListener("click", function () {
    
    
    if (password === "") {
        errorMessage.innerHTML = "⚠ Password is required!";
    } else {
         // Clear error if password is entered
        alert("Form Submitted!"); // Just for testing
    }
});