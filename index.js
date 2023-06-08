document.addEventListener("DOMContentLoaded", function() {
    var resetBtn = document.getElementById("resetBtn");
    var container1 = document.querySelector(".container:nth-of-type(1)");
    var container2 = document.querySelector(".container:nth-of-type(2)");
  
    resetBtn.addEventListener("click", function() {
    
      container2.innerHTML = "<h2>Container 2</h2>";
      var items = document.querySelectorAll(".item");
      items.forEach(function(item) {
      });
    });

    // Function for drag the content
    container1.addEventListener("dragstart", function(event) {
        var itemType = event.target.tagName
        if (itemType === "img") {
          event.dataTransfer.setData("text/plain", event.target.src); 
        } else {
          event.dataTransfer.setData("text/plain", event.target.innerHTML);
        }
      });
    
  
    container2.addEventListener("dragover", function(event) {
      event.preventDefault();
      event.target.classList.add("drag-over");
    });
  
    container2.addEventListener("dragleave", function(event) {
      event.target.classList.remove("drag-over");
    });
  
    container2.addEventListener("drop", function(event) {
      event.preventDefault();
      event.target.classList.remove("drag-over");
      var data = event.dataTransfer.getData("text/plain");
      if (data.includes(".jpg") || data.includes(".png")) {
        var newImage = document.createElement("img");
        newImage.classList.add("item");
        newImage.src = data;
        newImage.style.height= '150px';
        event.target.appendChild(newImage);
      } else {
        var newText = document.createElement("p");
        newText.classList.add("item");
        newText.innerHTML = data;
        event.target.appendChild(newText);
      }
      alert("Item dropped successfully!");

    });
  });