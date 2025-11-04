// 팝업
const cards = document.querySelectorAll(".card");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const popupTitle = document.getElementById("popup-title");
const popupDesc = document.getElementById("popup-desc");
const popupPrice = document.getElementById("popup-price");
const closeBtn = document.querySelector(".close");

cards.forEach(card => {
  card.addEventListener("click", () => {
    popupImg.src = card.dataset.img;
    popupTitle.textContent = card.dataset.title;
    popupDesc.textContent = card.dataset.desc;
    popupPrice.textContent = `가격: ${card.dataset.price}`;
    popup.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});
window.addEventListener("click", e => {
  if (e.target === popup) popup.style.display = "none";
});

// 스크롤 애니메이션
const fadeElems = document.querySelectorAll('.fade-in');
function handleScroll() {
  fadeElems.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', handleScroll);
handleScroll();

// 장바구니 버튼 클릭 이벤트
const cartButtons = document.querySelectorAll('.cart-btn');
cartButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    alert('상품이 장바구니에 담겼습니다! 🛒');
  });
});

