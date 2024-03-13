document.addEventListener("DOMContentLoaded", function () {
  const selects = document.querySelectorAll(".select");

  selects.forEach(function (select) {
    select.addEventListener("click", toggleActive);
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".select")) {
      selects.forEach(function (select) {
        select.classList.remove("is-active");
      });
    }
  });

  function toggleActive() {
    this.classList.toggle("is-active");
  }
});
