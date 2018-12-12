var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.beginPath();      // Début du chemin
ctx.moveTo(120,200);
ctx.lineTo(280,200);
ctx.lineTo(200,380);
ctx.lineTo(120,200);
ctx.closePath();      // Fermeture du chemin (facultative)
ctx.fillStyle="#aa6522"; // Définition de la couleur de remplissage
ctx.fill();

ctx.beginPath();
ctx.moveTo(120,200);
/* La courbe quadratique nécessite un point de contrôle en moins.
 Elle tracera une courbe à partir du point courant (défini par les précédents tracés, moveTo, lineTo, arc, etc...)
 jusqu'au point de destination (destx, desty) en étirant vers le point de contrôle (cpx, cpy).
quadraticCurveTo( cp1x, cp1y, destx, desty )*/
ctx.quadraticCurveTo(200,10,280,200);
ctx.fillStyle="#8a0908"
ctx.fill();
