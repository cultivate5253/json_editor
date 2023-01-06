import React from "react";
import { Button } from "react-bootstrap";
import { parseJson, setJsonData } from "../../utils/json";

// #ControlAreaPropsインターフェイスを定義（onClearClick()関数を持つ）
interface ControlAreaProps {
  onClearClick: () => void;
  inputJson: string;
}

export const ControlArea: React.FC<ControlAreaProps> = ({
  onClearClick,
  inputJson,
}) => {
  return (
    <div>
      <Button onClick={() => setJsonData(parseJson(inputJson))}>
        Parse JSON
      </Button>
      <Button onClick={() => navigator.clipboard.writeText(inputJson)}>
        Copy
      </Button>
      <Button onClick={() => onClearClick()}>Clear</Button>
    </div>
  );
};
