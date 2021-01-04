let variable = "zizi";
let array = ["string", variable, 6, 9, true];
console.log(array);
console.log(array.length);
array.pop();
console.log(array);
array.shift();
console.log(array);
array.push("onion", "billet");
console.log(array);
array.unshift(2, 7, 5);
console.log(array);
array.reverse();
console.log(array);

let boite = []
boite.push("objet1");
boite.push("objet2");
alert(boite);
boite.unshift("objet3");
alert(boite);
boite.push("objet4","objet5","objet6");
alert(boite);
boite.slice(0,2);
boite.push("objet7");
console.log(boite.length);
boite.slice(-1, -2);
boite.slice(0,1);
alert(boite);
