import { useState } from 'react'
import CafeInfo from '../CafeInfo/CafeInfo'
import css from './App.module.css'
import type { Vote, VoteType } from '../../types/votes'
import VoteOptions from '../VoteOptions/VoteOptions'
import VoteStats from '../VoteStats/VoteStats'

function App() {
  const [votes, onChangeState] = useState<Vote>({ good: 0, neutral: 0, bad: 0 })
function handleVote(type: VoteType) {
  const newState: Vote = { ...votes }

  if (type === 'good') {
    newState.good = votes.good + 1
  }
  if (type === 'neutral') {
    newState.neutral = votes.neutral + 1
  }
  if (type === 'bad') {
    newState.bad = votes.bad + 1
  }

  onChangeState(newState)
}
  function resetVotes() {
    onChangeState({ good: 0, neutral: 0, bad: 0 })
  }

  console.log(votes);
  const totalVotes = votes.good + votes.neutral + votes.bad
  const positiveRate = totalVotes? +((votes.good*100)/totalVotes).toFixed(2) : 0

  return (
  <div className={css.app}>
      <CafeInfo />
      <VoteOptions canReset={true} onReset={resetVotes} onVote={handleVote} />
      <VoteStats votes={ votes } totalVotes={ totalVotes } positiveRate={ positiveRate }/>
  </div>
  )
}

export default App
