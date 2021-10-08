import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

  // Changing title in 3seconds
  setTimeout(function(){ 
    document.querySelector('title').innerText = "One new message";
  }, 3000);

});
