//Прототип игры 4 начало >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function playGame() {
  const choices = ["КАМЕНЬ", "НОЖНИЦЫ", "БУМАГА"];
  function displayChoices() {
    const getPlayerChoice = prompt("").toUpperCase();
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    if (getPlayerChoice === "КАМЕНЬ" && computerChoice === "НОЖНИЦЫ") {
      console.log("Вы победили!");
    } else if (getPlayerChoice === "НОЖНИЦЫ" && computerChoice === "БУМАГА") {
      console.log("Вы победили!");
    } else if (getPlayerChoice === "БУМАГА" && computerChoice === "КАМЕНЬ") {
      console.log("Вы победили!");
    } else if (getPlayerChoice === "НОЖНИЦЫ" && computerChoice === "КАМЕНЬ") {
      console.log("победил компьютер!");
    } else if (getPlayerChoice === "БУМАГА" && computerChoice === "НОЖНИЦЫ") {
      console.log("победил компьютер!");
    } else if (getPlayerChoice === "КАМЕНЬ" && computerChoice === "БУМАГА") {
      console.log("победил компьютер!");
    } else if (getPlayerChoice === "НОЖНИЦЫ" && computerChoice === "НОЖНИЦЫ") {
      console.log("Ничья!");
    } else if (getPlayerChoice === "БУМАГА" && computerChoice === "БУМАГА") {
      console.log("Ничья!");
    } else if (getPlayerChoice === "КАМЕНЬ" && computerChoice === "КАМЕНЬ") {
      console.log("Ничья!");
    } else if (getPlayerChoice === "") {
      console.log("Выберите фигуру...");
    } else if (getPlayerChoice.length <= 8) {
      console.log("введите другое значение");
    } else if (getPlayerChoice.length > 8) {
      console.log("введите другое значение2");
    }
    return computerChoice;
  }
  return displayChoices;
}

let getGame = playGame();
console.log(getGame());
//Прототип игры 4 конец  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Добавил else if (getPlayerChoice.length < 7), также добавил раунды "Ничья" для всех фигур. 

//Прототип игры 3 начало >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function getComputerChoice() {
//   const choices = ["КАМЕНЬ", "НОЖНИЦЫ", "БУМАГА"];
//   function displayChoices() {
//     const getPlayerChoice = prompt("").toUpperCase();
//     const computerChoice = choices[Math.floor(Math.random() * choices.length)];
//     if (getPlayerChoice === "КАМЕНЬ" && computerChoice === "НОЖНИЦЫ") {
//       console.log("Вы победили!");
//     } else if (getPlayerChoice === "НОЖНИЦЫ" && computerChoice === "БУМАГА") {
//       console.log("Вы победили!");
//     } else if (getPlayerChoice === "БУМАГА" && computerChoice === "КАМЕНЬ") {
//       console.log("Вы победили!");
//     } else if (getPlayerChoice === "НОЖНИЦЫ" && computerChoice === "КАМЕНЬ") {
//       console.log("победил компьютер!");
//     } else if (getPlayerChoice === "БУМАГА" && computerChoice === "НОЖНИЦЫ") {
//       console.log("победил компьютер!");
//     } else if (getPlayerChoice === "КАМЕНЬ" && computerChoice === "БУМАГА") {
//       console.log("победил компьютер!");
//     } else if (getPlayerChoice === "") {
//       console.log("Выберите фигуру...");
//     } else {
//       console.log("Ничья!");
//     }
//     return computerChoice;
//   }
//   return displayChoices;
// }

// let getComp = getComputerChoice();
// console.log(getComp());
//Прототип игры 3 конец >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Добавил else if (getPlayerChoice === "")

//Прототип игры 2 начало >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function getComputerChoice() {
//     const choices = ["КАМЕНЬ", "НОЖНИЦЫ", "БУМАГА"];
//     function displayChoices() {
//       const getPlayerChoice = prompt("").toUpperCase();
//       const computerChoice = choices[Math.floor(Math.random() * choices.length)];
//       if (getPlayerChoice === "КАМЕНЬ" && computerChoice === "НОЖНИЦЫ") {
//         console.log("Вы победили!");
//       } else if (getPlayerChoice === "НОЖНИЦЫ" && computerChoice === "БУМАГА") {
//         console.log("Вы победили!");
//       } else if (getPlayerChoice === "БУМАГА" && computerChoice === "КАМЕНЬ") {
//         console.log("Вы победили!");
//       } else if (getPlayerChoice === "НОЖНИЦЫ" && computerChoice === "КАМЕНЬ") {
//         console.log("победил компьютер!");
//       } else if (getPlayerChoice === "БУМАГА" && computerChoice === "НОЖНИЦЫ") {
//         console.log("победил компьютер!");
//       } else if (getPlayerChoice === "КАМЕНЬ" && computerChoice === "БУМАГА") {
//         console.log("победил компьютер!");
//       } else {
//         console.log('Ничья!')
//       }
//       return computerChoice;
//     }
//     return displayChoices;
//   }

