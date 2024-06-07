var diceValues = {
    d2: { sides: 2, image: "https://www.example.com/d2.png" },
    d4: { sides: 4, image: "https://www.example.com/d4.png" },
    d6: { sides: 6, image: "https://www.example.com/d6.png" },
    d8: { sides: 8, image: "https://www.example.com/d8.png" },
    d10: { sides: 10, image: "https://www.example.com/d10.png" },
    d12: { sides: 12, image: "https://www.example.com/d12.png" },
    d20: { sides: 20, image: "https://www.example.com/d20.png" },
    d30: { sides: 30, image: "https://www.example.com/d30.png" },
    d100: { sides: 100, image: "https://www.example.com/d100.png" }
};

var diceElement = document.getElementById('dice');
var diceImgElement = document.getElementById('diceImg');

diceElement.addEventListener('click', rollDice);

function rollDice() {
    var diceTypes = Object.keys(diceValues);
    var randomType = diceTypes[Math.floor(Math.random() * diceTypes.length)];
    var sides = diceValues[randomType].sides;
    var result = Math.floor(Math.random() * sides) + 1;
    diceElement.innerText = 'D' + sides + ': ' + result;
    diceImgElement.src = diceValues[randomType].image;

    // Animação de rolagem
    diceElement.style.animation = 'roll 1.5s cubic-bezier(0.23, 1, 0.32, 1)';
    diceImgElement.style.display = 'block';

    setTimeout(function() {
        diceElement.style.animation = '';
        diceImgElement.style.display = 'none';
    }, 1500);
}