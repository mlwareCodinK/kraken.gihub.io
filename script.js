let tg = window.Telegram.WebApp

tg.expand();

let gghh



//       									 ============= GLOBAL VARIABLES =============

var money = 0,//global player's money
	clickGain = 1,//money gain on clicker clicked =
	autoGain = 1,//auto money gain
	interval;//auto money in
	interval1 = 1;
	
	energyforbar = 0




    
// HTML MAIN ELEMENTS (except  shop buttons)
let energy = 1000; // Начальное значение переменной energy


var element = {
	clicker   : document.getElementById("main-clicker"),//button
	money     : document.getElementById("money"),//txt
	
	
	

	
}
const progressBar = document.querySelector('.progress-bar-inner');
  



function updateProgressBar(value) {
    progressBar.style.width = value + '%';
   
}
  
    // Пример использования функции updateProgressBar():
    


//       									============= GLOBAL FUNCTIONS =============

function increaseEnergy() {
	if (energy < 1000) {
	  energy++;
	  energyforbar  = energy / 10
	  updateProgressBar(energyforbar)
	} else {
	  
	  console.log("Energy has reached 1000.");
	}
  }
  
function progress(){
	energyforbar  = energy / 10
    updateProgressBar(energyforbar)
}


  
  // Запускаем функцию increaseEnergy каждую секунду
const intervalID = setInterval(increaseEnergy, 1000);

  function updateBar(check=true){
	text1 = " " + energy
    energyforbar = energy / 10
	progress()
	
	
	
}


function addMoney() { // onClicker pressed add ClickGain
    if(energy>0){
		money = money + clickGain;
		energy = energy-1
		
		
	}
	
}




function updateMoney(check=true) {//update html money txt
  text = "$" + money;
  element.money.innerHTML = text;
  if(check){checkPrices();}
 

  
  
}
function autoMoney(amount) {//auto add money every interval
  clearInterval(interval);
  interval = setInterval(function(){ money = money + autoGain; updateMoney(); }, 200 / amount);
}

//called when a shop Element was bought
function checkPrices() {
	//Check price for each shop element
	//unlock purchase button if enough money
	for(let i=0;i<shop.length;i++){
		if(money >= shop[i].price){
			shop[i].element.disabled = false;
		}
	}
}
//called when a shop Element was bought
function onBuy(obj) {
	//update money
	money -= obj.price;
	updateMoney(check=false);
	//lock every purchase buttons in shop
	for(let i=0;i<shop.length;i++){
		shop[i].element.disabled = true;
	}
}

//       								 ============= SHOP BUTTON CLASS =============

class ShopElement{
	// Object for elements in the shop.
	// New Instance Token:
		 
	//   newprice_func -> the new price formula function
	//   onclick_func  -> the onClick function
	
	constructor (id,newprice_func,onclick_func) 
	{ //constructor: called on "new ShopElement()"
		this.id = id;
		this.element = document.getElementById(id);
		this.element.onclick = this.purchase.bind(this);
		this.text_element = this.element.getElementsByTagName("b")[0];
		
		this._updatePrice = newprice_func;
		this._onClick = onclick_func;
		
		this.price = 100;
		this.purchaseLvl = 1;
		this.updatePrice();
	}
	
	//Call default functions with this as argument
	onClick(){this._onClick(this);}
	updatePrice(){this._updatePrice(this);}
	
	//Update Button's txt price
	updateText(){
		this.text_element.innerHTML = "<b>" +'$'+this.price+': ' + "</b>";}

	
	// Update Every new purchase
	update(){
		this.updatePrice(); //calculate new price
		this.updateText();  //update displayed txt
	}
	// called on Element clicked
	purchase(){
		this.purchaseLvl += 1;
		this.onClick();
		onBuy(this);
		this.update()
		checkPrices();
	}
	
}

//       							 =============== SHOP BUTTONS & FUNCTIONS ===============

//alls buttons functions ( newPriceFormula , onClick )





//all shop's buttons
shop = [

	
];

//       									 ================= START =================

// FIRST UPDATE (on page loaded)
updateMoney(); //money txt
for (let i=0;i<shop.length;i++){
	shop[i].update() //buttons txt & price
}




//set main clicker function onClick
element.clicker.onclick = function() { 
	element.clicker.disabled = true;
	addMoney(); updateMoney();
	energyforbar  = energy / 10
	updateProgressBar(energyforbar)
	element.clicker.disabled = false;
  
}
	


let usercard = document.getElementById("usercard"); //получаем блок usercard 

gghh = `${tg.ss}`
usercard.innerText = gghh




    








