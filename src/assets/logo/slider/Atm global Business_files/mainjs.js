/* custom js styling*/
/*$(document).ready(function(){
document.write("Hello World!");
});*/
// var wow = new WOW(
//{
//boxClass:     'wow',      // default
//animateClass: 'animated', // default
//offset:       0,          // default
//mobile:       true,       // default
//live:         true        // default
//}
//) 
//wow.init();

$(document).ready(function(e) {
	//alert ("hello");
	var	common_height=0;$(".equal_cont .equal_column").each(function(index, element) {
      if($(this).outerHeight()>common_height)
			{
				common_height=$(this).outerHeight();
				}
    });
		
		//$(".outer .cm_height").css("min-height",common_height);
		$(".equal_cont .equal_column").outerHeight(common_height);
});




$(document).ready(function(e) {
	//alert ("hello");
	var	common_height=0;
    $(".equal_cont .equal_column2").each(function(index, element) {
      if($(this).outerHeight()>common_height)
			{
				common_height=$(this).outerHeight();
				}
    });
		
		//$(".outer .cm_height").css("min-height",common_height);
		$(".equal_cont .equal_column2").outerHeight(common_height);
  });

$(document).ready(function(e) {
	//alert ("hello");
	var	common_height=0;
    $(".equal_cont .equal_column3").each(function(index, element) {
      if($(this).outerHeight()>common_height)
			{
				common_height=$(this).outerHeight();
				}
    });
		
		//$(".outer .cm_height").css("min-height",common_height);
		$(".equal_cont .equal_column3").outerHeight(common_height);
});




$(document).ready(function(e) {
	//alert ("hello");
	var	common_height=0;
    $(".equal_tab_column").each(function(index, element) {
      if($(this).outerHeight()>common_height)
			{
				common_height=$(this).outerHeight();
				}
    });
		
		//$(".outer .cm_height").css("min-height",common_height);
		$(".equal_tab_column").outerHeight(common_height);
  });

$(document).ready(function(e) {
	//alert ("hello");
	var	common_height=0;
    $(".equal_card").each(function(index, element) {
      if($(this).outerHeight()>common_height)
			{
				common_height=$(this).outerHeight();
				}
    });
		
		//$(".outer .cm_height").css("min-height",common_height);
		$(".equal_card").outerHeight(common_height);
  });





//----**------right login box toggle----

$(document).ready(function() {
	
	var boxopn=false;
		
    $("#enquiry_btn").click(function()
	{
		
		if(boxopn==false)
		{
		//alert ("hello");
		$(".enquiry_form").animate({"left":"0"}, 500);
		$("#enquiry_btn").animate({"left":"300"}, 500);
		boxopn=true;
		   }
		else
		{
			$(".enquiry_form").animate({"left":"-300"}, 500);
			$("#enquiry_btn").animate({"left":"0"}, 500);
			boxopn=false;
			
			}
		   
		});
});



 /* $(document).ready(function()
  {
  	$(window).scroll(function()
	{

     	if ($(this).scrollTop() >0)
		{
			 $(".sina-brand img").css({"margin-bottom":"-50px","margin-top":"-5px","width":"100px"});
		 $("#myheader").addClass("shrink");
			$("#myheader").css({"position":"fixed","top":"0","left":"0","z-index":"1024"});
		}
		else
		{
			 $(".sina-brand img").css({"margin-bottom":"-10px","margin-top":"-40px","width":"110px"});
			$("#myheader").removeClass("shrink");
			$("#myheader").css({"position":"static","top":"0","left":"0"});
}
	});
});*/


  /*chating box ===*/
  $(document).ready(function() {

 // alert ("helloe");
  
  var boxopn=false;
    
    $(".chat_btn, .close_icon").click(function()
  {
    
    if(boxopn==false)
    {
    //alert ("hello");
    $(".chat_outer").animate({"bottom":"0"}, 500);
    /*$("#enquiry_btn").animate({"left":"300"}, 500);*/
    boxopn=true;
       }
    else
    {
      $(".chat_outer").animate({"bottom":"-400"}, 500);
      /*$("#enquiry_btn").animate({"left":"0"}, 500);*/
      boxopn=false;
      
      }
       
    });
});  /*chating Box End*/

 /*accordion toggle icon plus to minus*/
var acc = document.getElementsByClassName("my_accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    this.classList.toggle("acc_active");
  });
}

