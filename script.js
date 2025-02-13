//your JS code here. If required.

// function upperCase(str) {
// 	let txt = fname.getElementById();
// 	return txt.toUpperCase();
// }

let inp_val = document.getElementById("fname");
function upp() {
	let val = inp_val.value;
	inp_val.value = val.toUpperCase();
    // this.value = this.value.toUpperCase();
}
	inp_val.addEventListener("blur", upp);
