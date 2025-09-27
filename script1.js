var cursor=document.querySelector("#cursor");
window.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x+"px"
    cursor.style.top = dets.y+"px"
})


function initialize() {
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    })

    function files(index) {
        var data = `https://vandvagro.com/assets/001.png
    https://vandvagro.com/assets/001.png
    https://vandvagro.com/assets/002.png
    https://vandvagro.com/assets/003.png
    https://vandvagro.com/assets/004.png
    https://vandvagro.com/assets/005.png
    https://vandvagro.com/assets/006.png
    https://vandvagro.com/assets/007.png
    https://vandvagro.com/assets/008.png
    https://vandvagro.com/assets/009.png
    https://vandvagro.com/assets/010.png
    https://vandvagro.com/assets/011.png
    https://vandvagro.com/assets/012.png
    https://vandvagro.com/assets/013.png
    https://vandvagro.com/assets/014.png
    https://vandvagro.com/assets/015.png
    https://vandvagro.com/assets/016.png
    https://vandvagro.com/assets/017.png
    https://vandvagro.com/assets/018.png
    https://vandvagro.com/assets/019.png
    https://vandvagro.com/assets/020.png
    https://vandvagro.com/assets/021.png
    https://vandvagro.com/assets/022.png
    https://vandvagro.com/assets/023.png
    https://vandvagro.com/assets/023A.png
    https://vandvagro.com/assets/024.png
    https://vandvagro.com/assets/025.png
    https://vandvagro.com/assets/026.png
    https://vandvagro.com/assets/027.png
    https://vandvagro.com/assets/028.png
    https://vandvagro.com/assets/029.png
    https://vandvagro.com/assets/030.png
    https://vandvagro.com/assets/031.png
    https://vandvagro.com/assets/032.png
    https://vandvagro.com/assets/033.png
    https://vandvagro.com/assets/034.png
    https://vandvagro.com/assets/035.png
    https://vandvagro.com/assets/036.png
    https://vandvagro.com/assets/037.png
    https://vandvagro.com/assets/038.png
    https://vandvagro.com/assets/039.png
    https://vandvagro.com/assets/040.png
    https://vandvagro.com/assets/041.png
    https://vandvagro.com/assets/042.png
    https://vandvagro.com/assets/044.png
    https://vandvagro.com/assets/045.png
    https://vandvagro.com/assets/046.png
    https://vandvagro.com/assets/047.png
    https://vandvagro.com/assets/048.png
    https://vandvagro.com/assets/049.png
    https://vandvagro.com/assets/050.png
    https://vandvagro.com/assets/051.png
    https://vandvagro.com/assets/052.png
    https://vandvagro.com/assets/053.png
    https://vandvagro.com/assets/054.png
    https://vandvagro.com/assets/055.png
    https://vandvagro.com/assets/056.png
    https://vandvagro.com/assets/057.png
    https://vandvagro.com/assets/058.png
    https://vandvagro.com/assets/059.png
    https://vandvagro.com/assets/060.png
    https://vandvagro.com/assets/061.png
    https://vandvagro.com/assets/062.png
    https://vandvagro.com/assets/063.png
    https://vandvagro.com/assets/064.png
    https://vandvagro.com/assets/065.png
    https://vandvagro.com/assets/066.png
    https://vandvagro.com/assets/067.png
    https://vandvagro.com/assets/068.png
    https://vandvagro.com/assets/069.png
    https://vandvagro.com/assets/070.png
    https://vandvagro.com/assets/071.png
    https://vandvagro.com/assets/072.png
    https://vandvagro.com/assets/073.png
    https://vandvagro.com/assets/074.png
    https://vandvagro.com/assets/075.png
    https://vandvagro.com/assets/076.png
    https://vandvagro.com/assets/077.png
    https://vandvagro.com/assets/078.png
    https://vandvagro.com/assets/079.png
    https://vandvagro.com/assets/080.png
    https://vandvagro.com/assets/081.png
    https://vandvagro.com/assets/082.png
    https://vandvagro.com/assets/083.png
    https://vandvagro.com/assets/084.png
    https://vandvagro.com/assets/085.png
    https://vandvagro.com/assets/086.png
    https://vandvagro.com/assets/087.png
    https://vandvagro.com/assets/088.png
    https://vandvagro.com/assets/089.png
    https://vandvagro.com/assets/090.png
    https://vandvagro.com/assets/091.png
    https://vandvagro.com/assets/092.png
    https://vandvagro.com/assets/093.png
    https://vandvagro.com/assets/094.png
    https://vandvagro.com/assets/095.png
    https://vandvagro.com/assets/096.png
    https://vandvagro.com/assets/097.png
    https://vandvagro.com/assets/098.png
    https://vandvagro.com/assets/099.png
    https://vandvagro.com/assets/100.png
    https://vandvagro.com/assets/101.png
    https://vandvagro.com/assets/102.png
    https://vandvagro.com/assets/103.png
    https://vandvagro.com/assets/104.png
    https://vandvagro.com/assets/105.png
    https://vandvagro.com/assets/106.png
    https://vandvagro.com/assets/107.png
    https://vandvagro.com/assets/108.png
    https://vandvagro.com/assets/109.png
    https://vandvagro.com/assets/110.png
    https://vandvagro.com/assets/111.png
    https://vandvagro.com/assets/112.png
    https://vandvagro.com/assets/113.png
    https://vandvagro.com/assets/114.png
    https://vandvagro.com/assets/115.png
    https://vandvagro.com/assets/116.png
    https://vandvagro.com/assets/117.png
    https://vandvagro.com/assets/118.png
    https://vandvagro.com/assets/119.png
    https://vandvagro.com/assets/120.png
    https://vandvagro.com/assets/121.png
    https://vandvagro.com/assets/122.png
    https://vandvagro.com/assets/123.png
    https://vandvagro.com/assets/124.png
    https://vandvagro.com/assets/125.png
    https://vandvagro.com/assets/126.png
    https://vandvagro.com/assets/127.png
    https://vandvagro.com/assets/128.png
    https://vandvagro.com/assets/129.png
    https://vandvagro.com/assets/130.png
    https://vandvagro.com/assets/131.png
    https://vandvagro.com/assets/132.png
    https://vandvagro.com/assets/133.png
    https://vandvagro.com/assets/134.png
    https://vandvagro.com/assets/135.png
    https://vandvagro.com/assets/136.png
    https://vandvagro.com/assets/137.png
    https://vandvagro.com/assets/138.png
    https://vandvagro.com/assets/139.png
    https://vandvagro.com/assets/140.png
    https://vandvagro.com/assets/141.png
    https://vandvagro.com/assets/142.png
    https://vandvagro.com/assets/143.png
    https://vandvagro.com/assets/144.png
    https://vandvagro.com/assets/145.png
    https://vandvagro.com/assets/146.png
    https://vandvagro.com/assets/147.png
    https://vandvagro.com/assets/148.png
    https://vandvagro.com/assets/149.png
    https://vandvagro.com/assets/150.png
    https://vandvagro.com/assets/151.png
    https://vandvagro.com/assets/152.png
    https://vandvagro.com/assets/153.png
    https://vandvagro.com/assets/154.png
    https://vandvagro.com/assets/155.png
    https://vandvagro.com/assets/156.png
    https://vandvagro.com/assets/157.png
    https://vandvagro.com/assets/158.png
    https://vandvagro.com/assets/159.png
    https://vandvagro.com/assets/160.png
    https://vandvagro.com/assets/161.png
    https://vandvagro.com/assets/161.png
    https://vandvagro.com/assets/161.png
    https://vandvagro.com/assets/161.png
    https://vandvagro.com/assets/161.png
    https://vandvagro.com/assets/161.png
    https://vandvagro.com/assets/161.png
    https://vandvagro.com/assets/161.png
    https://vandvagro.com/assets/161.png
    https://vandvagro.com/assets/161.png
    https://vandvagro.com/assets/161.png
    https://vandvagro.com/assets/161.png
    https://vandvagro.com/assets/161.png
    https://vandvagro.com/assets/161.png
    https://vandvagro.com/assets/161.png
    https://vandvagro.com/assets/161.png
    https://vandvagro.com/assets/161.png
    https://vandvagro.com/assets/161.png
    https://vandvagro.com/assets/161.png`;
        return data.split("\n")[index];
    }

    const frameCount = 180;

    const images = [];
    const imageSeq = {
        frame: 0
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            trigger: "#home",
            start: "bottom bottom",
            // scroller:"#main",
            scrub: 0.5
        },
        onUpdate: render
    });

    images[0].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context)
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }


    gsap.to("#home canvas", {
        scale: 0.8,
        scrollTrigger: {
            // scroller:"#main",
            trigger: "#home",
            start: "bottom 20%",
            scrub: 0.8,
            // markers:true,
            // pin:true
        }
    })

    ScrollTrigger.create({
        // scroller:"#main",
        pin: true,
        trigger: "#home",
        start: "bottom 100%",
        // markers:true
    })


}
initialize();


