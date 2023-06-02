import { useState } from "react"

export const useRandom = (initialValue = 10) => {
    
    const [randomNumber, setRandomNumber] = useState(initialValue)
    
    const getRandom = (max) => {
        setRandomNumber(Math.floor(Math.random() * max) )
    }

  return {
    randomNumber,
    getRandom
  }
}


