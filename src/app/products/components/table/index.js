import "@/style/coffeePage/table/tableContainer.scss";
import NutricionalTable from "./nutricionalTable";

export default function CoffeeTable({ nutricionalTableData }) {
  return (
    <div className="warpper_table">
      <h2 className="table_title">Informações nutricionais</h2>
      <div className="table_container">
        <NutricionalTable data={nutricionalTableData} />
      </div>
    </div>
  );
}
