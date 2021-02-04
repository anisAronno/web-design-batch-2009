var heading=document.getElementById('heading');
heading.innerHTML="Hello Banglaseh";
heading.Text="Hello Banglaseh";
heading.style.color="red";
heading.style.backgroundColor="blue";

// var para=document.getElementsByClassName('para');
// para[0].innerHTML="hello"


var para= document.querySelectorAll("p");

for(var i=0; i<para.length; i++){
    para[i].style.color="red";
    para[i].innerHTML="Hello World";

}






var btn=document.getElementById('btn');
var heading=document.getElementById('test')

// btn.addEventListener('mouseover', function(){
//     heading.innerHTML="I am calling"
//     heading.style.color="green"
// })

// btn.addEventListener('mouseout', function(){
//     heading.innerHTML="I am Back"
//     heading.style.color="red"
// })

// btn.addEventListener('click', function(){
//     heading.classList.add("mystyle");
// })
btn.addEventListener('mouseover', function(){
    heading.classList.remove("mystyle");
})
btn.addEventListener('mouseout', function(){
    heading.classList.add("mystyle");
})



var btn2Description=document.getElementById('para2')
var btn2=document.getElementById('btn2')

btn2.addEventListener('mouseover', function(){
    btn2Description.classList.add('DescriptionHide')
    btn2.innerHTML="Show"
})

btn2.addEventListener('mouseout', function(){
    btn2Description.classList.remove('DescriptionHide')
    btn2.innerHTML="Hide"
})
