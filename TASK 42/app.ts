let magician:string[] = [`harry porter`, `hermione`, `ron `,`albus`]
function make_great(magicians:string[]){
for(let i=0;i<magicians.length;i++){
  magician[i] =`the great${magicians[i]}`

}
}

function show_magicians(name:string[]){
name.forEach(element => {
    console.log(element);
    
});


}
make_great(magician);
show_magicians(magician)
 


