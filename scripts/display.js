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

function displayTabel(){

};