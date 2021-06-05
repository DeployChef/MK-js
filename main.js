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
    const hit = Math.floor(Math.random() * 20)
    player.hp -= hit;
    if (player.hp < 0)
        player.hp = 0;
    $playerLife.style.width = player.hp + "%";
}

function playerWin(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' win!';

    $randomButton.disabled = true;
    return $loseTitle;
}

$randomButton.addEventListener('click', function() {
    changeHp(player1);
    if (player1.hp == 0) {
        $arenas.appendChild(playerWin(player2.name));
        return;
    }

    changeHp(player2);
    if (player2.hp == 0) {
        $arenas.appendChild(playerWin(player1.name));
        return;
    }
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));