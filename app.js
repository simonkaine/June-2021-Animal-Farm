// import functions

// reference needed DOM elements


// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)

// 


const cat = document.getElementById('cat');
const catSound = document.getElementById('cat-sound');
cat.addEventListener('click', ()=> {
    catSound.play();
});

const dog = document.getElementById('dog');
const dogSound = document.getElementById('dog-sound');
dog.addEventListener('click', ()=> {
    dogSound.play();
});

const horse = document.getElementById('horse');
const horseSound = document.getElementById('horse-sound');
horse.addEventListener('click', ()=> {
    horseSound.play();
});

const catKey = document.getElementById('cat-key');
catKey.addEventListener('keydown', (event)=> {

  if (event.key === "c" || event.key === "C")
    catSound.play();

});

const dogKey = document.getElementById('dog-key');
dogKey.addEventListener('keydown', (event)=> {

  if (event.key === "d" || event.key === "D")
    dogSound.play();

});

const horseKey = document.getElementById('horse-key');
horseKey.addEventListener('keydown', (event)=> {

  if (event.key === "h" || event.key === "H")
    horseSound.play();

});