//   let getComp = getComputerChoice();
//   console.log(getComp());
//Прототип игры 2 пофиксил следующее... "пользователь вводит к примеру: "Камень", с большой буквы, то выводится последнее условие else "ничья!". Необходимо пофиксить, в любых случаях когда пользователь вводит свой выбор, между тремя фигурами, он мог бы записать их по разному(с большой буквы, с маленькой), и после этого конвертитровалось бы под общим значением, включая выбор компьютера."
//Прототип игры 2 конеч >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Прототип игры 1 Начало >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function getComputerChoice() {
//   const choices = ["камень", "ножницы", "бумага"];
//   function displayChoices() {
//     const getPlayerChoice = prompt("");
//     const computerChoice = choices[Math.floor(Math.random() * choices.length)];
//     if (getPlayerChoice === "камень" && computerChoice === "ножницы") {
//       console.log("победил getPlayer");
//     } else if (getPlayerChoice === "ножницы" && computerChoice === "бумага") {
//       console.log("победил getPlayer");
//     } else if (getPlayerChoice === "бумага" && computerChoice === "камень") {
//       console.log("победил getPlayer");
//     } else if (getPlayerChoice === "ножницы" && computerChoice === "камень") {
//       console.log("победил pc1");
//     } else if (getPlayerChoice === "бумага" && computerChoice === "ножницы") {
//       console.log("победил pc1");
//     } else if (getPlayerChoice === "камень" && computerChoice === "бумага") {
//       console.log("победил pc1");
//     } else {
//       console.log("ничья!");
//     }
//     return computerChoice;
//   }
//   return displayChoices;
// }

// let getComp = getComputerChoice();
// console.log(getComp());
//прототип 1, всё работает, до тех пор, когда пользователь вводит к примеру: "Камень", с большой буквы, то выводится последнее условие else "ничья!". Необходимо пофиксить, в любых случаях когда пользователь вводит свой выбор, между тремя фигурами, он мог бы записать их по разному(с большой буквы, с маленькой), и после этого конвертитровалось бы под общим значением, включая выбор компьютера.
//Прототип игры 1 конец >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function getComputerChoice() {
//   const choices = ["камень", "ножницы", "бумага"];
//   function displayChoices() {
//     return choices[Math.floor(Math.random() * choices.length)];
//   }
//   return displayChoices;
// }

// let getComp = getComputerChoice();
// console.log(getComp());
//пробный вариант 1 "две функции в одной"

// function getComputerChoice() {
//   const choices = ["Камень", "Бумага", "Ножницы"];
//   const randomIndex = Math.floor(Math.random() * choices.length);
//   return choices[randomIndex].toUpperCase();
// }
// // радномный выбор компьютера
// //исходный код, который подходит к функции пользователя playRound

// function playerChoice() {
//   const choices = prompt("");

//   return choices;
// }
// // выбор пользователя
// function playRound(playerSelection, computerSelection) {
//   if (playerSelection === "НОЖНИЦЫ" && computerSelection === "БУМАГА") {
//     console.log("игрок WIn! ");
//   }
//   return  playerSelection.toUpperCase();
// }

// const playerSelection = playerChoice();
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
// //розыгрышь первого раунда

//   function getPlayerChoice () {
//     let playerChoice = prompt('')
//     console.log(playerChoice)
// }

// getPlayerChoice()
//исходный код, пользователь выбирает

// function getComputerChoice (list) {
//     return list[Math.floor((Math.random()*list.length))];
// }

//   console.log(getComputerChoice(['камень', 'ножницы', 'бумага']))
// /* То есть случайным образом функция вернет либо "Камень", либо "Ножницы", либо "Бумага". Нужно использовать консоль, чтобы убедиться что функция возвращает рандомный результат! */
// исходный код компьютер выбирает

// function playRound(playerSelection, computerSelection) {

// }

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
// исходный код

/* Написать функцию которая разыгривает один раунд игры. Функция будет принимать два параметра, которые будут - playerSelection, computerSelection и затем возвращать строку, которая будет объявлять победителя или ничью в раунде: "Ты проиграл! Бумага бьёт камень" 
Также нужно сделать параметр выбора игрока, чтобы пользователь мог вводить камень, КАМЕНЬ, Камень или любой другой вариант
*/
//План
/*
1. Объявить функцию.
2. Задать этой функции два параметра
3. Сделать так чтобы она возвращала строку, кто выиграл 
4. Сделать параметр выбора игрока
*/
