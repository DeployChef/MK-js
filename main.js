const $arenas = document.querySelector('.arenas');

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Harpoon'],
    attack: function() {
        console.log(this.name + ' Fight!');
    }
};

const player2 = {
    player: 2,
    name: 'SubZero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Katana'],
    attack: function() {
        console.log(this.name + ' Fight!');
    }
};


function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }

    return $tag;
}

function createPlayer(playerName, playerObj) {
    const $player = createElement('div', playerName);

    const $progressbar = createElement('div', 'progressbar');
    $player.appendChild($progressbar);

    const $chatacter = createElement('div', 'character');
    $player.appendChild($chatacter);

    const $life = createElement('div', 'life');
    $progressbar.appendChild($life);

    const $name = createElement('div', 'name');
    $progressbar.appendChild($name);

    const $img = createElement('img');
    $chatacter.appendChild($img);

    $life.style.width = playerObj.hp + '%';
    $life.innerText = playerObj.hp;
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;

    return $player;
}

$arenas.appendChild(createPlayer('player1', player1));
$arenas.appendChild(createPlayer('player2', player2));