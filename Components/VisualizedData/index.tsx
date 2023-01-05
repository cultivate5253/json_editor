import React from "react";

interface VisualizedDataProps {
  json: object | string;
}

export const VisualizedData: React.FC<VisualizedDataProps> = ({ json }) => {
  // JSONの型を判断する
  if (typeof json === "object") {
    return (
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(json).map(([key, value]) => (   // Object.entries()を使って、jsonを配列に変換
          //Object.entries()は、オブジェクトの各プロパティを、[key, value]の形式の配列に変換する

            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    return <div>{json}</div>;
  }
};