// -------------------------------------------------------------------------------------------
// Overlay
function overlay() {
    var clutter;
    document.querySelectorAll("#overlay .split").forEach(function(splittext){
        clutter = "";
        splittext.textContent.split("").forEach(function(char){
            clutter += `<span>${char}</span>`;
        })
        splittext.innerHTML = clutter;
})

    gsap.to("#overlay #text span", {
        scrollTrigger: {
            trigger: "#overlay h1",
            start: "bottom 50%",
            scrub: 0.5,
            // markers: true
        },
        opacity: 0,
        stagger: 0.2,
        ease: Power3.easeInOUt
    })
    ScrollTrigger.create({
        trigger: "#overlay",
        start: "bottom 100%",
        pin: true,
        // markers:true
    })
}
overlay();

// for phone
function overlay1() {
    var clutter;
    document.querySelectorAll("#overlay1 .split").forEach(function(splittext){
        clutter = "";
        splittext.textContent.split("").forEach(function(char){
            clutter += `<span>${char}</span>`;
        })
        splittext.innerHTML = clutter;
})

    gsap.to("#overlay1 #text span", {
        scrollTrigger: {
            trigger: "#overlay1 h1",
            start: "bottom 25%",
            scrub: 0.5,
            // markers: true
        },
        opacity: 0,
        stagger: 0.2,
        ease: Power3.easeInOUt
    })
    ScrollTrigger.create({
        trigger: "#overlay1",
        start: "bottom 100%",
        pin: true,
        // markers:true
    })
}
overlay1();


