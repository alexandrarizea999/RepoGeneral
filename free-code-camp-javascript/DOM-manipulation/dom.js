const playground = document.getElementById('playground');
// playground.appendChild(' 🧙🏼‍♂️ Wizard', ' ', 
//     ' 🔮 Crystal Ball', ' ',
//     ' 📜 Spell Book');

// query selector
// const playground = document.querySelectorAll('div');
// playground.append(' Wizard');

// i can only append nodes not strings

//----------------GETTING AND ADDING ELEMENTS-----------------------
// create an element
// create a div
// const magicalOrb = document.createElement('div');
// text content of the div
// magicalOrb.textContent = '🔮';
// append the magicalOrb to the div
// i can use appendChild because i have an object
// playground.appendChild(magicalOrb);

// const scrollOfWisdom = document.createElement('p');
// playground.append(scrollOfWisdom);

// scrollOfWisdom.innerText = 'Ancient wisdom lies within';
// console.log(scrollOfWisdom.innerText);

//---------------MODIFYING TEXT CONTENT---------------------------
// scrollOfWisdom.textContent = 'Ancient';
// console.log(scrollOfWisdom.textContent);

// this shows any content
// console.log(playground.innerText);
// text content show even the hidden text
// console.log(playground.textContent);

//---------------WORKING WITH HTML ELEMENTS-----------------------
// playground.innerHTML = '<p>Spells include: <strong>Levitation</strong> and <em>Invisivibility</em>!</p>';

// console.log(playground.textContent);
// console.log(playground.innerHTML);

// const userInput = '<img src="x" onerror="alert(\'Hacked!\')">';
// playground.innerHTML = userInput; 

//---------------REMOVING ELEMENTS-------------------------------
// const temporaryElement = document.createElement('p');
// temporaryElement.textContent = 'Now you see me...';
// playground.append(temporaryElement);

// temporaryElement.remove();

// const fruitBasket = document.createElement('div');
// fruitBasket.innerHTML = `<p>Apple</p>
//                         <p>Banana</p>
//                         <p>Cherry</p>`;
// playground.append(fruitBasket);
// // it still exists in memory if i have a js reference to it
// while(fruitBasket.firstChild){
//     fruitBasket.removeChild(fruitBasket.firstChild);
// }

//----------------ATTRIBUTES------------------------------------
// const magicWand = document.createElement('div');
// // we set the id of the div to wand1
// magicWand.setAttribute('id', 'wand1');
// // we set the class of the div to magical-item-wand
// magicWand.setAttribute('class', 'magical-item-wand');
// magicWand.textContent = 'Magic Wand';
// playground.append(magicWand); 

// console.log(playground.getAttribute('id'));
// console.log(magicWand.id);
// console.log(magicWand.className);
// // set the attribute
// magicWand.id = "wand3";
// console.log(magicWand.id);

//-----------DATA ATTRIBUTES-----------------------------
const secretSroll = document.createElement('div');

secretScroll.id = 'secretScroll';
secretScroll.dataset.spell = 'invisibility';
secretScroll.dataset.components = 'moonlight, shadow essence';

secretScroll.textContent = "Ancient Spell Scroll";
playground.append(secretScroll);
