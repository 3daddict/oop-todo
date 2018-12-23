document.addEventListener("DOMContentLoaded", function(){
	//Create todays date
	new GetDate().createTodaysDate();
	//Validate Form
    formValidation();
	new Card(100, 'My First OOP Element!!!', 'Finally I have created an element using OOP and inserted it on the DOM!!!').createCard();
	new Card(200, 'Here is another one', 'OOP is awesome I cant wait to practive more').createCard();
	new Card(300, 'Take out the trash', 'Trash pickup is on wednesday and dont forget the recycling').createCard();
	new Card(300, 'Feed the pets', 'Dog feed twice daily and Fish feed once per day at 4pm').createCard();
	new Card(300, 'Vaccuum the carpets', 'Upstairs carpets 1per week and stairs once per month').createCard();
	
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