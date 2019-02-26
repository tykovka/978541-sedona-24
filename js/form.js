var form = document.querySelector(".search-form");
var searchHtlBtn = document.querySelector(".search-hotel-button");
var findBtn = document.querySelector(".find-button");
var arrivalDt = form.querySelector("[name=arrival-date]");
var departureDt = form.querySelector("[name=departure-date]");

searchHtlBtn.addEventListener("click", function() {
    form.classList.toggle("form-is-hidden");
});

form.addEventListener("submit", function(evt) {
    form.classList.remove("shake");
    form.getBoundingClientRect(); 

    if (!arrivalDt.value || !departureDt.value) {
        evt.preventDefault();
        form.classList.add("shake");
    }
});