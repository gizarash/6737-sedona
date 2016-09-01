var hotelBtn = document.querySelector(".btn-hotel");
var hotelSearchModal = document.querySelector(".modal-booking");
var arriveDateField = hotelSearchModal.querySelector("#arrival_date");
var departDateField = hotelSearchModal.querySelector("#departure_date");
var adultsCountField = hotelSearchModal.querySelector("#adults_count");
var childrenCountField = hotelSearchModal.querySelector("#children_count");
var storageAdultsCount = localStorage.getItem("adultsCount");
var storageChildrenCount = localStorage.getItem("childrenCount");

hotelBtn.addEventListener("click", function (e) {
  e.preventDefault();
  hotelSearchModal.classList.toggle("modal-show");
  if (storageAdultsCount) {
    adultsCountField.value = storageAdultsCount;
  }
  if (storageChildrenCount) {
    childrenCountField.value = storageChildrenCount;
  }
});

hotelSearchModal.addEventListener("submit", function (e) {
  if (!arriveDateField.value || !departDateField.value || !adultsCountField.value || !childrenCountField.value) {
    e.preventDefault();
    if (!arriveDateField.value) {
      arriveDateField.classList.add("input-error");
    }
    if (!departDateField.value) {
      departDateField.classList.add("input-error");
    }
    if (!adultsCountField.value) {
      adultsCountField.classList.add("input-error");
    }
    if (!childrenCountField.value) {
      childrenCountField.classList.add("input-error");
    }
  } else {
    localStorage.setItem("adultsCount", adultsCountField.value);
    localStorage.setItem("childrenCount", childrenCountField.value);
  }
});

arriveDateField.addEventListener("focus", function (e) {
  this.classList.remove("input-error");
});

departDateField.addEventListener("focus", function (e) {
  this.classList.remove("input-error");
});

adultsCountField.addEventListener("focus", function (e) {
  this.classList.remove("input-error");
});

childrenCountField.addEventListener("focus", function (e) {
  this.classList.remove("input-error");
});
