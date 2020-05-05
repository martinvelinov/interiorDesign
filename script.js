var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var lines = document.getElementsByClassName("line");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < lines.length; i++) {
      lines[i].className = lines[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  lines[slideIndex-1].className += " active";
} 

//=============POPULAR ITEMS==============//

productScroll();

function productScroll() {
  let slider = document.getElementById("slider");
  let next = document.getElementsByClassName("next1");
  let prev = document.getElementsByClassName("prev1");
  let slide = document.getElementById("slide");
  let item = document.getElementById("slide");

  for (let i = 0; i < next.length; i++) {
    

    let position = 0; 

    prev[i].addEventListener("click", function() {
      
      if (position > 0) {
        position -= 1;
        translateX(position); 
      }
    });

    next[i].addEventListener("click", function() {
      if (position >= 0 && position < hiddenItems()) {
        position += 1;
        translateX(position); 
      }
    });
  }

  function hiddenItems() {
    let items = getCount(item, false);
    let visibleItems = slider.offsetWidth / 300;
    return items - Math.ceil(visibleItems);
  }
}

function translateX(position) {
  slide.style.left = position * -300 + "px";
}

function getCount(parent, getChildrensChildren) {
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}