/*$(document).ready(function(){
  var openbox=false;
  $(".my_accordion").click(function(){
    $(".my_accordion").removeClass("acc_active");
    
    if(openbox==false){
      $(this).addClass("acc_active");
      //alert ("hello");
      openbox=true;
    }
    else{
      $(this).removeClass("acc_active");
      openbox=false
    }
    

  });
});
*/



/*******************************
* ACCORDION WITH TOGGLE ICONS
*******************************/
   $(document).ready(function(){
        // Add minus icon for collapse element which is open by default
        $(".collapse.show").each(function(){
          $(this).prev(".panel-heading").find(".fas").addClass("fa-minus").removeClass("fa-plus");
        });
        
        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function(){
          $(this).prev(".panel-heading").find(".fas").removeClass("fa-plus").addClass("fa-minus");
        }).on('hide.bs.collapse', function(){
          $(this).prev(".panel-heading").find(".fas").removeClass("fa-minus").addClass("fa-plus");
        });
    });


/*---- ------ === go bottom start ===------*/
$(document).ready(function() 
{
   /* $(window).scroll(function()
	{
		if($(this).scrollTop() >400)
		{
			$(".gotop").fadeIn();
			}
			else
			{
				$(".gotop").fadeOut();}
		});*/
//-------------------- -------------------------------to close
  $(".arrow_down_right div, #go_bottom").click(function()
  {
	  $("body,html").animate({scrollTop:280},100);
	 
	  });
  		
});


/*go top*/
$(document).ready(function() 
{
    $(window).scroll(function()
  {
    if($(this).scrollTop() >400)
    {
      $("#go_top").fadeIn();
      }
      else
      {
        $("#go_top").fadeOut();}
    });
//-------------------- -------------------------------to close
  $("#go_top").click(function()
  {
    $("body,html").animate({scrollTop:0},100);
   
    });
      
});



$(document).ready(function() {
             /* var owl = $('.owl-carousel');
              owl.owlCarousel({
                items: 4,
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 1000,
                autoplayHoverPause: true
              });
              $('.play').on('click', function() {
                owl.trigger('play.owl.autoplay', [1000])
              })
              $('.stop').on('click', function() {
                owl.trigger('stop.owl.autoplay')
              })*/

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplayTimeout: 1000,
    
    responsiveClass:true,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
});

});


jQuery(function ($) {
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    $('.nav-pills .nav-link').each(function () {
        if (this.href === path) {
            $(this).addClass('active');
        }
    });
});



var stateObject = {
    "English": {
        "Copa": ["SEM1_TP", "SEM1_TT", "SEM2_TP", "SEM2_TT"],
        "Electrician": ["SEM1_TP", "SEM1_TT", "SEM2_TP", "SEM2_TT", "SEM3_TP", "SEM3_TT", "SEM4_TP", "SEM4_TT"],
        "Fitter": ["SEM1_TP", "SEM1_TT", "SEM2_TP", "SEM2_TT", "SEM3_TP", "SEM3_TT", "SEM4_TP", "SEM4_TT"],
    },
    "Hindi": {
        "Electrician": ["SEM2_TP"]
    },
    "Tamil": {},
}
window.onload = function () {
    var countySel = document.getElementById("countySel"),
    stateSel = document.getElementById("stateSel"),
    districtSel = document.getElementById("districtSel");
    for (var country in stateObject) {
        countySel.options[countySel.options.length] = new Option(country, country);
    }
    countySel.onchange = function () {
        stateSel.length = 1; // remove all options bar first
        districtSel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done 
        for (var state in stateObject[this.value]) {
            stateSel.options[stateSel.options.length] = new Option(state, state);
        }
    }
    countySel.onchange(); // reset in case page is reloaded
    stateSel.onchange = function () {
        districtSel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done 
        var district = stateObject[countySel.value][this.value];
        for (var i = 0; i < district.length; i++) {
            districtSel.options[districtSel.options.length] = new Option(district[i], district[i]);
        }
    }
}


$(document).ready(function (e) {
    //alert("yy");
    var pname, lname, cname;
    $("select").on('change', function () {
        bname = $("#districtSel").val();
        cname = $("#stateSel").val();
        lname = $("#countySel").val();
        //alert(cname);
    });
   
    $("#search_go").click(function () {
        if ($("#districtSel").val() == bname && $("#stateSel").val() == cname && $("#countySel").val() == lname) {
            window.location.href = "/" + lname + "_" + cname + "_" + bname + ".aspx";
        }
        else {
            alert("nothing match");
        }
    });

});


/*$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});*/



/**/


