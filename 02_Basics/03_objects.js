//const tinderUser = new object()
const tinderUser = {}

tinderUser.id ="123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);
const regularUser ={ 
    email: "some@gmail.com",
      fullname: { 
         userfullname: { 
            firstname: "Saniya",
            lastname: "Lanjewar"
       }
    }
}
console.log(regularUser.fullname.userfullname.firstname);


const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "c", 4: "d"}
const obj4 ={5: "a", 5: "b"}

//const obj3 = {obj1 , obj2}   //....object ke andr obj aa jayega same as array
//const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 ={...obj1, ...obj2}  //most use syntax
console.log(obj3);

const users = [
    { 
        id: 1,
        email: "s@gmail.com"

    },
    { 
        id: 1,
        email: "s@gmail.com"

    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));

const course ={ 
    cousrename: "Js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}
//course.courseInstruvtor.....old method
const{courseInstructor: instructor} = course
console.log(instructor);









