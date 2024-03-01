const parallax_el = document.querySelectorAll(".parallax");
const main = document.querySelector("main")

let xValue = 0,
  yValue = 0;

window.addEventListener("mousemove", (e) => {
if(timeline.isActive()) return;

  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

  parallax_el.forEach((el) => {
    let speedx = parseFloat(el.dataset.speedx);
    let speedy = parseFloat(el.dataset.speedy);

    if (!isNaN(speedx) && !isNaN(speedy)) {
      el.style.transform = `translateX(calc(-50% + ${
        -xValue * speedx
      }px)) translateY(calc(-50% + ${yValue * speedy}px))`;
    }
  });
});

if(window.innerWidth>=725){
  main.style.maxHeight=`${window.innerWidth*0.6}px`
 
}else{
  main.style.maxHeight=`${window.innerWidth*1.6}px`
}

// const distance =420
// const bgDistance =530
// if(window.innerHeight>=1400){
//   distance=400,
//   bgDistance=580
// }


// GSAP

const timeline = gsap.timeline();

timeline.to(".bottomcloud",
{
  top: `${document.querySelector(".bottomcloud").offsetHeight / 2 -420}px`,
  duration: 2,
  ease:"power3.out"
},
"1"
)

timeline.to(".topcloud",
{
  top: `${document.querySelector(".topcloud").offsetHeight / 2 -420}px`,
  duration: 2,
  ease:"power3.out"
},
"1"
)

timeline.to(".bg-img",
{
  top: `${document.querySelector(".bg-img").offsetHeight / 2 +530}px`,
  duration: 1.5,
  ease:"power3.out"
},
"2"
)

timeline.from(".hide",
{
  opacity:0,
  duration:1.5,
},"2")
