const player1 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Harpoon'],
    attack: function() {
        console.log(this.name + ' Fight!');
    }
};

const player2 = {
    name: 'SubZero',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Katana'],
    attack: function() {
        console.log(this.name + ' Fight!');
    }
};


player1.attack();
player2.attack();

function createPlayer(playerName, playerObj) {
    const $player = document.createElement('div');
    $player.classList.add(playerName);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    $player.appendChild($progressbar);

    const $chatacter = document.createElement('div');
    $chatacter.classList.add('character');
    $player.appendChild($chatacter);

    const $life = document.createElement('div');
    $life.classList.add('life');
    $progressbar.appendChild($life);

    const $name = document.createElement('div');
    $name.classList.add('name');
    $progressbar.appendChild($name);

    const $img = document.createElement('img');
    $img.classList.add('img');
    $chatacter.appendChild($img);

    $life.style.width = playerObj.hp + '%';
    $life.innerText = playerObj.hp;
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;

    const $arenas = document.querySelector('.arenas');

    $arenas.appendChild($player);
}

createPlayer('player1', player1);
createPlayer('player2', player2);