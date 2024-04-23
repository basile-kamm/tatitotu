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

var printOption = document.querySelector("[data-printoption]");
var printContainer = document.querySelector(".section-print-container");
printOption.addEventListener("change", function () {
  var printValue = printOption.checked;
  if (printValue === true) {
    printContainer.classList.add("is-active");
  } else {
    printContainer.classList.remove("is-active");
  }
});

document.body.style.setProperty("--primary", "128, 0, 255");
document.body.style.setProperty("--dark", "22, 22, 22");
document.body.style.setProperty("--light", "255, 255, 255");

const themeContainer = document.querySelector(".theme-container");
const themeIcon = document.querySelector(".theme-icon");
const themeCross = document.querySelector(".theme-cross");

themeIcon.addEventListener("click", function () {
  themeContainer.classList.add("is-active");
});
themeCross.addEventListener("click", function () {
  themeContainer.classList.remove("is-active");
});
document.querySelector("main").addEventListener("click", function () {
  themeContainer.classList.remove("is-active");
});

themeContainer.addEventListener("click", function () {
  var radioButtonGroup = document.getElementsByName("theme");
  var checkedRadio = Array.from(radioButtonGroup).find(
    (radio) => radio.checked
  );
  console.log(checkedRadio.value);
  if (checkedRadio.value === "light") {
    document.body.style.setProperty("--primary", "128, 0, 255");
    document.body.style.setProperty("--dark", "22, 22, 22");
    document.body.style.setProperty("--light", "230, 230, 230");
  } else if (checkedRadio.value === "dark") {
    document.body.style.setProperty("--primary", "128, 0, 255");
    document.body.style.setProperty("--light", "22, 22, 22");
    document.body.style.setProperty("--dark", "255, 255, 255");
  } else if (checkedRadio.value === "green") {
    document.body.style.setProperty("--primary", "0, 219, 2");
    document.body.style.setProperty("--light", "3, 40, 6");
    document.body.style.setProperty("--dark", "255, 255, 255");
  } else if (checkedRadio.value === "samurai") {
    document.body.style.setProperty("--primary", "255, 51, 255");
    document.body.style.setProperty("--light", "0, 51, 51");
    document.body.style.setProperty("--dark", "255, 255, 102");
  } else if (checkedRadio.value === "rgb") {
    document.body.style.setProperty("--primary", "0, 255, 0");
    document.body.style.setProperty("--light", "0, 0, 200");
    document.body.style.setProperty("--dark", "255, 0, 0");
  } else if (checkedRadio.value === "cmy") {
    document.body.style.setProperty("--primary", "0, 255, 255");
    document.body.style.setProperty("--light", "200, 0, 200");
    document.body.style.setProperty("--dark", "255, 255, 0");
  } else if (checkedRadio.value === "red") {
    document.body.style.setProperty("--primary", "200, 0, 0");
    document.body.style.setProperty("--light", "53, 0, 0");
    document.body.style.setProperty("--dark", "255, 230, 230");
  } else if (checkedRadio.value === "lineoff") {
    document.body.style.setProperty("--primary", "62, 145, 146");
    document.body.style.setProperty("--light", "24, 0, 61");
    document.body.style.setProperty("--dark", "150, 221, 157");
  } else if (checkedRadio.value === "lego") {
    document.body.style.setProperty("--primary", "255,215,0");
    document.body.style.setProperty("--light", "63,7,61");
    document.body.style.setProperty("--dark", "240,	245,	245");
  } else if (checkedRadio.value === "baka") {
    document.body.style.setProperty("--primary", "35, 35, 35");
    document.body.style.setProperty("--light", "5, 5,5");
    document.body.style.setProperty("--dark", "25, 25, 25");
  } else if (checkedRadio.value === "extralight") {
    document.body.style.setProperty("--primary", "235, 235, 235");
    document.body.style.setProperty("--light", "255, 255,255");
    document.body.style.setProperty("--dark", "240, 240, 240");
  }
});

var checkAllTrigger = document.querySelector("[data-checkall]");
var uncheckAllTrigger = document.querySelector("[data-uncheckall]");
var checkBoxes = document.querySelectorAll("[data-checkbox]");

var checkAll = function () {
  checkBoxes.forEach((checkBox) => {
    checkBox.checked = true;
    var event = new Event("change");
    checkBox.dispatchEvent(event);
  });
};
var uncheckAll = function () {
  checkBoxes.forEach((checkBox) => {
    checkBox.checked = false;
    var event = new Event("change");
    checkBox.dispatchEvent(event);
  });
};

checkAllTrigger.addEventListener("click", checkAll);
uncheckAllTrigger.addEventListener("click", uncheckAll);

var pronounCheckbox = document.querySelector("[data-pronoun]");
var pronounContainer = document.querySelector(".radio-verb-container");
pronounCheckbox.addEventListener("change", function () {
  console.log("test");
  var pronounValue = pronounCheckbox.checked;
  if (pronounValue === true) {
    pronounContainer.classList.add("is-open");
  } else {
    pronounContainer.classList.remove("is-open");
  }
});

var verbs = ["Manger", "Modeler", "Boire", "Avoir", "Etre", "Pouvoir"];
var verbTextfield = document.querySelector("[data-textfield]");
var suggestions = document.querySelector("[data-suggestion]");

var autoComplete = function () {
  var items = verbs.filter((value) => value.includes(verbTextfield.value));
  suggestions.innerHTML = items.join(", ");
};

verbTextfield.addEventListener("keyup", autoComplete);

var popupOpenTriggers = document.querySelectorAll("[data-popuptrigger]");
var popupCloseTrigger = document.querySelector("[data-popupcross]");
var popup = document.querySelector("[data-popup]");

var popupClose = function () {
  popup.classList.remove("active");
};
var popupOpen = function () {
  popup.classList.add("active");
};

popupCloseTrigger.addEventListener("click", popupClose);
document.querySelector("main").addEventListener("click", popupClose);
popupOpenTriggers.forEach((popupOpenTrigger) => {
  popupOpenTrigger.addEventListener("click", popupOpen);
});
