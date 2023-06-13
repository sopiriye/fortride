// button slides

  slideIndex = 1;
  contShow(slideIndex);

  function contPlus(z) {
  contShow(slideIndex += z);
}

  function contShow(z) {
  let i;
  x = document.getElementsByClassName("slides");
  if (z > x.length) {slideIndex = 1}
  if (z < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}