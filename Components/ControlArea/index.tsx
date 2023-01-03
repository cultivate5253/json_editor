import React from 'react';
import { Button } from 'react-bootstrap';
import { parseJson } from './utils/json';

const ControlArea: React.FC = () => {
  return (
    <>
      <Button onClick={() => parseJson(jsonData)}>Parse JSON</Button>
      <Button onClick={() => navigator.clipboard.writeText(jsonData)}>Copy</Button>
      <Button onClick={() => setJsonData('')}>Clear</Button>
    </>
  );
};

export default ControlArea;
