/***********************
 * 1) 배너 슬라이드
 ***********************/
let slideIndex = 0;
function showSlides(){
  const slides = document.getElementsByClassName("slide");
  for(let i=0;i<slides.length;i++) slides[i].style.display="none";
  slideIndex++;
  if(slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // 4초마다 전환
}
showSlides();

/***********************
 * 2) 카카오 로그인
 *    ⛳ 반드시 본인 JavaScript 키로 변경!
 *    https://developers.kakao.com → 내 애플리케이션 → JavaScript 키
 *    사이트 도메인에 https://projiin03.github.io 등록 필수
 ***********************/
const KAKAO_APP_KEY = "여기에_본인_카카오_JavaScript_키_붙여넣기";

try{
  Kakao.init(KAKAO_APP_KEY);
  // console.log("Kakao SDK 초기화:", Kakao.isInitialized());
}catch(e){
  console.error("Kakao SDK 초기화 실패. 앱 키를 입력했는지 확인하세요.", e);
}

// 엘리먼트
const loginBtn  = document.getElementById("kakao-login-btn");
const logoutBtn = document.getElementById("kakao-logout-btn");
const profileBox = document.getElementById("profile");
const profileImg = document.getElementById("profile-image");
const profileName = document.getElementById("profile-name");

// 로그인 후 사용자 정보 표시
function showProfile(nickname, imageUrl){
  loginBtn.hidden = true;
  profileBox.hidden = false;
  profileName.textContent = nickname ? `${nickname} 님` : "환영합니다";
  if(imageUrl){ profileImg.src = imageUrl; } else { profileImg.src = "https://via.placeholder.com/60?text=K"; }
}

// 로그인 처리
loginBtn?.addEventListener("click", () => {
  Kakao.Auth.login({
    success: function(auth) {
      // 사용자 정보 요청
      Kakao.API.request({
        url: '/v2/user/me',
        success: function(res){
          const nickname = res?.kakao_account?.profile?.nickname || "고운차림 고객";
          const imageUrl = res?.kakao_account?.profile?.profile_image_url;
          showProfile(nickname, imageUrl);
        },
        fail: function(err){ alert("프로필 불러오기에 실패했습니다."); console.error(err); }
      });
    },
    fail: function(err){ alert("로그인 실패 😢"); console.error(err); }
  });
});

// 로그아웃
logoutBtn?.addEventListener("click", () => {
  Kakao.Auth.logout(() => {
    // UI 초기화
    profileBox.hidden = true;
    loginBtn.hidden = false;
  });
});

// 새로고침 시 토큰이 있으면 프로필 시도 (간단 복원)
if (Kakao.Auth.getAccessToken()) {
  Kakao.API.request({
    url:'/v2/user/me',
    success: function(res){
      const nickname = res?.kakao_account?.profile?.nickname || "고운차림 고객";
      const imageUrl = res?.kakao_account?.profile?.profile_image_url;
      showProfile(nickname, imageUrl);
    }
  });
}
