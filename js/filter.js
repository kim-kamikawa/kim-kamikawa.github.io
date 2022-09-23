function filterView() {
	// Hides rows depending on user specified species and gender
	let tableRows = document.getElementsByTagName("tr");
	for (let row = 0; row < tableRows.length; row++) {
		tableRows[row].style.display = 'block';
		switch (document.getElementById("animalType").value) {
			case "all":
				if (document.getElementById("femaleRadio").checked) {
					if (tableRows[row].classList.contains("male")) {
						tableRows[row].style.display = 'none';
					}
				}
				if (document.getElementById("maleRadio").checked) {
					if (tableRows[row].classList.contains("female")) {
						tableRows[row].style.display = 'none';
					}
				}
				break;
			case "cat":
				if (tableRows[row].classList.contains("dog")) {
					tableRows[row].style.display = 'none';
				} else if (document.getElementById("femaleRadio").checked) {
					if (tableRows[row].classList.contains("male")) {
						tableRows[row].style.display = 'none';
					}

				} else if (document.getElementById("maleRadio").checked) {
					if (tableRows[row].classList.contains("female")) {
						tableRows[row].style.display = 'none';
					}
				}
				break;
			case "dog":
				if (tableRows[row].classList.contains("cat")) {
					tableRows[row].style.display = 'none';
				} else if (document.getElementById("femaleRadio").checked) {
					if (tableRows[row].classList.contains("male")) {
						tableRows[row].style.display = 'none';
					}

				} else if (document.getElementById("maleRadio").checked) {
					if (tableRows[row].classList.contains("female")) {
						tableRows[row].style.display = 'none';
					}
				}
				break;
		}
	}
}





