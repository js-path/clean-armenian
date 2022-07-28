<<<<<<< HEAD:package/Project.js
const Censor = function (UserInput) {
=======
function Censor (UserInput) {
>>>>>>> 8acb69fdc1e11a9d3defb2ffb939801397cf4e60:Project.js

    var ToBeCensored = [
        /Բոզ/gi,
        /Գյոթ/gi,
        /Սիկտիր/gi,
        /Պուց/gi,
        /Կլիր/gi,
        /Քունե/gi,
        /կլր/gi,
        /կըլր/gi,
        /\s+պց/gi,
        /պըց/gi,
        /Քունվ/gi,
        /boz/gi,
        /gyot/gi,
        /siktir/gi,
        /puc/gi,
        /\s+pc\S/gi,
        /klir/gi,
        /qune/gi,
        /klr/gi,
        /kylr/gi,
        /pyc/gi,
        /qunv/gi,
        /боз/gi,
        /гйот/gi,
        /гёт/gi,
        /\s+пц/gi,
        /сиктир/gi,
        /сиктыр/gi,
        /пуц/gi,
        /клир/gi,
        /клр/gi,
        /кунв/gi


    ];
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    
    let index = 0;

    let Substitute = ["😂","🤬","🤫" ]
    for (i = 0; i < ToBeCensored.length; i++) {
        UserInput = UserInput.replace(ToBeCensored[i], Substitute[index])
        index = getRandomInt(3)
    }
   
return UserInput}

exports.Censor = Censor

