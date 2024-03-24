// Puntatori
const header= document.getElementById("header");

window.addEventListener('scroll', function() {
	// console.log(this.scrollY);
	if (window.scrollY > 0) {
		header.classList.add('bg-black');
	} else {
		header.classList.remove('bg-black');
	}
})