//------------------------------------------------------------------------------------
// Loader

function loader(){
    document.addEventListener("readystatechange",function(){
        if(document.readyState==="complete"){
            document.querySelector("#loader").style.backgroundColor= "transparent";
            document.querySelector("#loader").style.height=0;
            document.querySelector("#loader .loader").style.scale=0;
        }
    })
}
loader();


// -----------------------------------------------------------------------------------------------
// ring
function ring(){
    gsap.to("#page1 img",{
        top:"-100%",
        scrollTrigger:{
            trigger:"#page1",
            start:"top 100%",
            end:"bottom 30%",
            scrub:2,
            // markers:true
        }
    })
}
ring();

// ------------------------------------------------------------------------------
// Nav Page
function navpage(){
    var flag=0;
    document.querySelector("#menu").addEventListener("click",function(){
        if(flag===0){
            document.querySelector("#navpage").style.height="100vh";
            document.querySelector("#menu #line1").style.transform=`rotate(-40deg) translateX(-8px)`;
            document.querySelector("#menu #line1").style.backgroundColor="black";
            document.querySelector("#menu #line2").style.transform=`rotate(40deg) translateX(-8px)`;
            document.querySelector("#menu #line2").style.backgroundColor="black";
            flag=1; 
            gsap.from("#navpage #top,#navpage #bottom",{
                y:-100,
                opacity:0,
                duration:3,
                // stagger:0.5,
            })   
        }
        else{
            document.querySelector("#navpage").style.height="0vh";
            document.querySelector("#menu #line1").style.transform=`rotate(0deg) translateX(0)`;
            document.querySelector("#menu #line1").style.backgroundColor="white";
            document.querySelector("#menu #line2").style.transform=`rotate(0deg) translateX(0)`;
            document.querySelector("#menu #line2").style.backgroundColor="white";
            flag=0;    
        }
    })
}
navpage();

gsap.to("#menu .line",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#home canvas",
        start:"bottom 10%",
        scrub:2,
        // markers:true
    },
})
gsap.to("#circle img",{
    filter:'invert(1%) contrast(50%)',
    scrollTrigger:{
        trigger:"#home canvas",
        start:"bottom 10%",
        scrub:2,
        // markers:true
    },
})




function page1() {
    var clutter;
    document.querySelectorAll(".p1h1").forEach(function(splittext){
        clutter = "";
        splittext.textContent.split("").forEach(function(char){
            clutter += `<span>${char}</span>`;
        })
        splittext.innerHTML = clutter;
})
    gsap.from("#page1 .p1h1 span", {
        scrollTrigger: {
            trigger: "#page1",
            start: "top bottom",
            end:"bottom bottom",
            scrub: 1,
            // markers: true
        },
        opacity: 0,
        stagger: 0.007,
        ease: "linear"
    })
    ScrollTrigger.create({
        trigger: "#page1",
        start: "bottom 100%",
        pin: true,
        // markers:true
    })
}
page1();




gsap.to("#page2 #right #box video",{
    scrollTrigger:{
        trigger:"#page2 #right",
        pin:true,
        // markers:true
    }
})



function page4(){
    var clutter="";
document.querySelector("#page4 h1").textContent.split("").forEach(function(char){
        clutter += `<span>${char}</span>`;
})
document.querySelector("#page4 h1").innerHTML = clutter;


gsap.from("#page4 h1 span", {
    scrollTrigger: {
        trigger: "#page4 h1",
        start: "top 70%",
        end:"top 30%",
        scrub: 0.5,
        // markers: true
    },
    opacity: 0,
    stagger: 0.2,
    ease: Power3.easeInOUt
})
ScrollTrigger.create({
    trigger: "#overlay",
    start: "bottom 100%",
    pin: true,
    // markers:true
})
}
page4();

function page5(){
    gsap.to("#page5",{
        scrollTrigger:{
            trigger:"#page5",
            pin:true,
            start:"top top",
            end:"bottom top",
            scrub:.5
        },
        scale:0.8
    })
}
page5();


