import React, { useState } from 'react'
import{ TextArea } from '../Components/TextArea/'
import { ControlArea } from '../Components/ControlArea'
import { VisualizedData } from '../Components/VisualizedData'


interface TextAreaProps{
  json: string;
  onTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const App: React.FC = () => {
  const [json, setJson] = useState('')

  const handleTextUpdate = (json: any) => {
    setJson(json)
  };

  const handleClearClick = () => {
    setJson('')
  }

  return (
    <div>
      <TextArea
        onUpdate={handleTextUpdate}
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