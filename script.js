const fname = document.querySelector("#fname");
fname.addEventListener("blur",() => {
	fname.value = fname.value.toUpperCase();
});