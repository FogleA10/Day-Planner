$(document).ready (function () {

	$(".saveBtn").on("click", function(){
		var text = $(this).siblings("textarea").val()
		var hour = $(this).parent().attr("id")
		console.log(text);
		//get the attribute of the id
		localStorage.setItem(hour,text);


		
	}) 
	//if (event.target.value(".textarea"))

	//}
// 1. create event listner for button click
// (event.target.value)


//     $('#button').click(function () {
//  })

 //var moment= moment().format('LL'); 

//
//
//

$('#currentDay').text(moment().format('LLL'))
//$("#currentDay").text(moment().format('ddd, MMM Do'));

function rowColor() {
	//currentTime to determine if the hour matchs for color
	var currentTime = parseInt(moment().format('H'));
	console.log('current Time: ', currentTime)
	$(".time-block").each(function(){
		var rowTime = parseInt($(this).attr("id").split("-")[1]);
		console.log("row time: ", rowTime)

		if( rowTime< currentTime){
			$(this).addClass("past")
		}
		else if(rowTime===currentTime){
			$(this).addClass("present")
		}
		else if (rowTime > currentTime) {
			$(this).addClass("future")

		};


	});


}

rowColor();





console.log(localStorage.getItem('hour-9'))
$("#hour-9 textarea").val(localStorage.getItem('hour-9'));
$("#hour-10 textarea").val(localStorage.getItem('hour-10'));
$("#hour-11 textarea").val(localStorage.getItem('hour-11'));
$("#hour-12 textarea").val(localStorage.getItem('hour-12'));
$("#hour-13 textarea").val(localStorage.getItem('hour-13'));
$("#hour-14 textarea").val(localStorage.getItem('hour-14'));
$("#hour-15 textarea").val(localStorage.getItem('hour-15'));
$("#hour-16 textarea").val(localStorage.getItem('hour-16'));
$("#hour-17 textarea").val(localStorage.getItem('hour-17'));




// function getValue() {
// 	return localStorage.getItem('textarea');  
// } // Gets the value of 'nameOfItem' and returns it
// console.log(getValue()); //'value';


//$('.date').text('${output}')



//var now = new Date();
//if (before < now) {

//}

//  const hour9 = localStorage.getItem('hour-9');
//  const hour10 = localStorage.getItem('hour-10');

//  const hour12 = localStorage.getItem('hour-12')
//  const hour13 = localStorage.getItem('hour-13');
//  const hour14 = localStorage.getItem('hour-14');
//  const hour15 = localStorage.getItem('hour-15');
//  const hour16 = localStorage.getItem('hour-16');
//  const hour17 = localStorage.getItem('hour-17');
 











// save button function for local storage
// color of the time block based on the time of day

//conditional for past present and future



});