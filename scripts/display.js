function displayTable() {
    let tmp = "";
    //travel the pet arrays **for
    for(let i = 0; i < salon.pets.length; i++){
        let pet = salon.pets[i];
        //create the tmp string ** `<div>${} </div>`
        tmp+=`
        <tr id="${pet.id}">
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.breed}</td>
            <td>${pet.gender}</td>
            <td>${pet.service}</td>
            <td>${pet.phone}</td>
            <td>${pet.payment}</td>
            <td>
            <button onclick="deletePet(${pet.id});"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
        `;
    //insert into the html ** innerHtml
    }
    document.getElementById("table").innerHTML= tmp;
}
