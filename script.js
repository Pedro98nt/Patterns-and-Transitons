let t1 = gsap.timeline({delay:0.5});
let t2 = gsap.timeline({delay:1.5});
let t3 = gsap.timeline({
  delay:3.7,
  repeat:1,
  yoyo:true,
  onComplete:playReverseT2
});


for(let i=1; i<7; i++){
    t1.fromTo(".circ"+i,
{
    opacity:0
},
{
      opacity:1,
      duration:0.1,
      ease: Expo.easeOut,
});
}

function playSecondTl(){
  t2.play();
}

function playReverseT2(){
  t2.reverse();
}

t2.fromTo(".cover1", {left:"-100vw"}, {left:"0vw", duration:0.5})
.fromTo(".cover2", {left:"100vw"}, {left:"0vw", duration:0.5})
.fromTo(".cover3", {left:"-100vw"}, {left:"0vw", duration:0.5})
.fromTo(".cover4", {left:"100vw"}, {left:"0vw", duration:0.5})
.to(".pattern1", {display:"none", duration:0.2});


t3.fromTo(".circ",
{
  opacity:0
},
{
  opacity:1,
  duration:0.3,
  stagger:{
    each:0.2
  }
})
.to(".circ_6", {x:"300%", y:"-300%", duration:0.2})
.to(".circ_7", {x:"300%", duration:0.2}, "-=0.2")
.to(".circ_8", {x:"300%", y:"300%", duration:0.2}, "-=0.2")
.to(".circ_9", {x:"-300%", y:"300%", duration:0.2}, "-=0.2")
.to(".circ_10", {x:"-300%",duration:0.2}, "-=0.2")
.to(".circ_11", {x:"-300%", y:"-300%", duration:0.2}, "-=0.2")
.to(".circ_2", {y:"-300%", duration:0.2}, "-=0.2")
.to(".circ_3", {x:"300%", duration:0.2}, "-=0.2")
.to(".circ_4", {y:"300%", duration:0.2}, "-=0.2")
.to(".circ_5", {x:"-300%", duration:0.2}, "-=0.2")
.to(".circ_1", {opacity:0, duration:0.2}, "-=0.2")