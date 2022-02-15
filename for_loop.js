const mystates = [
    "up","bihar","westbengal","uttarakhand","nepal",1256
]

// for(let i=0;i<mystates.length;++i){
//     if(typeof(mystates[i])==="string"){
//         continue;
//     }
//     console.log(mystates[i]);
// }

for(let i=0;i<=mystates.length-1;++i){
    if(typeof mystates[i]==="number"){
        continue;
    }
    console.log(mystates[i]);
}

const type = typeof mystates[mystates.length-1];
console.log(typeof type);