async function f(){
    let res = await fetch("https://catfact.ninja/fact");
    let data = await res.json();
    console.log(data); //res.json() when used with await not returning promise
    
}

f();