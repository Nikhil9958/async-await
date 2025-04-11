function greet(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Hello 1");
        },2000);
        
    })
}



async function hello() {
    let data = await greet(); 
    console.log(data);
    console.log("Hello 2");
}

hello();