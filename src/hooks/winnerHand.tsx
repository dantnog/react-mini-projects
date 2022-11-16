export default function winnerHand(user: string, bot: string) {
  if (user === 'rock') {
    if (bot === 'botPaper') return 'lose'
    else if (bot === 'botScissors') return 'win'
  } 
  else if (user === 'paper') {
    if (bot === 'botScissors') return 'lose'
    else if (bot === 'botRock') return 'win'
  }
  else if (user === 'scissors') {
    if (bot === 'botRock') return 'lose'
    else if (bot === 'botPaper') return 'win'
  }

  return 'tie'
}