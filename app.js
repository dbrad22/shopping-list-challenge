$(document).ready(function () {

//when the user hits "check"
  $(".shopping-list").on('click', '.shopping-item-toggle', function crossOut(event) {
    $(this).closest('.item-box').find('.shopping-item').toggleClass("shopping-item__checked");
  });
  
  //when the user hits "delete"
  $(".shopping-list").on('click', '.shopping-item-delete', function (event) {
    $(this).closest(".item-box").remove(); //Can't get the .remove() to apply to the new items
  });
  
  //when the user adds a new shopping list item
  $("form").submit(function(event) {
    event.preventDefault();
    var item = $('#shopping-list-entry').val();
    $("ul").append("<li class=\"item-box\"><span class=\"shopping-item\">"+item+"</span><div class=\"shopping-item-controls\"><button class=\"shopping-item-toggle\"><span class=\"button-label\">check</span></button><button class=\"shopping-item-delete\"><span class=\"button-label\">delete</span></button></div></li>");
  });

});