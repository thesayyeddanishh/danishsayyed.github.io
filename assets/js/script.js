'use strict';

// ================= TOGGLE FUNCTION =================
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// ================= SIDEBAR =================
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// ================= TESTIMONIAL MODAL =================
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
const modalRole = document.querySelector("[data-modal-role]");

const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

testimonialsItem.forEach(item => {
  item.addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;

    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    const role = this.querySelector(".testimonials-role");
    modalRole.innerHTML = role ? role.innerHTML : "";

    testimonialsModalFunc();
  });
});

modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// ================= FILTER (PORTFOLIO + PROJECTS) =================
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

// dropdown toggle
if (select) {
  select.addEventListener("click", function () {
    elementToggleFunc(this);
  });
}

// dropdown select
selectItems.forEach(item => {
  item.addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);

    filterFunc(selectedValue);
  });
});

// filter function
const filterFunc = function (selectedValue) {
  filterItems.forEach(item => {
    const category = item.dataset.category;

    if (selectedValue === "all" || selectedValue === category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

// button filter
let lastClickedBtn = filterBtns[0];

filterBtns.forEach(btn => {
  btn.addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;

    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
});

// ================= CONTACT FORM =================
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach(input => {
  input.addEventListener("input", function () {

    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});

// ================= PAGE NAVIGATION =================
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link, index) => {
  link.addEventListener("click", function () {

    navigationLinks.forEach(l => l.classList.remove("active"));
    pages.forEach(p => p.classList.remove("active"));

    this.classList.add("active");
    pages[index].classList.add("active");

    window.scrollTo(0, 0);
  });
});
