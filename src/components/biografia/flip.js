export function flip(){var elem = document.getElementsByClassName("overlay");
var pos = 0;
if(window.innerWidth < 700){
var id = setInterval(frame, 1500);
}
function frame() {
  if(pos % 3 == 0 ) {   elem[0].style.opacity = 1; } else { elem[0].style.opacity = 0; }
  if(pos % 3 == 1 ) {   elem[1].style.opacity = 1; } else { elem[1].style.opacity = 0; }
  if(pos % 3 == 2 ) {   elem[2].style.opacity = 1; } else { elem[2].style.opacity = 0; }
  pos++;
}
}