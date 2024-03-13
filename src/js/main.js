document.addEventListener("DOMContentLoaded", function () {
  const selects = document.querySelectorAll(".select");

  selects.forEach(function (select) {
    select.addEventListener("click", toggleActive);
    select.addEventListener("mouseenter", removeActiveFromOthers);
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".select")) {
      selects.forEach(function (select) {
        select.classList.remove("is-active");
      });
    }
  });

  function toggleActive() {
    const clickedSelect = this;
    selects.forEach(function (select) {
      if (select !== clickedSelect) {
        select.classList.remove("is-active");
      }
    });
    this.classList.toggle("is-active");
  }

  function removeActiveFromOthers() {
    const hoveredSelect = this;
    selects.forEach(function (select) {
      if (select !== hoveredSelect) {
        select.classList.remove("is-active");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const textFields = document.querySelectorAll(".textfield-input");

  textFields.forEach(function (input) {
    input.addEventListener("blur", hasValue);
  });

  function hasValue(event) {
    const inputValue = event.target.value;
    if (inputValue) {
      event.target.classList.add("has-value");
    } else {
      event.target.classList.remove("has-value");
    }
  }
});
