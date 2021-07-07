$("document").ready(function() {
  $("#infoBtn").click(function() {
    $(".infoPage").slideDown("slow");
    $(".projectsPage").slideUp("slow");
  });
  
  $("#projectsBtn").click(function() {
    $(".infoPage").slideUp("slow");
    $(".projectsPage").slideDown("slow");
  });
});


const root = document.documentElement;
const marqueeElementDisplayed = getComputedStyle(root).getPropertyValue("--marqueeElementsDisplayed");
const marqueeContent = document.querySelector("ul.marquee-content")


root.style.setProperty("--marqueeElements", marqueeContent.children.length);

for(let i = 0; i < marqueeElementDisplayed; i++)
{
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
