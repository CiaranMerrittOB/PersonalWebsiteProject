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
