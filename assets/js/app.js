document.addEventListener("DOMContentLoaded", function(){
	//Create todays date
	const newDate = new GetDate().createTodaysDate();
	//Validate Form
    formValidation();
	const newCard = new Card(100, 'My First OOP Element!!!', 'Finally I have created an element using OOP and inserted it on the DOM!!!').createCard();
	
});

function formValidation() {
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');

    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
}