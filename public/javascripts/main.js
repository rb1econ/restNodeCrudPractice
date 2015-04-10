var discEdit = function(e){
	e.preventDefault();
	$('#edit-modal').modal('show');
}

var discEditSubmit = function(){};

$(document).on('click', '.editDisc', discEdit);