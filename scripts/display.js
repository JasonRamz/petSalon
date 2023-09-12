function displayCards(){
    let tmp = "";
    //travel the pet arrays **for
    for(let i = 0; i < salon.pets.length; i++){
        let pet = salon.pets[i];
        //create the tmp string ** `<div>${} </div>`
        tmp=`
        <div class="pet">
            <h6>${pet.name}</h6>
            <h6>${pet.age}</h6>
            <p>${pet.breed}</p>
            <h6>${pet.gender}</h6>
            <p>${pet.service}</p>
        </div>
        `;
    //insert into the html ** innerHtml
    document.getElementById("pets").innerHTML+= tmp;
    }
}

function displayTable() {
    // Get the table body element
    let tableBody = document.getElementById("tables");

    // Clear existing content in the table body
    tableBody.innerHTML = "";

    // Iterate over the pets array and create rows for each pet
    for (let i = 0; i < salon.pets.length; i++) {
        let pet = salon.pets[i];

        // Create a new table row
        let row = document.createElement("tr");

        // Create table data cells for each pet attribute
        let nameCell = document.createElement("td");
        nameCell.textContent = pet.name;
        row.appendChild(nameCell);

        let ageCell = document.createElement("td");
        ageCell.textContent = pet.age;
        row.appendChild(ageCell);

        let breedCell = document.createElement("td");
        breedCell.textContent = pet.breed;
        row.appendChild(breedCell);

        let genderCell = document.createElement("td");
        genderCell.textContent = pet.gender;
        row.appendChild(genderCell);

        let serviceCell = document.createElement("td");
        serviceCell.textContent = pet.service;
        row.appendChild(serviceCell);

        // Append the row to the table body
        tableBody.appendChild(row);
    }
}
