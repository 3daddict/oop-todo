document.addEventListener("DOMContentLoaded", function(){
	new GetDate().createTodaysDate();
	formValidation()
	loadLocalList()
});

//Global variables
const toDoArr = [];
let id = 100;

//boostrap 4 form validation
function formValidation() {
    const forms = document.getElementsByClassName('needs-validation');

    let validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });

}

//Form submit function
function submitForm() {
	const formTitle = document.querySelector('#formTitle').value;
	const formDesc = document.querySelector('#formDesc').value;
	new Card(id, formTitle, formDesc);
	id++
	document.getElementById("listInput").reset();

}

//Load todo list from localStorage
function loadLocalList() {
	if (localStorage.getItem('localList') !== null) {
		var loadedList = JSON.parse(localStorage.getItem('localList'));
		loadedList.forEach( (key) => {
			new Card(key.id, key.title, key.description);
		});	
	}
}
