document.querySelector(".offerbar").addEventListener("click",ShadowAnimation)
function ShadowAnimation()
{
    var ocs=document.querySelector(".offerbar").classList;
    ocs.add("attachable");
    setTimeout(function()
                 {
                    ocs.remove("attachable");
                 },100);    
}

const targetDiv = document.getElementById('targetDiv');

function slideFromLeftToRight() {
    targetDiv.style.transform = 'translateX(0%)'; /* Start from the left */
}

// Trigger the slide on page load

document.querySelector("button").addEventListener("click",addList);
function addList()
{
    document.querySelectorAll(".container2>div")[1].classList.remove("noneDisplay");
}
document.addEventListener('click', function(event) {
    if (!event.target.closest("button"))
    {
        document.querySelectorAll(".container2>div")[1].classList.add("noneDisplay");
    }
  });

  // Trigger the slide on page load



var slideIndex = 0;
carousel();

function carousel()
 {
  var i;
  var x = document.getElementsByClassName("responsive");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel,5000); 
}




// why choose zayden

var len=document.querySelectorAll("button").length;

for(let i=0;i<len;i++)
 {
                   document.querySelectorAll("button")[i+1].addEventListener("click", addDetail);
                                                       function addDetail()
                                                       {
                                                        document.querySelectorAll(".container18")[i].classList.remove('noneDisplay');
                                                       }
                                                       document.addEventListener('click', function(event) {
                                                           if (!event.target.closest("button"))
                                                           {
                                                            document.querySelectorAll(".container18")[i].classList.add('noneDisplay');
                                                           }
                                                         });
}

// ending of why choose zxayden