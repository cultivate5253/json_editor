import React from "react";
import { Button } from "react-bootstrap";
import { parseJson, setJsonData } from "../../utils/json";

const jsonData = '{"key":"value"}';

interface ControlAreaProps {
  onClearClick: () => void;
}

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
