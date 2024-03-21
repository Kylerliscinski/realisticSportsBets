let bank = 100

const players = [
  {
    name: "D'Marcus Williums",
    teamNumber: 0,
    emoji: '🏃‍♂️',
    skill: 10
  },
  {
    name: "Tyroil Smoochie-Wallace",
    teamNumber: 0,
    emoji: '🤾‍♂️',
    skill: 30
  },
  {
    name: "Jackmerius Tacktheratrix",
    teamNumber: 0,
    emoji: '🏇',
    skill: 88
  },
  {
    name: "Javaris Jamar Javarison-Lamar",
    teamNumber: 0,
    emoji: '🏌️‍♀️',
    skill: 15
  },
  {
    name: "D'Pez Poopsie",
    teamNumber: 0,
    emoji: '🏋️‍♂️',
    skill: 77
  },
  {
    name: "D'Jasper Probincrux III",
    teamNumber: 0,
    emoji: '🏌️‍♂️',
    skill: 21
  },
  {
    name: "Leoz Maxwell Jilliumz",
    teamNumber: 0,
    emoji: '🤾',
    skill: 5
  },
  {
    name: "Hingle McCringleberry",
    teamNumber: 0,
    emoji: '🏂',
    skill: 99
  },
  {
    name: "L'Carpetron Dookmarriot",
    teamNumber: 0,
    emoji: '🧘‍♀️',
    skill: 50
  },
  {
    name: "Xmus Jaxon Flaxon-Waxon",
    teamNumber: 0,
    emoji: '🚶‍♀️',
    skill: 1
  },
  {
    name: "Saggitariutt Jefferspin",
    teamNumber: 0,
    emoji: '🏋️‍♀️',
    skill: 61
  },
  {
    name: "Quatro Quatro",
    teamNumber: 0,
    emoji: '🤺',
    skill: 34
  },
  {
    name: "X-Wing @Aliciousness",
    teamNumber: 0,
    emoji: '🏄',
    skill: 71
  },
  {
    name: "Bisquiteen Trisket",
    teamNumber: 0,
    emoji: '🧜‍♂️',
    skill: 76
  },
  {
    name: "Scoish Velociraptor Maloish",
    teamNumber: 0,
    emoji: '🤸',
    skill: 47
  },
  {
    name: "Donkey Teeth",
    teamNumber: 0,
    emoji: '⛹️‍♀️',
    skill: 23
  },
  {
    name: "T.J. A.J. R.J. Backslashinfourth V",
    teamNumber: 0,
    emoji: '🕴️',
    skill: 58
  },
  {
    name: "Firstname Lastname",
    teamNumber: 0,
    emoji: '💃',
    skill: 99
  },
  {
    name: "Dan Smith",
    teamNumber: 0,
    emoji: '🧍‍♂️',
    skill: 3
  },
  {
    name: "Tiger",
    teamNumber: 0,
    emoji: '🐅',
    skill: 100
  },
]


let teamOneScore = 0
let teamTwoScore = 0


function assignTeams() {
  players.forEach((player) => {
    player.teamNumber = Math.round(Math.random() + 1 * 1)
  })
  draftTeamOne()
  draftTeamTwo()
  checkSkill()
}

function draftTeamOne() {
  let playerHTML = ''
  players.forEach((player) => {
    if (player.teamNumber == 1) {
      playerHTML += `<span title="${player.name}">${player.emoji}</span>`
      const teamOne = document.getElementById('team-one')
      teamOne.innerHTML = playerHTML
    }
  })
}

function draftTeamTwo() {
  let playerHTML = ''
  players.forEach((player) => {
    if (player.teamNumber == 2) {
      playerHTML += `<span title="${player.name}">${player.emoji}</span>`
      const teamTwo = document.getElementById('team-two')
      teamTwo.innerHTML = playerHTML
    }
  })
}

let teamOneSkill = 0
let teamTwoSkill = 0
let bankHTML = ''
let bankValue = 0

function checkSkill() {
  let teamOne = players.filter((player) => player.teamNumber == 1)
  let teamTwo = players.filter((player) => player.teamNumber == 2)

  console.log(teamOne)
  console.log(teamTwo)


  for (let i = 0; i < teamOne.length; i++) {
    // console.log(i)
    teamOneSkill += teamOne[i].skill
  }
  for (let i = 0; i < teamTwo.length; i++) {
    teamTwoSkill += teamTwo[i].skill
  }
  console.log(teamOneSkill)
  console.log(teamTwoSkill)

  // betTeamOne()
  // betTeamTwo()
}

function betTeamOne() {
  if (teamOneSkill > teamTwoSkill) {
    console.log("Team 1 Up by 25");
    bankValue += 25
    bankHTML += 25
    const bankElm = document.getElementById('bank')
    bankElm.innerHTML = bankHTML
    window.alert("You won!")
  } else {
    console.log("Team 1 down by 25")
    bankValue += -25
    bankHTML += -25
    const bankElm = document.getElementById('bank')
    bankElm.innerHTML = bankHTML
    window.alert("You lost!")
  }
}

function betTeamTwo() {
  if (teamTwoSkill > teamOneSkill) {
    console.log("Team 2 Up by 25");
    bankValue += 25
    bankHTML += 25
    const bankElm = document.getElementById('bank')
    bankElm.innerHTML = bankHTML
    window.alert("You won!")
  } else {
    console.log("Team 2 down by 25")
    bankValue += -25
    bankHTML += -25
    const bankElm = document.getElementById('bank')
    bankElm.innerHTML = bankHTML
    window.alert("You lost!")
  }
}

function drawBank() {

}