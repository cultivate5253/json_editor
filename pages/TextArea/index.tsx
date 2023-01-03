import React, { useState } from 'react'

interface TextAreaProps {
onUpdate: (json: any) => void
}

export const TextArea: React.FC<TextAreaProps> = ({ onUpdate }) => {
const [json, setJson] = useState('')
const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
setJson(event.target.value)
}
// 3秒ごとにonUpdateを呼び出す
setInterval(() => {
onUpdate(json)
}, 3000)
return (
<div>
<textarea onChange={handleChange} value={json} />
</div>
)
}