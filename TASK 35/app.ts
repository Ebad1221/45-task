let animal = ["cat", "dog", "horse"]

console.log("list of animal")
for(let i of animal){
    console.log(i)
}

console.log("list of animals with sentences:")

for(let i of animal){
    if(i == "cat"){
        console.log(i,"is a cute animal")
    }
    else if(i == "horse"){
        console.log(i,"is a great animal  to keep as a pet")
    }
    else{
        console.log(i,"is a loyal animal")
    }
}
console.log("Any of these animals would make a great pet or friend!")