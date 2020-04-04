$(document).ready(function(){

$(function () {




      function invisibleScroll (){
      document.body.style.overflow = 'hidden';
      }

      function visibleScroll (){
      document.body.style.overflow = 'visible';
      }
      /*function validate () {
            var userName = document.getElementById("userName");
            var userTelephone = document.getElementById("userTelephone");

            if(!userName.value) {
                  userName.style.border = "2px solid red"
                  return false;
            }

             if(!userTelephone.value) {
                  userTelephone.style.border = "2px solid red"
                  return false;
            }
            return true;
      }*/
      

      function add() 
      {
            $('.window_input').toggleClass('empty-list');
      }

      /*$('.window-send').on('click', function(){
            var item = $('.window_input');
            if(item.length == 0)
             {
                  $('.empty-list').show();
            }
            
      });*/

      /*$('.window-send').on('click', function() {
      	var inp1 = $('#userName');
      	var inp2 = $('#userTelephone');
      	if (inp1.length!=0 && inp2.length!=0) {
      		alert("Форма успешно отправлена!");
      	}
      	
      })*/

      

     
      $('.open-window')
            .click(function(onmousewheel){
                  $('.window-container').fadeIn(300, invisibleScroll);
                  $('.window-content').animate({
                        width:'320px',
                        height:'435px',
                       
                  },300);
            });

            $('.window-container').click(function(event){
                  if(event.target == this){
                        $(this).fadeOut(300, visibleScroll);
                  }   
            });

            $('.window-close').click(function(event){
                  if(event.target == this) {
                        $(this).fadeIn(300, visibleScroll)
                  }
            });

            /*$('.window-send').click(function(event){
                  if(event.target == this) {
                        $(this).fadeIn(1000, visibleScroll)
                  }
            });*/
            



      $('.window-close').click(function() {     
            $('.window-container').fadeOut(300);
      });

      /*$('.window-send').click(function() {     
            $('.window-container').fadeOut(1000);
      });*/

      /*function slideBack() {
            $('.cap__information').toggleClass('active');
            $('.cap__information').toggleClass('btn-padding');
            $('.cap__information').toggleClass('first');
            $('.cap__information').toggleClass('second');
      }*/
      //"якоря"
      $('a').on("click", function(e) {
           /*e.preventDefault();*/
           var href = $(this).attr('href');
           var offset = $(href).offset().top;  
           slideBack();      
           $('html, body').animate({
            scrollTop: offset,
           }, 300);

      });

     
      


     

	function changeFontColor() 
	{
		$('.cap__information').toggleClass('active');

	}

	$('.sidebar-toggle-btn').on('click', function(){
		changeFontColor();

            $('.sidebar-toggle-btn').toggleClass('sidebar-toggle-third');
            $('.sidebar-toggle-btn').toggleClass('btn-padding');
            $('.top').toggleClass('first');
            $('.down').toggleClass('second');


	});


      function slideBack() 
      {
            $('.cap__information').removeClass('active');
            
      }

      $('.link').on('click', function(){
            slideBack();
            $('.sidebar-toggle-btn').toggleClass('sidebar-toggle-third');
            $('.sidebar-toggle-btn').toggleClass('btn-padding');
            $('.top').toggleClass('first');
            $('.down').toggleClass('second');


      });

	function sidebar__arrow() 
	{
		$('.cap__information').toggleClass('active');
	}

	$('.sidebar-arrow').on('click', function(){
		sidebar__arrow();
            $('.sidebar-toggle-btn').toggleClass('sidebar-toggle-btn_invisible');
	});

	 $('.slider').slick({
      	arrows:true,
      	dots: true,    	
      	slidesToShow:1,   	
      	speed: 300,     	
      	autoplay:true,
      	autoplaySpeed:3000,  
            pauseOnFocus:true,
            pauseOnHover:true,
            pauseOnDotsHover:true,  
            variableWidth:true,
            waitForAnimate:true,
          
      	responsive: [
      	{
      		breakpoint:1127,
      		settings: {
      			slidesToShow:2,
                        slidesToScroll:1,
      		}
      	}, {
      		breakpoint: 1010,
      		settings: {
      			slidesToShow:1,
                        slidesToGo:1,
      		}
      		}
      	],
      });
      $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      	console.log(nextSlide);
      });

       $('.slider').slick('goTo',0);
	});
});



/*function openMenu() {
	document.getElementById("sidebar").classList.toggle('active');
	document.getElementById("toggle-btn").classList.toggle('hide');
}*/
