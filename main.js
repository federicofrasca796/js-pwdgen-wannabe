//Ask info
const userName = prompt("Hey you! Want to try some new stuff? Type your name then.");
const userSurname = prompt("I need your last name too. Come on...");
const userFavColor = prompt("Wait, where are you going? Tell me your favourite color!");

// check output
console.log('Your crappy password is:' + userName + userSurname + userFavColor + '21')
//return crappy password
document.getElementById('pwd').innerHTML = `Your crappy password is: ${userName}${userSurname}${userFavColor}21 `