// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let pyramid_base = 2 * n - 1; //if n=3 then base=5
    let pyramidStructure = '';
    for (let i = 1; i <= n; i++) { //level loop
        pyramidStructure='';
        let hashes = i * 2 - 1;
        for (let h = 0; h < hashes; h++) {
            pyramidStructure += "#";
        }
        let spaces=pyramid_base-hashes;
        let dir="left";
        for(let x=0;x<spaces;x++){
            if(dir==="left"){
                pyramidStructure += " ";
                dir="right";
            }
            else if(dir==="right"){
                pyramidStructure=  " "+pyramidStructure;
                dir="left";
            }
        }
        console.log(pyramidStructure);
    }

}
pyramid(3);
module.exports = pyramid;
