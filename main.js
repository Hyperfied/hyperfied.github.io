let now = Date.now()
let bday = new Date(2005, 4, 20)

let age = new Date(now).getFullYear() - bday.getFullYear();
document.getElementById("age").innerHTML = age;