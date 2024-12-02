
    var cursor = document.querySelector("#cursosr")
    var blurr = document.querySelector("#blurr")

    addEventListener("mousemove", function(dets){

        
        
        cursor.style.left = dets.x-10+ "px";
        cursor.style.top = dets.y + "px";
        
        blurr.style.left = dets.x-150 +"px";
        blurr.style.top = dets.y-150+ "px";
        // scrub:1;
        })
        document.addEventListener("mouseenter", function() {
            cursor.style.opacity = 1;
            blurr.style.opacity = 1;
        });
      

        document.addEventListener("mouseleave", function() {
            cursor.style.opacity = 0;
            blurr.style.opacity = 0;
        }); 

gsap.to("#nav",{
backgroundColor:"black",
height:"110px",
duration:0.5,

scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    // markers:true,
    start:"top -10%",
    end:"top -11%",
    scrub:2
    
}
})

gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
trigger:"#main",
scroller:"body",
// markers:true,
start:"top -25%",
end:"top -70%",
scrub:2


    }
})

var buttonn = document.querySelector(".buttoncofee").addEventListener("mouseenter",function(){
    buttonn.style.backgroundColor = "Green"
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
elem.addEventListener("mouseenter",function(){
    cursor.style.scale = 2;
    cursor.style.backgroundColor = "transparent";
    cursor.style.border = " 1px solid white";
})
elem.addEventListener("mouseleave",function(){
    cursor.style.scale = 1;
    cursor.style.backgroundColor = "#739417";
    cursor.style.border = "";
})
})

gsap.from("#ImgAndContent img , #ImgAndContent,#about h1 p",{
    y:90,
    opacity:0,
    duration:1.2,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#ImgAndContent",
        scroller:"body",
        start:"top-60%",
        end:"top 55%",
        scrub:2

    }
})
gsap.from("#cards-div",{
    scale: 1,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        start:"top-60%",
        end:"top 55%",
        scrub:2

    }
})

gsap.from(".left",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:".left",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 47%",
        scrub:3
    }
})
gsap.from(".right",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:".left",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 47%",
        scrub:4
    }
})

gsap.from("#page5 h1",{
    y:40,
    scrollTrigger:{
        trigger:"#page5 h1",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:2
    }
})

const navButtons = document.querySelectorAll('#nav button');

navButtons.forEach((button) => {
    button.addEventListener('mouseover', () => {
      gsap.to(button, {
        scale: 1.1,
        duration: 0.3,
        ease: 'power2.inOut'
      });
      gsap.to(button.querySelector('::before'), {
        transform: 'translateY(0)',
        duration: 0.3,
        ease: 'power2.inOut'
      });
    });
  
    button.addEventListener('mouseout', () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.inOut'
      });
      gsap.to(button.querySelector('::before'), {
        transform: 'translateY(100%)',
        duration: 0.3,
        ease: 'power2.inOut'
      });
    });
  });


    
