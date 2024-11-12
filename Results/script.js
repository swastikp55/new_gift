// Open message page
function openMessage() {
  setTimeout(() => {
    console.log("Gift Opened!!!!!");
    window.location.href = "./message.html";
  }, 1000);
}


//Party poppers on message page
document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector("#message-page-body")) {
      createPoppers();
    }
  });
  
function createPoppers() {
    const poppersContainer = document.querySelector(".poppers");
    const colors = ["#ff0054", "#ffdd00", "#00ff90", "#0099ff"];
    const shapes = ["circle", "square", "diamond", "star"];
    
    for (let i = 0; i < 100; i++) {
      const popper = document.createElement("div");
      popper.classList.add("popper");
      popper.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      popper.style.left = `${Math.random() * 100}vw`;
      popper.style.animationDelay = `${Math.random() * 3}s`; // randomize fall timing
      
      // Shape variations
      let shape = shapes[Math.floor(Math.random() * shapes.length)];
      popper.style.clipPath = shape === "circle" ? "circle(50%)" :
                              shape === "square" ? "none" :
                              shape === "diamond" ? "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" :
                              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
      
      poppersContainer.appendChild(popper);
    }
}
