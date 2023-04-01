// const body = document.querySelector('body');
// body.style.background = 'black';
// console.log(body);

const image = document.querySelectorAll("img");
for (let i of image) {
  i.style.borderRadius = "14px";
}

// membuat logo di footer
function redirWhatsapp() {
  // window.location.href = "https://wa.me/+6281290161773"
  window.open("https://wa.me/+6281290161773", "_blank");
}

function redirFacebook() {
  // window.location.href = "https://web.facebook.com/shoffan abdilah"
  window.open("https://web.facebook.com/shoffanabdilah", "_blank");
}

function redirInstagram() {
  // window.location.href = "https://instagram.com/shoffanabdilah"
  window.open("https://instagram.com/shoffanabdilah", "_blank");
}

/* dark mode --> hanya merubah warna background body*/
function ubahMode() {
  const body = document.body;
  body.classList.toggle("dark");
}

/* faq */
/* hapus element dengan id:'nmr1-nomor'*/
/* dari element parent (id: 'nmr'), pake method remove child*/
document.getElementById("nmr").onclick = function () {
	// kalo misalnya elemen dengan id:'nmr1-nomor' ada
  if (document.getElementById("nmr1-nomor")) {
	
	// hapus elemen dengan id:'nmr1-nomor'
    document.removeChild(document.getElementById("nmr1").removeChild(document.getElementById("nmr1-nomor")));

	// buat elemen dengan id:'nmr1-nomor', tag 'p', textcontent '+6281 290 161 773'
  } else {
    const pElement = document.createElement("p");
    pElement.id = "nmr1-nomor";
    pElement.textContent = "+6281 290 161 773";
    document.getElementById("nmr1").appendChild(pElement);
  }
};