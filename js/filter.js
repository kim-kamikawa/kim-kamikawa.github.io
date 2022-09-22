function filterView() {

	var tableRows = document.querySelectorAll("tr");
	for (let i = 1; i <= 6; i++) {
		if (document.getElementById("animalType").value == 'all') {
			document.getElementById("tr" + i).style.display = 'block';
			if (document.getElementById("femaleRadio").checked) {
				if (document.getElementById("tr" + i).classList.contains("male")) {
					document.getElementById("tr" + i).style.display = 'none';
				}
			}
			if (document.getElementById("maleRadio").checked) {
				if (document.getElementById("tr" + i).classList.contains("female")) {
					document.getElementById("tr" + i).style.display = 'none';
				}
			}
		}
		if (document.getElementById("animalType").value == 'cat') {
			document.getElementById("tr" + i).style.display = 'block';
			if (document.getElementById("tr" + i).classList.contains("dog")) {
				document.getElementById("tr" + i).style.display = 'none';
			} else if (document.getElementById("femaleRadio").checked) {
				if (document.getElementById("tr" + i).classList.contains("male")) {
					document.getElementById("tr" + i).style.display = 'none';
				}

			} else if (document.getElementById("maleRadio").checked) {
				if (document.getElementById("tr" + i).classList.contains("female")) {
					document.getElementById("tr" + i).style.display = 'none';
				}
			}
		}
		if (document.getElementById("animalType").value == 'dog') {
			document.getElementById("tr" + i).style.display = 'block';
			if (document.getElementById("tr" + i).classList.contains("cat")) {
				document.getElementById("tr" + i).style.display = 'none';
			} else if (document.getElementById("femaleRadio").checked) {
				if (document.getElementById("tr" + i).classList.contains("male")) {
					document.getElementById("tr" + i).style.display = 'none';
				}

			}else if (document.getElementById("maleRadio").checked) {
				if (document.getElementById("tr" + i).classList.contains("female")) {
					document.getElementById("tr" + i).style.display = 'none';
				}
			}
		}
	}
}


