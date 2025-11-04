// 스크롤 시 fade-in
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });
fadeEls.forEach(el => observer.observe(el));

// 상세 팝업
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const popupTitle = document.getElementById('popup-title');
const popupDesc = document.getElementById('popup-desc');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.large-item').forEach(item => {
  item.addEventListener('click', () => {
    popupImg.src = item.querySelector('img').src;
    popupTitle.textContent = item.dataset.title;
    popupDesc.textContent = item.dataset.desc;
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  document.body.style.overflow = 'auto';
});

popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});


