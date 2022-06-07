var langcolor = document.getElementById('lang');

langcolor.onclick = function() {
  document.header__title-lang.classList.toggle('langmodify');
}

var equipmentcolor = document.getElementById('equipment');

equipmentcolor.onclick = function(){
	document.getElementById('equipment').classList.toggle('colorGreen');
}

var companycolor = document.getElementById('company');

companycolor.onclick = function(){
	document.getElementById('company').classList.toggle('colorGreen');
}
/*
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if(equipmentcolor.length > 0) {
	for (let index = 0; index < equipmentcolor.length; index++){
		const popuplink = equipmentcolor[index];
		popuplink.addEventListener("click", function(e){
			const popupName = popuplink.getAttribute('href').replace('#','');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0){
	for (let i =0; i<popupCloseIcon.length; i++){
		const el = popupCloseIcon[i];
		el.addEventListener('click', function(e){
			popupClose(el.closest('.popup-items'));
			e.preventDefault();
		});
	}
}
function popupOpen(curentPopup){
	if (curentPopup && unlock){
		const popupActive = document.querySelector('.popup.open');
		if (popupActive){
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function(e){
			if (!e.target.closest('.popup-items__content')){
				popupClose(e.target.closest('.popup-items'));
			}
		});
	}
}
*/