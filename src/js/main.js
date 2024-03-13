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

const inputName = document.querySelector(".code-input");

function hasValue() {
  const inputValue = inputName.value;
  if (inputValue) {
    inputName.classList.add("has-value");
  } else {
    inputName.classList.remove("has-value");
  }
}

inputName.addEventListener("blur", hasValue);
