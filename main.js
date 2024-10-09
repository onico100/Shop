function moveTo(num) {
  document.getElementById("welcome").classList.add("hide");

  if (num === 1) renderProducts(Gcraft);
  else renderProducts(Gnotebooks);
}
