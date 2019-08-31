
  const actionlist = [
    'explode',
    'burn',
    'crumble',
    'crack',
    'dissolve',
    'trail',
    'melt',
    'crowd',
    'flying',
    'freeze',
    'splash',
    'slice',
    'tear',
    'create',
    'expel',
    'fill',
    'rag-doll',
    'fall',
    'corrosion',
    'infection',
    'implode',
    'throw'
  ]
  const objectlist = [
    'ball',
    'rock',
    'sword',
    'box',
    'cloth',
    'weapon',
    'girl',
    'dragon',
    'person',
    'spider',
    'dog',
    'rubber duck',
    'building',
    'city',
    'street',
    'table',
    'chair',
    'apple',
    'spaceship',
    'ninja',
    'unicorn',
    'robot',
    'dolphin',
    'ship',
    'asteroid',
    'castle',
    'cat',
    'rocket',
    'mountain',
    'truck',
    'plane',
    'bugs',
    'mecha',
    'onions',
    'snake',
    'pickles',
    'cake',
    'bottle'
  ]
  const fxlist = [
    'fire',
    'lava',
    'ice',
    'water',
    'liquid',
    'blood',
    'smoke',
    'sparks',
    'debris',
    'slime',
    'rubber',
    'wind',
    'energy',
    'lightning',
    'laser',
    'plasma',
    'fur',
    'worms',
    'feather',
    'grains',
    'particles',
    'bubbles',
    'crystals',
    'portal',
    'acid',
    'honey',
    'pop-corn',
    'glitter',
    'rainbow',
    'shards',
    'sand',
  ]
  
function rollDice() {

  // using date as random seed
  let d = new Date();

  let max = 20;
  slotA = (Math.floor(Math.random() * 500) + d.getSeconds()) % actionlist.length;
  slotB = (Math.floor(Math.random() * 500) + d.getMilliseconds()) % objectlist.length;
  slotC = (Math.floor(Math.random() * 500) + d.getHours()) % fxlist.length;


  // console.log(slotA, actionlist[slotA]);
  // console.log(slotB, objectlist[slotB]);
  // console.log(slotC, fxlist[slotC]);
  return([actionlist[slotA], objectlist[slotB], fxlist[slotC]]);
}

$(".roll").click(function(){
  result = rollDice();
  slotA = $(".slotA")
  slotB = $(".slotB")
  slotC = $(".slotC")
  slotA.html(result[0]);
  slotB.html(result[1]);
  slotC.html(result[2]);
  
  setTimeout(randomWord, 30, actionlist, slotA, 1700);
  setTimeout(randomWord, 30, objectlist, slotB, 2300);
  setTimeout(randomWord, 30, fxlist, slotC, 3000);

});


function randomWord(list, slot, time) {
  const d = new Date();
  let i = (Math.floor(Math.random() * list.length) + d.getMilliseconds()) % objectlist.length % list.length;
  slot.html(list[i]);
  time -= 30;
  if(time>0) {
    setTimeout(randomWord, 30, list, slot, time); 
  }
}