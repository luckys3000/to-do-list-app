function newItem() {
	//1. Adding a new item to the list
	let li = $('<li></li>');
	let inputValue = $('#input').val();
	li.append(inputValue);

	if (inputValue === '') {
		alert('You must write something!');
	} else {
		$('#list').append(li);
	}

	//2. Crossing an item out
	li.on('dblclick', function () {
		li.toggleClass('strike');
	});

	//3(i). Adding a delete button "X"
	let crossOutButton = $('<crossOutButton></crossOutButton>');
	crossOutButton.append(document.createTextNode('x'));
	li.append(crossOutButton);

	crossOutButton.on('click', function () {
		//3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css
		li.addClass('delete');
	});

	//4. Reordering the items
	$('#list').sortable();
}
