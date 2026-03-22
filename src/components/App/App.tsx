import { useState } from 'react'
import CafeInfo from '../CafeInfo/CafeInfo'
import css from './App.module.css'
import type { Votes, VoteType } from '../../types/votes'
import VoteOptions from '../VoteOptions/VoteOptions'
import VoteStats from '../VoteStats/VoteStats'
import Notification from '../Notification/Notification'

function App() {
  const [votes, onChangeState] = useState<Votes>({ good: 0, neutral: 0, bad: 0 })
function handleVote(type: VoteType) {
  const newState: Votes = { ...votes }

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
  const positiveRate = totalVotes ? Math.round((votes.good / totalVotes) * 100) : 0

  return (
  <div className={css.app}>
      <CafeInfo />
      <VoteOptions canReset={ totalVotes > 0 } onReset={resetVotes} onVote={handleVote} />
      { totalVotes ? <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate} /> : <Notification />}
  </div>
  )
}

export default App
