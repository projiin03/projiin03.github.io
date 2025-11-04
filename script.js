// 스크롤 등장 애니메이션
const fades = document.querySelectorAll('.fade-in');
const onScroll = () => {
  const trigger = window.innerHeight * 0.85;
  fades.forEach(el => {
    const { top } = el.getBoundingClientRect();
    if (top < trigger) el.classList.add('visible');
  });
};
window.addEventListener('scroll', onScroll);
onScroll();

// 카드 클릭 → 모달
const modal = document.getElementById('product-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const modalDesc = document.getElementById('modal-desc');
const closeBtn = modal.querySelector('.close');

function openModalFromCard(card) {
  modalImg.src = card.dataset.img;
  modalTitle.textContent = card.dataset.title;
  modalPrice.textContent = card.dataset.price;
  modalDesc.textContent = card.dataset.desc;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

// 카드 이벤트 바인딩
document.querySelectorAll('.card').forEach(card => {
  // 카드 전체 클릭 시 상세 보기 (장바구니 버튼은 제외)
  card.addEventListener('click', e => {
    if (e.target.classList.contains('cart-btn')) return; // 장바구니는 별도 처리
    openModalFromCard(card);
  });
  // "자세히 보기" 버튼
  const moreBtn = card.querySelector('.more-btn');
  moreBtn.addEventListener('click', e => {
    e.stopPropagation();
    openModalFromCard(card);
  });
  // 장바구니 버튼
  const cartBtn = card.querySelector('.cart-btn');
  cartBtn.addEventListener('click', e => {
    e.stopPropagation();
    alert('상품이 장바구니에 담겼습니다! 🛒');
  });
});

// 모달 닫기
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
window.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.style.display === 'flex') closeModal(); });




