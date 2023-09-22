// Swiper
var swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 40,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: ".swipe_btn_next",
    prevEl: ".swiper_btn_prev",
  },
})

const mainElement = document.documentElement
const screenWidth = mainElement.clientWidth
const screenHeight = mainElement.clientHeight

console.log(`Your screen width: ${screenWidth}`)
console.log(`Your screen height: ${screenHeight}`)

// Show less cards on small screens
if (screenWidth <= 480) {
  var swiper = new Swiper(".swiper", {
    slidesPerView: 2,
    spaceBetween: 0,
    slidesPerGroup: 0,
    loop: false,
    loopFillGroupWithBlank: false,
  })
}
