import React from "react";
import { parseJson } from "../../utils/json";

interface VisualizedDataProps {
  json: object | string;
}

export const VisualizedData: React.FC<VisualizedDataProps> = ({ json }) => {
  // inputJsonが文字列であることを確認する
  if (typeof json === "string" && json !== "") {
    // inputJsonをパースして、JSONオブジェクトを取得する
    const parsedJson = JSON.parse(json);
    // JSONの型を判断する
    if (Object.prototype.toString.call(parsedJson) === "[object Object]") {
      return (
        <table>
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(parsedJson).map(([key, value]: [string, any]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  }
  // inputJsonが空文字列やnullの場合は、特に何も表示しない
  return null;
};