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
let x=0;
function Pet(n,a,b,s,g,p,c,sea){
    this.name=n;
    this.age=a;
    this.breed=b;
    this.service=s;
    this.gender=g;
    this.phone=p;
    this.payment=c;
    this.search=sea;
    this.id=x++;

}
//inputs
const inputName = document.getElementById("txtName");
const inputAge = document.getElementById("txtAge");
const inputBreed = document.getElementById("txtBreed");
const inputService = document.getElementById("txtService");
const inputGender = document.getElementById("txtGender");
const inputPhone = document.getElementById("txtPhone");
const inputSearch = document.getElementById("txtSearch");
const inputPayment = document.getElementById("txtPayment");
//validation
function isValid(aPet){
    let validation=true;
    inputName.classList.remove("alert-error");
    inputService.classList.remove("alert-error");
    inputBreed.classList.remove("alert-error");
    inputAge.classList.remove("alert-error");
    inputGender.classList.remove("alert-error");
    inputPhone.classList.remove("alert-error");
    inputPayment.classList.remove("alert-error");


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
    if(aPet.phone==""){
        validation=false;
        alert("Please add a pet phone");
    }
    if(aPet.name==""){
        validation=false;
        inputName.classList.add("alert-error");
        inputAge.classList.add("alert-error");
        inputGender.classList.add("alert-error");
        inputBreed.classList.add("alert-error");
        inputService.classList.add("alert-error");
        inputPhone.classList.add("alert-error");
        inputPayment.classList.add("alert-error");
    }
    return validation;
}

function register(){
    //get the values from the html 
    let newPet = new Pet(inputName.value,inputAge.value,inputBreed.value,inputService.value,inputGender.value,inputPhone.value,inputPayment.value);
    
    if(isValid(newPet)==true){//validation if is valid 
        salon.pets.push(newPet);//adding to the array
        displayTable();
        clearInput();
    };
}
function clearInput(){
    inputName.value="";
    inputAge.value="";
    inputBreed.value="";
    inputService.value="";
    inputGender.value="";
    inputPhone.value="";
    inputPayment.value="";
    inputSearch.value="";
}
function deletePet(petID){
    let deleteIndex;
    for(let i=0;i<salon.pets.length;i++){
        let pet = salon.pets[i];
        if(petID==pet.id){
            deleteIndex=i;
    }
}
    salon.pets.splice(deleteIndex,1);//remove the element from the array
    document.getElementById(petID).remove();
}
function search() {
    let inputSearchElement = document.getElementById("txtSearch");
    
    if (inputSearchElement) {
        let inputSearch = inputSearchElement.value.toLowerCase();
        console.log(inputSearch);
        
        for (let i = 0; i < salon.pets.length; i++) {
            let pet = salon.pets[i];

            if (inputSearch === pet.name.toLowerCase()) {
                document.getElementById(pet.id).classList.add("alert-search");
            } else {
                document.getElementById(pet.id).classList.remove("alert-search");
            }
        }
    }
}

function init(){
    let pet1 = new Pet("Scooby",60,"Dane","Grooming","Male","619-222-2222","credit");
    let pet2 = new Pet("chompy",25,"chihuahua","Haircut","Female","619-222-2222","cash");
    let pet3 = new Pet("cookie",5,"dalmatian","NailClipping","Male","619-222-2222","debit");
    salon.pets.push(pet1,pet2,pet3);//adding to the array
    displayTable();
}
window.onload=init;//waiting to render the HTML first