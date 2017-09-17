//get text from the text box
var item = $('#shopping-list-entry').val();

//function for when the user adds a new shopping list item
//$('#js-add-item-button').click(function addAnItem(item) {

	//code that i want to apply to the item added by the user	

//};

//function for when the user clicks "delete"
$('.shopping-item-delete').click(function crossOut(event) {
	var listItem = $('.shopping-item').val();
	listItem.toggleClass('.shopping-item__checked');
	console.log('yo');
});