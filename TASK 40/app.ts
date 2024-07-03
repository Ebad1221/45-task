
function make_album(artist:string, title:string, tracks?:number){

const album: {artist:string, title:string, tracks?:number} = {
artist : artist,
title : title
}
if(tracks !== undefined){
 album.tracks = tracks       
}
return album
}
const album1 =make_album(`artist1`,`title1`)
console.log(album1);
const album2 =make_album(`artist2`,`title2`)
console.log(album2);
const album3 =make_album(`artist3`,`title3`,12)
console.log(album3);

