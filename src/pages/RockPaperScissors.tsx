import { useEffect, useState } from 'react'
import { GiRock, GiPaper, GiScissors, GiCrown, GiClown, GiCancel } from 'react-icons/gi'
import Button from '../components/Button'
import winnerHand from '../hooks/winnerHand'
import Container from '../layouts/Container'

export default function RockPaperScissors() {
  const [userPts, setUserPts] = useState<number>(0)
  const [userWon, setUserWon] = useState<boolean>(false)
  const [botPts, setBotPts] = useState<number>(0)
  const [botWon, setBotWon] = useState<boolean>(false)

  const buttons = ['rock', 'paper', 'scissors']
  const botButtons = ['botRock', 'botPaper', 'botScissors']


  function handleChoice(user: string) {
    const index = Math.floor(Math.random()*3)

    buttons.map(name => {
      name === user
      ? document.getElementById(name)?.classList.add('text-teal-500')
      : document.getElementById(name)?.classList.remove('text-teal-500')
    })
    botButtons.map(name => {
      name === botButtons[index]
      ? document.getElementById(name)?.classList.add('text-teal-500')
      : document.getElementById(name)?.classList.remove('text-teal-500')
    })

    const result = winnerHand(user, botButtons[index])
    result === 'tie'
    ? ( setUserWon(false), setBotWon(false) )
    : result === 'win'
      ? ( setUserWon(true), setBotWon(false), setUserPts(prev => prev + 1) )
      : ( setBotWon(true), setUserWon(false), setBotPts(prev => prev + 1) )
  }


  return (
    <Container name="ROCK PAPER SCISSORS" >
      <div className="space-y-4">
        <div className="flex justify-center">
          <h3 className="text-2xl font-semibold">
            YOU <span className="text-4xl text-amber-500">{userPts}
            </span> X <span className="text-4xl text-red-500">{botPts}
            </span> BOT
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-4 place-items-center text-7xl">
            <button id="rock" onClick={() => handleChoice('rock')}
              className="w-full rounded-lg hover:ring-4 ring-teal-500"
            ><GiRock className="m-auto" /></button>
            <button id="paper" onClick={() => handleChoice('paper')}
              className="w-full rounded-lg hover:ring-4 ring-teal-500"
            ><GiPaper className="m-auto" /></button>
            <button id="scissors" onClick={() => handleChoice('scissors')}
              className="w-full rounded-lg hover:ring-4 ring-teal-500"
            ><GiScissors className="m-auto" /></button>
        </div>

        <div className="sm:flex justify-evenly">
          <div className="flex justify-center mb-4 sm:mb-0">
            {!userWon && !botWon ? <GiCancel className="bg-gray-500 rounded-lg h-16 w-16 p-2" /> : null}
            {userWon ? <GiCrown className="bg-amber-500 rounded-lg h-16 w-16 p-2" /> : null}
            {botWon ? <GiClown className="bg-red-500 rounded-lg h-16 w-16 p-2" /> : null}
            <h3 className="ml-4 my-auto text-2xl font-semibold">
              {userWon ? "YOU WON" : botWon ? "YOU LOSE" : "NOBODY WON"}
            </h3>
          </div>
        </div>
        
        <div className="grid grid-cols-3 place-items-center text-7xl">
            <GiRock id="botRock" />
            <GiPaper id="botPaper" />
            <GiScissors id="botScissors" />
        </div>
      </div>
    </Container>
  )
}