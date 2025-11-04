/* 슬라이드 */
let index = 0;
function showSlides(){
  const slides = document.getElementsByClassName("slide");
  for(let i=0;i<slides.length;i++) slides[i].style.display="none";
  index++;
  if(index > slides.length) index = 1;
  slides[index-1].style.display="block";
  setTimeout(showSlides, 5000);
}
showSlides();

/* 카카오 로그인 */
const KAKAO_APP_KEY = "본인_JavaScript_키_여기";
Kakao.init(KAKAO_APP_KEY);

const loginBtn = document.getElementById("kakao-login-btn");
loginBtn.addEventListener("click",()=>{
  Kakao.Auth.login({
    success: function(auth){
      alert("카카오 로그인 성공!");
    },
    fail: function(err){
      alert("로그인 실패");
      console.error(err);
    }
  });
});


