function unacceptable(pwd) {

    var unforgivable = [
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
        /\s+pc/gi,
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

    let zamenitel = ["😂","🤬","🤫" ]
    for (i = 0; i < unforgivable.length; i++) {
        pwd = pwd.replace(unforgivable[i], zamenitel[index])
        index = getRandomInt(3)
    }
   


    return pwd;
}

console.log(unacceptable("պուց պցով клир ejպցoeo սիկտիր dvefve gyot"))