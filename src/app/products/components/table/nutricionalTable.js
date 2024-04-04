"use client";
import "@/style/coffeePage/table/table.scss";

export default function NutricionalTable({ data }) {
  const tr = [];
  for (const key in data) {
    const [name, value] = data[key];
    tr.push(
      <tr key={name}>
        <td className="table_body_cel">{name}</td>
        <td className="table_body_cel">{value}</td>
      </tr>
    );
  }
  return (
    <table className="table_nutricional">
      <thead className="table_header">
        <tr>
          <th className="table_header_cel">Dados</th>
          <th className="table_header_cel">500ml</th>
        </tr>
      </thead>
      <tbody className="table_body">{tr}</tbody>
    </table>
  );
}
