function uniqueName(arr){
 let uniqueName = []
 for( let i= 0; i< arr.length; i++){
    let element = arr[i]
    if(!uniqueName.includes(element)){
        uniqueName.push(element)
    }
 }
 return uniqueName
}

let nameArray= ["Nishat","Rifat", "Razu","Nishat"]


console.log(uniqueName(nameArray))

// time complexity = n2
//space complexity= n



// Object and Array
// o(n)
const myObejct ={
    name: "Nishat Ahmed",
    address: "Mohakhali",
    Age: [25,26,27]

}

//console.log(Object.keys(myObejct))
//console.log(Object.values(myObejct))
//console.log(Object.entries(myObejct))



console.log(myObejct.hasOwnProperty("name"))

let myArray = ['Milk', 'Rice','Bread','Veg']

console.log(myArray[2])
