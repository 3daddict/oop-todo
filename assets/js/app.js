document.addEventListener("DOMContentLoaded", function() {
  new GetDate().createTodaysDate();
  // formValidation()
  loadLocalList();
});

//Global variables
const toDoArr = [];

//boostrap 4 form validation
function formValidation() {
  const forms = document.getElementsByClassName("needs-validation");

  let validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener(
      "submit",
      function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
}

//Create todo item from form submittion
function submitForm() {
  const formTitle = document.querySelector("#formTitle").value;
  const formDesc = document.querySelector("#formDesc").value;
  let timestamp = new GenerateId().createUniqueId();
  new Card(timestamp, formTitle, formDesc);
  document.getElementById("listInput").reset();
}

//Read todo list from localStorage
function loadLocalList() {
    let storedList = JSON.parse(localStorage.getItem("localList"));
		if (localStorage.getItem("localList") !== null) {
			var loadedList = JSON.parse(localStorage.getItem("localList"));
			loadedList.forEach(key => {
                new Card(key.id, key.title, key.description);
                if(key.archive === true) {
                    console.log('THISID:', key.id);
                    document.getElementById(`${key.id}`).classList.add('archive');
                    localStorage.setItem("localList", JSON.stringify(storedList));
                }
            });
            console.log('Local:', JSON.parse(localStorage.getItem("localList")));
        }
        
}

//Update items in the list
function updateItem(event) {
  let selectedId = event.currentTarget.parentNode.parentNode.parentNode.id;
  let storedList = JSON.parse(localStorage.getItem("localList"));
  let selectedElement = event.target;
  let selectedValue = selectedElement.textContent;
  let selectedAttribute = selectedElement.getAttribute("class");

  //parse through localStorage and find index number of item with selectedId
  let foundIndex = storedList.findIndex(
    storedItem => storedItem.id === selectedId
  );
  //conditional selector with list item to update
  if (selectedAttribute === "card-title") {
    storedList[foundIndex].title = selectedValue;
    localStorage.setItem("localList", JSON.stringify(storedList));
  }
  if (selectedAttribute === "card-text") {
    storedList[foundIndex].description = selectedValue;
    localStorage.setItem("localList", JSON.stringify(storedList));
  }
}

//Delete items in the list
function deleteItem(event) {
  let selectedParent = event.currentTarget.parentNode.parentNode.parentNode.parentNode;
  let selectedId = event.currentTarget.parentNode.parentNode.parentNode.parentNode.id;
  let storedList = JSON.parse(localStorage.getItem("localList"));

  selectedParent.classList.add('fall-effect');

  setTimeout(function(){
  //remove element from dom by id
  document.getElementById(selectedId).remove();
  //parse through localStorage and find index number of item with selectedId
  let foundIndex = storedList.findIndex(
    storedItem => storedItem.id === selectedId
  );
  //remove the item with the foundIndex from localStorage
  storedList.splice(foundIndex, 1);
  //set updated data to localStorage
  localStorage.setItem("localList", JSON.stringify(storedList));
  }, 1000);
}

function archiveCard(event) {
    let selectedParent = event.currentTarget.parentNode.parentNode.parentNode.parentNode;
    let selectedId = event.currentTarget.parentNode.parentNode.parentNode.parentNode.id;
    let storedList = JSON.parse(localStorage.getItem("localList"));

      //parse through localStorage and find index number of item with selectedId
    let foundIndex = storedList.findIndex(
        storedItem => storedItem.id === selectedId
    );
    //toggle archive to true
    storedList[foundIndex].archive = true;
    //push to end of the array
    storedList.push(storedList.splice(foundIndex, 1)[0]);
    localStorage.setItem("localList", JSON.stringify(storedList));
    //add scss class
    selectedParent.classList.add('archive');
    location.reload();
}
