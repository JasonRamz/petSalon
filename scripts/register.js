//object literal
let salon = {
    name:"The Fashion Pet",
    phone:"55-55-5-5-",
    address:{
        street:"12 & imperial",
        zip:"20025",
        Number:"504",
    },
    pets:[]
}
//constructor 
function Pet(n,a,b,s,g){
    this.name=n;
    this.age=a;
    this.breed=b;
    this.service=s;
    this.gender=g;

}
//inputs
const inputName = document.getElementById("txtName");
const inputAge = document.getElementById("txtAge");
const inputBreed = document.getElementById("txtBreed");
const inputService = document.getElementById("txtService");
const inputGender = document.getElementById("txtGender");
//validation
function isValid(aPet){
    let validation=true;
    inputName.classList.remove("alert-error");
    inputService.classList.remove("alert-error");
    inputBreed.classList.remove("alert-error");
    inputAge.classList.remove("alert-error");
    inputGender.classList.remove("alert-error");


    if(aPet.name==""){
        validation=false;
        alert("Please add a pet name");
    }
    if(aPet.age==""){
        validation=false;
        alert("Please add a pet age");
    }
    if(aPet.breed==""){
        validation=false;
        alert("Please add a pet breed");
    }
    if(aPet.service==""){
        validation=false;
        alert("Please add a pet service");
    }
    if(aPet.gender==""){
        validation=false;
        alert("Please add a pet gender");
    }
    if(aPet.name==""){
        validation=false;
        inputName.classList.add("alert-error");
        inputAge.classList.add("alert-error");
        inputGender.classList.add("alert-error");
        inputBreed.classList.add("alert-error");
        inputService.classList.add("alert-error");
    }
    return validation;
}

function register(){
    //get the values from the html 
    let newPet = new Pet(inputName.value,inputAge.value,inputBreed.value,inputService.value,inputGender.value);
    
    if(isValid(newPet)==true){//validation if is valid 
        salon.pets.push(newPet);//adding to the array
        displayCards();
        clearInput();
    };
}
function clearInput(){
    inputName.value="";
    inputAge.value="";
    inputBreed.value="";
    inputService.value="";
    inputGender.value="";
}

function init(){
    let pet1 = new Pet("Scooby",60,"Dabe","Grooming","Male");
    let pet2 = new Pet("chompy",25,"chihuahua","Haircut","Female");
    let pet3 = new Pet("cookie",5,"dalmatian","NailClipping","Male");
    salon.pets.push(pet1,pet2,pet3);//adding to the array
    displayCards();
}
window.onload=init;//waiting to render the HTML first