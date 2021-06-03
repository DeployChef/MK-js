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
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Katana'],
    attack: function() {
        console.log(this.name + ' Fight!');
    }
};


player1.attack();
player2.attack();