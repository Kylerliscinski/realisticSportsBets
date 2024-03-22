let bank = 100
let bid = 0
let biddingOnTeam = ''


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


function placeBet(amount) {
  if (amount > bank) {
    console.log('nope too rich')
    return
  }
  bank -= amount
  bid += amount
  console.log(bank)
  console.log(bid)

  drawMoney()
}

function drawMoney() {
  const bankElem = document.getElementById('bank')
  const bidElem = document.getElementById('bid')

  bankElem.innerText = `$${bank}`
  bidElem.innerText = `$${bid}`

  if (bank < 40) {
    bankElem.style.color = 'red'
  } else {
    bankElem.style.color = 'unset'
  }
}

function chooseTeam(teamName) {
  biddingOnTeam = teamName

  if (biddingOnTeam == 'teamOne') {
    document.body.style.backgroundImage = 'url()'
  } else {
    document.body.style.backgroundImage = 'url()'
  }
}

function drawStars() {
  const starMembers = players.filter(p => p.teamNumber == 0)
  let template = ''
  starMembers.forEach(p => template += `<b title="${p.name}">${p.emoji}</b>`)
  document.getElementById('rangers').innerHTML = template
}

function drawSnakes() {
  const starMembers = players.filter(p => p.teamNumber == 1)
  let template = ''
  starMembers.forEach(p => template += `<b title="${p.name}">${p.emoji}</b>`)
  document.getElementById('sparrows').innerHTML = template
}

function assignTeams() {
  players.forEach(p => p.teamNumber = Math.random() < .5 ? 0 : 1)

  //!SECTION Another way to do this ^
  // players.forEach(p => {
  //   const n = Math.random()

  //   if (n < .5) {
  //     p.teamNumber = 0
  //   } else {
  //     p.teamNumber = 1
  //   }
  // })
}

function startGame() {
  assignTeams()
  drawStars()
  drawSnakes()
}
