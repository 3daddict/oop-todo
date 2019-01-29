class Card {
    constructor(cardId, cardTitle, cardDescription){
        this.cardId = cardId;
        this.title = cardTitle ;
        this.description = cardDescription;
        this.pushCard(); //creates object
        this.createCard(); //creates DOM elements
    }

    pushCard() {
        toDoArr.push({
            id: this.cardId,
            title: this.title,
            description: this.description
        })
        localStorage.setItem('localList', JSON.stringify(toDoArr));
        
    }

    createCard() {
        const cardColumn = document.createElement('div');
        cardColumn.setAttribute('id', this.cardId);
        cardColumn.setAttribute('class', 'col-md-4 mb-2');
        document.getElementById('cardRow').appendChild(cardColumn);
    
        const cardContainer = document.createElement('div');
        cardContainer.setAttribute('class', 'card');
        cardColumn.appendChild(cardContainer);
    
        const cardBody = document.createElement('div');
        cardBody.setAttribute('class', 'card-body');
        cardContainer.appendChild(cardBody);
    
        const cardDivTitle = document.createElement('h5');
        cardDivTitle.setAttribute('class', 'card-title');
        cardDivTitle.setAttribute('contenteditable', 'true');
        cardDivTitle.setAttribute('onblur', 'updateItem(event)');
        cardDivTitle.innerText = this.title;
        cardBody.appendChild(cardDivTitle);
    
        const cardDivDescription = document.createElement('p');
        cardDivDescription.setAttribute('class', 'card-text');
        cardDivDescription.setAttribute('contenteditable', 'true');
        cardDivDescription.setAttribute('onblur', 'updateItem(event)');
        cardDivDescription.innerText = this.description;
        cardBody.appendChild(cardDivDescription);
    
        const archiveButton = document.createElement('button');
        archiveButton.setAttribute('class', 'btn btn-success mb-2 mr-2');
        archiveButton.innerText = 'Archive';
        cardBody.appendChild(archiveButton);
    
        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'btn btn-danger mb-2 mr-2');
        deleteButton.setAttribute('onclick', 'deleteItem(event)');
        deleteButton.innerText = 'Delete';
        cardBody.appendChild(deleteButton);
    
    }
    
}

