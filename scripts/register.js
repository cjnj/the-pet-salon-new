//object literal
let petSalon = {
    name:"The Fashion Pet",
    address:{
        street:"Av. Universidad",
        number:"7250",
        zip:"22900"
    },
    hours:{
        open:"9:00 am",
        close:"8:00 pm"
    },


    pets:[] //array
    
}

//object constructor (function)
function Pet(name,age,gender,service,breed){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.service=service;
    this.breed=breed;
}

function register(){
    console.log("Registering");
    //get the values from the inputs
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputService = document.getElementById("txtService").value;
    let inputBreed = document.getElementById("txtBreed").value;

    //creating the obj
    let newPet = new Pet(inputName,inputAge,inputGender,inputService,inputBreed);

    //push the object
    petSalon.pets.push(newPet);

    // display the pets array on thr console
    console.log(petSalon.pets);
}

// creating pets using consrtuctor
let p1 = new Pet("Daffy Duck",86,"Male","Grooming","Duck")
let p2 = new Pet("Chester",77,"Male","Nail Cut","Cheeta")
let p3 = new Pet("tom",82,"Male","Vaccines","Cat")
let p4 = new Pet("jerry",74,"Male","training","Mouse")
let p5 = new Pet("tweety",73,"Male","nueter","Bird")



// pushing pets into the pets array
petSalon.pets.push(p1,p2,p3,p4,p5)

console.log(petSalon.pets)