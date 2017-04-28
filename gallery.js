var chico = [

  {description: "The Bear",
   picture: "http://www.madisonbeargarden.com/wp-content/uploads/2012/12/Bear-Front-Slideshow.jpg",
   from: "madisonbeargarden.com"

  },

  {description: "The Flumes",
   picture: "https://1.bp.blogspot.com/-FB8ugXNX_0g/UVOPPfAIr6I/AAAAAAAAOoM/JcTTX5ApS_g/s320/flum_076.jpg",
   from: "1.bp.blogspot.com"

  },

  {description: "Upper Bidwell Park",
   picture: "http://www.becnet.org/sites/default/files/event-photos/557977_10151427591623089_799073585_n.jpg",
   from: "becnet.org"

  },

  {description: "The Senator",
   picture: "https://photos.smugmug.com/Theater/1920s/i-Vp5nN5t/3/S/2010-02-10%20Senator%20Theater%2001%20HDR%20v2-S.jpg",
   from: "photos.smugmug.com"

  }

  {description: "Rileys",
   picture: "http://extras.mnginteractive.com/live/media/site135/2013/1101/20131101__01_news_01~1_GALLERY.jpg",
   from: "extras.mnginteractive.com"

  },

 ];
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
  document.getElementById("source").innerHTML="Image courtesy of: "+ current.form;
  document.getElementById("caption").innerHTML=current.description;
  document.getElementById("picture").src=current.picture;
}
