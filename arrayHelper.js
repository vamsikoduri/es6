
/***** For each *******/
console.log("Hello world learning ES6!!!");

let colors = ['Red', 'Green', 'Orange'];

//colors.forEach((color) => console.log(color));

var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
];
var areas = [];

images.forEach((image) => {
    let area = image.height * image.width;
    areas.push(area);
})

//console.log(areas);

/***** reducer *******/

// example for checking for valid parenthesis.




function checkPatter(input) {
    return !input.split("").reduce(function (count, char) {

        if (count < 0) return count;
        if (char == '(') ++count;
        if (char == ')') --count;
        return count;

    }, 0);
}


function check(input) {
    
    return !input.split("").reduce((count, char) => {
        if (count < 0) return count;
        if (char == '(') ++count;
        else if (char == ')') --count;
        return count;
    }, 0);
}
let input = "((()))";
//console.log(check(input));


let game = {
    
players : ['vamsi','krishna'],
teamName : 'yzagWarriros',
display : function (){
    return this.players.map(function(player) {
        console.log(this);
        return `${player} is on team ${this.teamName}`
    })
}

};

console.log(game.display());

// => uses lexical this