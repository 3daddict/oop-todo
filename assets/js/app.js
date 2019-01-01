document.addEventListener("DOMContentLoaded", function(){
	formValidation()
	new GetDate().createTodaysDate();
	// new Card(100, 'My First OOP Element!!!', 'Finally I have created an element using OOP and inserted it on the DOM!!!');
	// new Card(200, 'Here is another one', 'OOP is awesome I cant wait to practice more');
	// new Card(300, 'Take out the trash', 'Trash pickup is on wednesday and dont forget the recycling').createCard();
	// new Card(300, 'Feed the pets', 'Dog feed twice daily and Fish feed once per day at 4pm').createCard();
	// new Card(300, 'Vaccuum the carpets', 'Upstairs carpets 1per week and stairs once per month').createCard();
	// new Card(300, 'Study Code Tutorials', 'Upstairs carpets 1per week and stairs once per month').createCard();
	
});

//Global variables
const toDoArr = [];
let id = 0;

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