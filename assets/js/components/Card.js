class Card {
    constructor(cardId, cardTitle, cardDescription){
        this.cardId = cardId;
        this.title = cardTitle ;
        this.description = cardDescription;

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
        cardDivTitle.innerText = this.title;
        cardBody.appendChild(cardDivTitle);

        const cardDivDescription = document.createElement('p');
        cardDivDescription.setAttribute('class', 'card-text');
        cardDivDescription.innerText = this.description;
        cardBody.appendChild(cardDivDescription);

        const archiveButton = document.createElement('button');
        archiveButton.setAttribute('class', 'btn btn-success mb-2 mr-2');
        archiveButton.innerText = 'Archive';
        cardBody.appendChild(archiveButton);

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'btn btn-danger mb-2 mr-2');
        deleteButton.innerText = 'Delete';
        cardBody.appendChild(deleteButton);
    }
}

