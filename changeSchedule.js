const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day = weekday[d.getDay()];
console.log(day);
let tab = document.getElementsByClassName("tab-title");
console.log(tab);
for(let i=0;i<tab.length;i++){
	if(tab[i].innerText == day){
		console.log(tab[i])
		tab[i].parentElement.classList.add("active");
	}
	else {
		tab[i].parentElement.classList.remove("active");
	}
}