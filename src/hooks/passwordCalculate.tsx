import { PasswordTipsProps } from "../types/PasswordTipsProps"

export default function passwordCalculate(password: string, tips: PasswordTipsProps[]): any {
  let increase: number[] = []
  let result = 0
  let newTips

  newTips = tips.map((item) => {
    if (item.id !== 7){ return {...item, done: false} }
    return {...item, done: true}
  })

  let number = password.match(/[\d]/g)
  let lower = password.match(/[a-z]/g)
  let upper = password.match(/[A-Z]/g)
  let special = password.match(/[\W]/g)
  let repeat = password.match(/(.)\1/g)

  if (number != null) {
     increase.push(20) 
     newTips[0].done = true
  }
  if (lower != null) {
    increase.push(20) 
     newTips[1].done = true
  }
  if (upper != null) {
    increase.push(20) 
     newTips[2].done = true
  }
  if (special != null) {
    increase.push(20) 
     newTips[3].done = true
  }
  if(password.length > 8) { 
    newTips[4].done = true
    if (password.length > 12) { 
      increase.push(20)
      newTips[5].done = true 
    } else {
      increase.push(10) 
    }
  } 
  if (repeat != null) {
    increase.push(-15)
     newTips[6].done = false
  }

  result = 0

  for (let value of increase) {
    result += value
  }

  if(result <= 0) result = 0

  return [result, newTips]   
}
