async function sum(a, b){
    return a+b;
}

sum('a',2).then(a => console.log(a)).catch(e => console.log(e));