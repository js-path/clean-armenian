module.exports = function  (Censor) {

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
        Censor = Censor.replace(ToBeCensored[i], Substitute[index])
        index = getRandomInt(3)
    }
   
return Censor
}

