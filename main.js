const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

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

function createPlayer(playerObj) {
    const $player = createElement('div', 'player' + playerObj.player);

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

function changeHp(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= 20;
    $playerLife.style.width = player.hp + "%";

    if (player.hp < 0) {
        $arenas.appendChild(playerLose(player.name));
    }
}

function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' lose';
    return $loseTitle;
}

$randomButton.addEventListener('click', function() {
    changeHp(player1);
    changeHp(player2);
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));