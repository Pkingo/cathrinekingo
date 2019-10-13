function main () {
  if ($(window).height() >= $(document).height()) {
    document.getElementById("footer").style.position = "absolute";
  } else {
    document.getElementById("footer").style.position = "inherit";
  }
}

main();