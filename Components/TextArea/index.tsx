import React, { useState, useEffect } from "react";


// #TextAreaPropsインターフェイスを定義（onUpdate()関数を持つ）
interface TextAreaProps {
  onUpdate: (json: any) => void;
}
// # TextAreaコンポーネントを定義 TextAreaPropsインターフェイスを継承し、onUpdate()関数を内部で使えるように設定
//json,isFocusedをuseStateで定義
//JSXのtextareaelementが変更されたらhandleChange()関数を実行
//textareaelementがフォーカスされたらhandleFocus()関数を実行
//textareaelementがフォーカスが外れたらhandleBlur()関数を実行
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
// # useEffect()を使って、isFocusedがfalseの時にonUpdate()関数を実行
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
