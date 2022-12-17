let nav=document.querySelector("#navbar");
let back_top=document.querySelector(".back_top");
let download_section=document.getElementById("download_section");


window.addEventListener('scroll',function(){
    scroll_value=window.scrollY;
    if(scroll_value>150){
        nav.classList.add("sticky");
        back_top.classList.add("show");
    }else {
        nav.classList.remove("sticky");  
        back_top.classList.remove("show");  
    }


    // for download section
    if(scroll_value>9500 && scroll_value<11500 ){
        download_section.classList.add("background")
    }else  {
        download_section.classList.remove("background")  
    }
    

    

})


// back to top 
back_top.addEventListener('click',function(){
    
    scrollTo({
        top:0,
    })
})


//Banner Slider 
$(function(){
    $('.slider_items').slick({
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        arrows:false,
        dots:true,
        infinite:true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              }
            },
            {
              breakpoint:576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode:false,
              }
            }
            
          ]
    });
});

//Companies slider 
$(function(){
    $('.companies_slider_items').slick({
        slidesToShow:5,
        slidesToScroll:1,
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        infinite:true,
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              }
            },  
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              }
            },
            {
              breakpoint:576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                
              }
            }
            
          ]
    });

    // About app counter up 
    $('.counter_up').counterUp({
        time:3000,
        delay:10,
    })



    // Customer Slider 
    $('.customer_slider_items').slick({
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:1000,
        arrows:false,
        dots:true,
        infinite:true,
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              }
            }, 
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              }
            },  
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              }
            },
            {
              breakpoint:576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode:false,
              }
            }
            
          ]
    });



    //Interface Slider 
    $('.interface_slider_items').slick({
        slidesToShow:5,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:900,
        arrows:false,
        dots:true,
        infinite:true,
        centerMode:true,
        centerPadding:"",
        focusOnSelect:true,
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              }
            },
            {
              breakpoint:576,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode:false,
              }
            }
            
          ]
    })
});

//for Aos Plugin 
AOS.init();


// for typed js 

var typed = new Typed('.heading_type', {
  strings: ['manage your customers.'],
  smartBackspace: true,
  startDelay:1000,
  typeSpeed:50,
  loop:true,
  backSpeed:50,

});



// for preloader 

let preloader=document.querySelector(".preloader");

window.addEventListener('load',function(){
  
  // preloader.style='display:none;';
// setTimeout(function(){
//   preloader.style='display:none;';
//   },3000)
  setTimeout(()=>{
    preloader.style.display='none';
  },100);
});


// for mouse movement 
let cursor=document.querySelector(".cursor");
let pointer=document.querySelector(".pointer");

window.addEventListener('mousemove',(e)=>{
  // console.log("X" + e.pageX);
  // console.log("y" + e.pageY);
  // cursor.setAttribute("style","top:" + e.pageY + "px;" + "left:"+ e.pageX + "px;")
  // pointer.setAttribute("style","top:" + e.pageY + "px;" + "left:"+ e.pageX + "px;")

  cursor.setAttribute("style",`top:${e.pageY}px; left:${e.pageX}px;`)
  pointer.setAttribute("style",`top:${e.pageY}px; left:${e.pageX}px;`)

})
