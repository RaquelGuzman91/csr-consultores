  window.addEventListener("scroll", function() {
    const header = document.getElementById("mainHeader");
    const logo = document.getElementById("logo");


    if (window.scrollY > 200) {
      header.style.backgroundColor = "rgba(29, 29, 29, 0.91)"; // transparente al bajar
      logo.style.height = "110px";   // logo reducido

    } else {
      header.style.backgroundColor = "rgba(43, 43, 43, 0.3)"; // sólido al inicio 
      logo.style.height = "130px";    // logo normal

    }
  });
