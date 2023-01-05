import React from "react";
import { Button } from "react-bootstrap";
import { parseJson, setJsonData } from "../../utils/json";

const jsonData = '{"key":"value"}';
// #ControlAreaPropsインターフェイスを定義（onClearClick()関数を持つ）
interface ControlAreaProps {
  onClearClick: () => void;
}
//navigator.clipboard.writeText()を使って、jsonDataをクリップボードにコピーする
//setJsonData("")を使って、jsonDataを空にする
export const ControlArea: React.FC<ControlAreaProps> = ({ onClearClick }) => {
  return (
    <div>
      <Button onClick={() => parseJson(jsonData)}>Parse JSON</Button>
      <Button onClick={() => navigator.clipboard.writeText(jsonData)}>
        Copy
      </Button>
      <Button onClick={() => setJsonData("")}>Clear</Button>
    </div>
  );
};
