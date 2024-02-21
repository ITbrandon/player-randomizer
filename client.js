class randomizer {
  constructor(originalList, btn ,playerList) {
    this.originalList = originalList;
    this.btn = btn;
    this.playerList = playerList;
    this.players = [{name: "Patrick"}, {name: "Joe"}, {name: "Josh"}, {name: "Lamar"}];
    this.order = [];
    this.turnOrder = [];
    this.init();
    this.original();
  }

  init = () => {
    this.btn.addEventListener('click', (this.randomize))
  }

  original = () => {
    this.players.forEach(player => {
      this.originalList.innerHTML += this.createPlayerCard(player);
    })
  }

  createPlayerCard = (player) => {
    return `<li>Name: ${player.name} </li>`
  }

  randomize = () => {
  this.playerList.innerHTML = '';
  this.order = [];
  this.turnOrder = [];
  while(this.order.length < 4)
  {
  const randomNumber = Math.floor(Math.random() * 4);
  if(!this.order.includes(randomNumber))
  {
    this.order.push(randomNumber)
    this.turnOrder.push(this.players[randomNumber])
  }
 }
 this.randomOrder();
}

  randomOrder = () => {
    this.turnOrder.forEach(player => {
      this.playerList.innerHTML += this.createPlayerCard(player)
    })
  }
}

const action = new randomizer(document.querySelector('#original-players'), document.querySelector('#btn'), document.querySelector('#player-list'));
