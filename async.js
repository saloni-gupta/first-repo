const hasPhoto=true;

var colorPhoto= new Promise ((resolve,reject)=>{
    setTimeout(()=>{
            if (hasPhoto===true){
                resolve("submit the color photo")
            }
            else{
                reject("you wont get sim")
            }
      }, 5000)
})

const addproof=colorPhoto.then((msg)=>{
        console.log(msg);
        return new Promise((resolve,reject)=>{
             resolve("submitted the address proof");
        })
    })

const activationCode= addproof.then((msg)=>{
            console.log(msg);
            return new Promise((resolve,reject)=>{
                        resolve("sim card is activated");
            })
})

activationCode.then((msg)=>{
      console.log(msg);
})
Promise.race([colorPhoto,addproof,activationCode]).then((m)=>{
        console.log(m);
}) 


/*const hasPhoto=true;
var simRegistration = async ()=>{
        const colorPhoto = new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(`photo submitted`)
            }, 3000);
        });
        const addproof = new Promise((resolve)=>{resolve(`got address proof `);});
            console.log("step 2 is verified");
        const activationCode = new Promise((resolve)=>{ resolve( `sim card activated `);});
                console.log("step 3 is verified");
              
                let response=await Promise.all([colorPhoto,addproof,activationCode])
                return response;
}   
simRegistration().then((msg)=>{console.log(msg)});*/


