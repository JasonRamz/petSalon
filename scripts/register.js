//object literal
let salon = {
    name:"The Fashion Pet",
    phone:"55-55-5-5-",
    address:{
        street:"12 & imperial",
        zip:"20025",
        Number:"504",
    },
    pets:[
        {
            name:"scooby",
            age:"12",
            breed:"chiva",
            service:"grooming"
        },
        {
            name:"chango",
            age:"154",
            breed:"chihuahua",
            service:"nailclipping"
        },
        {
            name:"bulldog",
            age:"800BC",
            breed:"chihuahua",
            service:"shower"
        }
    ]
}
function displayPetName(){//create the fn
const petCountElement = document.getElementById("count");
const petListElemnt = document.getElementById("petList");
for (let i = 0; i < salon.pets.length; i++){
    const pet = salon.pets[i];
    const listItem = document.createElement("li");
    listItem.textContent = pet.name
    petListElemnt.appendChild(listItem);
}
petCountElement.textContent = salon.pets.length;
}

displayPetName();//run the fn