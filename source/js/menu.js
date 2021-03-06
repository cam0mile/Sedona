(function() {
  if (!document.querySelector(".menu-section")) {
    return;
  }
  var link = document.querySelector(".menu-section-open");
  var popup = document.querySelector(".menu-section")
  var close = document.querySelector(".menu-section__close");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("menu-section-show");
    link.classList.add("menu-not-show");
  });

  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("menu-section-show");
    link.classList.remove("menu-not-show");
  });
})();
