
const inputs = document.querySelectorAll('.filters input')

function handleUpdate() {
	const suffix = this.dataset.sizing || '';
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

document.querySelector('.fullscreen').addEventListener('click', check);
 document.querySelector('.fullscreen').addEventListener('click', toggleScreen);


 function check() {
 	console.log('fullscreenEnabled: ');
 	console.log(document.fullscreenEnabled);
 	console.log('fullscreenElement: ');
 	console.dir(document.fullscreenElement);
 }


 function toggleScreen () {
 	if (document.fullscreenElement == null) {
 		document.documentElement.requestFullscreen();
 	}
 	else {

 		if (document.fullscreenEnabled) {

 			document.exitFullscreen();

 		}

 	}


	inputs.forEach(input => input.addEventListener('change', handleUpdate));
	inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));




}

