
let winnerArray = [];
let GoldCard = 0;
let SilverCard = 0;
let BronzeCard = 0;
function CalculateCards(contestent) {

    let realTime = contestent.Minutes * 60 + contestent.Seconds;

    let Minutes = contestent.Minutes.toString();
    let Seconds = contestent.Seconds.toString();
    if (Seconds.length < 2) Seconds = `0${Seconds}`
    if (Minutes.length < 2) Minutes = `0${Minutes}`

    if (realTime < 55) {
        GoldCard++
        console.log(`GoldTotal: ${GoldCard}`)
        console.log(`Name ${contestent.Name} has a time of ${Minutes}:${Seconds} `)
        console.log(`${contestent.Name} won a GoldCard!!!`)

    };
    if (realTime >= 55 && realTime <= 85) {
        SilverCard++
        console.log(`SilverTotal: ${SilverCard}`)
        console.log(`Name ${contestent.Name} has a time of ${Minutes}:${Seconds} `)
        console.log(`${contestent.Name} won a SilverCard***`)
    }
    if (realTime > 85 && realTime <= 120) {
        BronzeCard++
        console.log(`BronzeTotal: ${BronzeCard}`)
        console.log(`Name ${contestent.Name} has a time of ${Minutes}:${Seconds} `)
        console.log(`${contestent.Name} won a BronzeCard^^^`)
    }
    if (realTime > 120) {
        console.log(`Name ${contestent.Name} has a time of ${Minutes}:${Seconds} `)
    }
}

interval = null;
let startBTN = document.getElementById("startLoopButton");
let stopBTN = document.getElementById("stopLoopButton");

startBTN.onclick = function () {

    interval = setInterval(function () {

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }

        var contestents = [
            {
                Name: "Nick",
                Minutes: getRandomInt(15),
                Seconds: getRandomInt(59)
            },
            {
                Name: "Jack",
                Minutes: getRandomInt(15),
                Seconds: getRandomInt(59)
            },
            {
                Name: "Sofia",
                Minutes: getRandomInt(15),
                Seconds: getRandomInt(59)
            },
            {
                Name: "Viktor",
                Minutes: getRandomInt(15),
                Seconds: getRandomInt(59)
            },
        ]

        for (let i = 0; i < contestents.length; i++) {
            CalculateCards(contestents[i]);
            winnerArray.push(contestents[i])
        }
    }, 1000);
};

stopBTN.onclick = function () {
    clearInterval(interval);

    function compare(a, b) {
        if (a.Minutes * 60 + a.Seconds < b.Minutes * 60 + b.Seconds) {
            return -1;
        }
        if (a.Minutes * 60 + a.Seconds > b.Minutes * 60 + b.Seconds) {
            return 1;
        }
    }

    winnerArray.sort(compare);
    console.log(`"With ${winnerArray[0].Minutes} minutes and ${winnerArray[0].Seconds} seconds ${winnerArray[0].Name} is the winner of the day!"`)
    console.log(`"Today's prizes are ${GoldCard} Gold, ${SilverCard} Silver and ${BronzeCard} Bronze cards"`)
};





// for (let i = 0; i <= 100; i++) {

//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(i)
//         console.log("FizzBuzz")
//     } else {
//         if (i % 3 == 0) {
//             console.log(i)
//             console.log("Fizz")
//         };

//         if (i % 5 == 0) {
//             console.log(i)
//             console.log("Buzz")
//         }
//     }
// }

// regex function that returns emails without +anything alias.
// console.log( 'meti20+whatever@gmail.com'.replace(/[+].+[@]/g,'@'))


