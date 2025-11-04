// 팝업 열기
const cards = document.querySelectorAll(".card");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const popupTitle = document.getElementById("popup-title");
const popupDesc = document.getElementById("popup-desc");
const closeBtn = document.querySelector(".close");

cards.forEach(card => {
  card.addEventListener("click", () => {
    popupImg.src = card.dataset.img;
    popupTitle.textContent = card.dataset.title;
    popupDesc.textContent = card.dataset.desc;
    popup.style.display = "block";
  });
});

// 팝업 닫기
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// 팝업 외부 클릭 시 닫기
window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});


