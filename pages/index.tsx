import React, { useState } from "react";
import { TextArea } from "../Components/TextArea/";
import { ControlArea } from "../Components/ControlArea";
import { VisualizedData } from "../Components/VisualizedData";

interface TextAreaProps {
  json: string;
  onTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const App: React.FC = () => {
  const [json, setJson] = useState("");

  const handleTextUpdate = (json: any) => {
    setJson(json);
  };

  const handleClearClick = () => {
    setJson("");
  };
  //onUpdate={handleTextUpdate}で,TextAreaのonUpdateが実行されるとhandleTextUpdate()関数が実行される
  return (
    <div>
      <TextArea onUpdate={handleTextUpdate} />
      <ControlArea onClearClick={handleClearClick} inputJson={json} />
      {/* JSON文字列が空でない場合にのみ、VisualizedDataコンポーネントを表示する */}
      {json !== "" && <VisualizedData json={json} />}
    </div>
  );
};

export default App;
