import React, { useState } from 'react'
import TextArea from './TextArea'
import ControlArea from './ControlArea'
import VisualizedData from './VisualizedData'

const App: React.FC = () => {
  const [json, setJson] = useState('')

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJson(e.target.value)
  }

  const handleClearClick = () => {
    setJson('')
  }

  return (
    <div>
      <TextArea
        json={json}
        onTextChange={handleTextChange}
      />
      <ControlArea
        onClearClick={handleClearClick}
      />
      <VisualizedData
        json={json}
      />
    </div>
  )
}

export default App