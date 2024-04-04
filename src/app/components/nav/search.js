import { TbSearch } from "react-icons/tb";
import { useState } from "react";
import Link from "next/link";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  const fetchData = async (value) => {
    if(!process.env.NEXT_PRODUCTION_URL){
      return
    }
    const data = await fetch(`${process.env.NEXT_PRODUCTION_URL}/api`).then((res) =>
      res.json()
    );
    const keys = Object.keys(data);

    const filterKeys = keys.filter((key) => {
      const dataFilter = key.toLowerCase();
      console.log(value)
      return value && dataFilter.includes(value.toLowerCase());
    });
    setResult(
      filterKeys.map((key) => {
        return (
          <Link href={`/products/${key}`} className="result" key={key}>
            {data[key].name}
          </Link>
        );
      })
    );
    console.log(result);
  };
  const handleSearch = (e) => {
    setInput(e.target.value);
    fetchData(e.target.value);
  };

  return (
    <form
      className="search_bar_container search_bar_open"
      action="/products/test"
    >
      <input
        type="text"
        className="search_bar"
        placeholder="Qual café hoje?"
        value={input}
        onChange={handleSearch}
      />
      <button className="btn_search_bar">
        <TbSearch />
      </button>
      <div className="result_container">{result}</div>
    </form>
  );
}
