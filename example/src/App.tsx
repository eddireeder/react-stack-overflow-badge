import React from 'react'

import { StackOverflowBadge } from 'react-stack-overflow-badge'
import 'react-stack-overflow-badge/dist/index.css'

const App = () => {
  return (
    <div className='App'>
      <StackOverflowBadge id={2937831} />
      <StackOverflowBadge id={2937831} card={false} />
      <StackOverflowBadge id={2937831} logo={false} />
      <StackOverflowBadge id={2937831} card={false} logo={false} />
    </div>
  )
}

export default App
