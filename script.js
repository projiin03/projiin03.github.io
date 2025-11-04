// fade-in 등장 효과
const cards = document.querySelectorAll('.card');
function showCards() {
  const trigger = window.innerHeight * 0.8;
  cards.forEach(c => {
    const top = c.getBoundingClientRect().top;
    if (top < trigger) c.classList.add('visible');
  });
}
window.addEventListener('scroll', showCards);
showCards();

// 모달
const modal = document.querySelector('.modal');
const closeBtn = modal.querySelector('.close');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const modalDesc = document.getElementById('modal-desc');

document.querySelectorAll('.more-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    const card = e.target.closest('.card');
    modalImg.src = card.dataset.img;
    modalTitle.textContent = card.dataset.title;
    modalPrice.textContent = card.dataset.price;
    modalDesc.textContent = card.dataset.desc;
    modal.style.display = 'flex';
  });
});
closeBtn.addEventListener('click', () => modal.style.display='none');
modal.addEventListener('click', e => { if(e.target===modal) modal.style.display='none'; });

// 장바구니 클릭
document.querySelectorAll('.cart-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    alert('상품이 장바구니에 담겼습니다!');
  });
});





