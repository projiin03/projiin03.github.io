// "신상품 보러가기" 버튼 클릭 시 알림
document.getElementById('shopNowBtn').addEventListener('click', function () {
  alert("신상품 페이지는 아직 준비 중이에요 😊");
});

// 스크롤 감지 후 상품 카드 등장
const cards = document.querySelectorAll('.product-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => observer.observe(card));






