var itemsArray = [
    {
        name:'Juice',
        price:'50',
        quantity:'3'
    },{
        name:'Cookie',
        price:'30',
        quantity:'9'
    },{
        name:'Shirt',
        price:'880',
        quantity:'1'
    },{
        name:'Pen',
        price:'100',
        quantity:'2'
    }
];

function totalPrice(){
    console.log('Name : ' + itemsArray[0].name)
    console.log('Price : ' + itemsArray[0].price)
    console.log('Quantity : ' + itemsArray[0].quantity)
    console.log('Total : ' + itemsArray[0].price * itemsArray[0].quantity)
}

var object = {
    name : 'farrukh',
    email : 'farrukh@gmail.com',
    password : '123456',
    age : '17',
    gender : 'male',
    city : 'karachi',
    country : 'pakistan',
}

function searchInObj(){

var word = prompt('Search your word in Object');

    if(object[word] == undefined){
        alert('It is Not Available')
    }else{
        alert('It is Available')
    }      
}

function constructFunc(){

function Construct(name , email , rolNo , education){
    this.name = name;
    this.email = email;
    this.rolNo = rolNo;
    this.education = education;
}
var construct1 = new Construct('iqbal' , 'iqbal@gmail.com' , '8855' , 'metric');
var construct2 = new Construct('shahrukh' , 'shahrukh@gmail.com' , '8520' , 'metric');
var construct3 = new Construct('arsal' , 'arsal@gmail.com' , '7920' , 'metric');

console.log(construct1);
console.log(construct2);
console.log(construct3);

}


function records(name , gender , address , education , profession){
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

var arr = [];
function populationCheck(){

var name = document.getElementById('name').value;
var address = document.getElementById('address').value;
var education = document.getElementById('education').value;
var profession = document.getElementById('profession').value;


var gender;
if(document.getElementById('m').checked){
    gender = 'male'
}
if(document.getElementById('f').checked){
    gender = 'female'
}
saved = new records(name , gender , address ,  education , profession)
arr.push(saved);
console.log(saved);

}