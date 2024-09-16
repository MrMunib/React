// var state = {
//     name : "Munib",
//     age : 23
// }


// var copy = {...state}

// copy.age = 34;

// console.log(state)
// console.log(copy)

// This all nzam is called DESTRUCTURING ... Because we can not change the object in REACT directly so we make a real copy of it by using spread operator.




// DESTRUCTURING

// var obj = {
//     name : "Munib",
//     age : 66
// }

// var bro = {
//     name : 'blue',
//     age : 99
// }


// let { age: Munib } = obj;
// let {name} = obj; 
// let { age: Blue } = bro;


// // console.log(Munib)
// console.log(Blue)
// console.log(name)


// let arr = [12, function(){alert("Hello")}, 33]

// var [Rana ,,neela] = arr

// console.log(Rana)






// Import and Export in JS

// Components hoty hain mtlb page k parts like navbar, cards , landing page etc are all Components or parts , msla ye hai k har hissa aik aik component hai aik problem ye hai k hm har component ko seprate seprate file meri rkty hain to un ko jorny ki liye use hota hai import and Export

// Homepage - export default Home()   YA PHIR export function Home(){}

// And in the main file we will import the function like this === import Home() from "./home"











// Arrow Fucntions with Implicit Return

//function(){}
//var abcd = () => {}   // basic fat Arrow




// fat arrow func with one parameter
// var cdef = (val) => {
// console.log(val)
// }




/*

WE can remove the brackets if we have only one parameter

var adcd = param => {}
*/


// const abcd = ()=> 12;
// console.log(abcd()+ 11)



// Returning obj

// const kkmoti = ()=> ({name:"Munib", age: 12})
// console.log(kkmoti())


















// MAP -- Filter


// dono he array pr chlty hain -- or dono ka kam hai array pr kuch perform krna and aik new array return krna 


// var newArr = [1,3,5,6]

// var result = newArr.map(elem => elem*4)
// console.log(result)




// var Arr = [1,2,3,4,5,6,7,8,9,10]
// var res = Arr.map(res => res>5 ? res*2 :  res)
// console.log(res)





// map filter mei aik he frq hai =---

// map sary bndy return krna hai --- mtlb k count km nhi hoga
// filter count km krsta hai 

// For example : 
        // Aik array mei sbhi numbers jo ky 5 sy bary hein unmy 10 add kro....... (lets suppoer array ka size 12 hai )

// jb original array ka size km na krna ho waha pr MAP use hota hia 
// jb original array ka size km krna ho to FILTER use krty hein


// var arr = [1,2,3,4,5,6]
// var newArr = arr.filter(elem => elem>=5)
                                // arrow k bad jb jb true ay ga tb tb value new array mei add hoti jay age





var ls = [
{name : "Munib", gender : "Male"},
{name : "Muni", gender : "Female"},
{name : "Muee", gender : "Female"}
]

var newLs = ls.map(elem => elem.gender == "Male" ? elem : '')