var link = function(nom, posX, posY)
{
  this.height = 1.5;
  this.name = nom;
  this.posX = posX;
  this.cross = new Array();
  this.posY = posY;
  this.div;
  this.afficherName = function()
  {
    console.log(this.name);
  }
  
  this.afficherPersonnage = function()
  {
    this.div = document.createElement("div");
    this.div.setAttribute("class", "zelda");
    this.div.setAttribute("data-name", this.name);
    this.div.style.top = this.posY +"px";
    this.div.style.left= this.posX +"px";
    document.querySelector("body").appendChild(this.div);
  }
  
  this.bougerPersonnage = function()
  {
    var that = this;
    
      window.addEventListener('keypress', function (e) {
    
      if(e.keyCode == that.cross[0] )
      {
         that.posY -= 10;
      }
      else if(e.keyCode == that.cross[1])
      {
          that.posX += 10;
      }
      else if(e.keyCode == that.cross[2])
      {
          that.posY += 10;
      }
      else if(e.keyCode == that.cross[3])
      {
          that.posX -= 10;
      }
      that.div.style.top = that.posY +"px";
      that.div.style.left= that.posX +"px";
       
    }, false);
  };
  
}


var personnage1 = new link("zelda1", 20, 40);
var personnage2 = new link("zelda2", 100, 60);
var personnage3 = new link("zelda3", 45, 200);

personnage1.afficherName();
personnage1.afficherPersonnage();
personnage1.cross=[122,100,115,113];
personnage1.bougerPersonnage();

personnage2.afficherPersonnage();
personnage2.cross=[111,109,108,107];
personnage2.bougerPersonnage();


personnage3.afficherPersonnage();


personnage3.afficherName();

window.addEventListener('keypress', function (e) {
    console.log(e.keyCode);      
}, false);





