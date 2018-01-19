// jquery selector for the input tag
var run = $('input'); 
// jQuery call for the run variable, it uses an on() method for handling the event changes to the $('input') element.
run.on( "change", function(){

// add is a local variable that returns the value inputed into the input text-field using the val() method.
var add = $("input").val();
// val is a local variable that returns and changes the content(text) of the hyperlink $(".a") selector
var val = $(".a").text("www." + add.replace(/ /g,'')  + ask() );

// ask() is a function that prompts the end user to type in the high level domain
//  of the url that will be attarched to the word when craeting the url
function ask(){
// dnsDomain is an empty array were the high level domain for the url to be created is stored
var dnsDomain = [];
// ask is a variable that does the actual prompting
var ask = prompt( "whats the top level domain(.com/.org/.com.ng etc) of the url you want to create " );
// this is a forloop that loops through the dnsDomain looking to see if the chosen highlevel domain is stored in the array
for(var count = 0; count <= dnsDomain.length; count++){

if( ask === dnsDomain[count]){
val =  $(".a").text("www." + add + ask );
					
// this line of code is a game changer because it automatically adds the High level domain 
// the user wants to access to the dnsDomain array.					
if( ask !== dnsDomain){       
dnsDomain.push(ask);    
}							
}

}
// this line of code returns the user inputed value as the string for the ask() function.
return ask;
}
			

	
// this line of code creates a href attribute for the <a> element and gives it the value of val variable.
$("h1").children(".a").attr("href", "https://" + val.text());

});