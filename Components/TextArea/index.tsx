import React, { useState, useEffect } from "react";

interface TextAreaProps {
  onUpdate: (json: any) => void;
}

export const TextArea: React.FC<TextAreaProps> = ({ onUpdate }) => {
  const [json, setJson] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJson(event.target.value);
  };
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    if (!isFocused) {
      onUpdate(json);
    }
  }, [isFocused, json]);

  return (
    <div>
      <textarea
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={json}
      />
    </div>
  );
};
