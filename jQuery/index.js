// $(document).ready(function(){
//     $("h1").css("color","red");
// }) // if we add the cdn of jquery in the head section of html we have to do this. to avoid this we have to add the cdn in the end of body section above the script tag.
// $("h1").css("color","red");
// console.log($("h1").css("color"));// to find the default value set to the property. 
// $("button");
// console.log($("h1").css("fontSize"));


// $("h1").css("font-size","5rem");
// $("button");
// how to add a class to selected elements
// $("h1").addClass("big-title");
// $("h1").removeClass("big-title");
// // to add multiple classes

// $("h1").addClass("big-title margin-50")

// // to check whether an element has a class or not 

// $("h1").hasClass("big-title");

// $("h1").text("Bye");

// $("button").text("Dont Click ME");// in jquery all the elements are chosen. if button tag is chosen it applies to all the button tags. so it is important to use classes to apply jquery for a specific element.

// // inner.HTML is equivalent to $("h1").html("<em>Hi there!</em>")
// // textContent is equivalent to $("h1").text("hello");

// $("h1").html("<em>Hello there!!</em>");


// // how to manipulate attributes in javascript using jquery
// console.log($("img").attr("src")); 
// // the above code is to get the attribute of a element 

// $("img").attr("src","images/1.png");
// // the above code is to set the value to the attribute selected 
// // two arguments set one argument get 

// //even class is an attribute so if we set some class in html tag we can get the class as attribute using the same code 
// $("h1").attr("class"); // we would get the class names given inside the tag


// $("h1").click(function (){
//     $("h1").css("color","powder blue");
// })

// $("button").click(function (){
//     $("h1").css("color","purple");
// })

// $("input").keypress(function(event){
//   console.log(event.key);
//   $("h1").text(event.key);
// })

// $("h1").on("mouseover",function(){
//     $("h1").css("color","purple");
// })

// $("button").on("click",function (){
//     $("h1").hide()
// })

// $("button").on("click",function (){
//     $("h1").show()
// })

// $("button").on("click",function (){
//     $("h1").toggle()
// })

// $("button").on("click",function (){
//     $("h1").fadeOut()
// })
// $("button").on("click",function (){
//     $("h1").fadeIn()
// })
// $("button").on("click",function (){
//     $("h1").fadeToggle()
// })

// $("button").on("click",function (){
//     $("h1").slideUp()
// })
// $("button").on("click",function (){
//     $("h1").slideDown()
// })
// $("button").on("click",function (){
//     $("h1").slideToggle()
// })


// for custom animations 
$("button").on("click",function (){
    $("h1").animate({opacity:0.5});// we can only add a css property which has numeric value as its value .
})// margin : "20%" 

$("button").on("click",function (){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
})