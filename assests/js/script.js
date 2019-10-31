//===============================adding the blur effect to the images and zoom to the text===========================

$(document).ready( ()=>{

		//selecting all the images
		let images = document.querySelectorAll("img");
		//selecting the text box which is to be hovered
		let captionContainer = document.querySelectorAll(".carousel-caption");

			//adding the event listener to the text box
			for(let i = 0; i<captionContainer.length; i++) {
				//mouse over or hovering event 
				captionContainer[i].addEventListener("mouseover", ()=> {
					for (let i = 0; i < images.length; i++){
						//zooming in the text
						captionContainer[i].style.transform = "scale(1.05)";
						//bluring the images
						images[i].style.filter = "blur(5px)";

						//adding the transition effect to the filter
						images[i].style.transition = "filter 1s ease-in-out";
					}
				});
			}

			//mouse out event.. mouse leaving the container
			for(let i = 0; i<captionContainer.length; i++) {
			captionContainer[i].addEventListener("mouseleave", ()=> {
				for (let i = 0; i < images.length; i++){
					//zooming out the text
					captionContainer[i].style.transform = "";
					//removing the blur
					images[i].style.filter = "";

					//adding the transition effect to the filter
					images[i].style.transition = "filter 1s ease-in-out";
			}
		});
		}

		// ============================adding responsiveness navigation=====================================================

		// if the device is a cell phone or any other mobile device, execute the following code
		if($(window).width() < 1000) {


				//=============================responsive sub-menu================================= 
				/*===============================using jQuery=====================================*/

				$(".sideDrop").css({
					display: "none",
					height: "0",
					opacity: "0",
				});

				//adding event listener to the parent li
				$("#service").on("mouseover", ()=>{
					$("#service").css({
						height: "193px",
						borderBottom: "3px solid rgb(190, 0, 0)",
					});
					$(".sideDrop").css({
						display: "block",
						height: "30px",
						opacity: "1",
						});
				});

				$("#service").on("mouseleave", ()=>{
					$("#service").css({
						height: "40px",
						borderBottom: ""
					});
					$(".sideDrop").css({
						display: "none",
						height: "0",
						opacity: "0",
					});
				});
		}

});