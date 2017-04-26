var chico = ["The Bear", "The Flumes", "Upper Bidwell Park", "The Senator", "Rileys"];
var current = 0,

function shuffleGallery()
{
  do {
    var index = Math.floor(Math.random() * (chico.length));
    current = chico[index];
    if (current != index) {
      console.log(current);
    }
  }
  while(current != chico[index]);
}
