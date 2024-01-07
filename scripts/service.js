let services=[];//array

//crate the contructor
function Service(description,price){
    this.description=description;
    this.price=price;
}
//crate the register function
function register(){
    console.log("adding a new service")
    
    let inputDescription = $("#txtDescription").val();
    let inputPrice = $("#txtPrice").val();

    let newService = new Service(inputDescription,inputPrice);
    services.push(newService);

    console.log(services)
}
//create the init function
function init(){
    let s1 = new Service("grooming",20);
    services.push(s1)
    //hook events
    $("#btnRegister").on('click',register);
}

//wait for render the HTML
window.onload=init;