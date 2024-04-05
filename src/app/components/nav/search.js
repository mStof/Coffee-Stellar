import { TbSearch } from "react-icons/tb";
import { useState } from "react";
import Link from "next/link";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  const fetchData = async (value) => {
    console.log("FetchData execting");
    if (!process.env.NEXT_PUBLIC_URL) {
      console.log("NEXT_PUBLIC_URL don't exist");
      console.log(process);
      return null;
    }
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/search`
    ).then((res) => res.json());
    console.log("Data:", data);

    const filterCoffees = data.filter((key) => {
      const coffeeNames = key.name.toLowerCase();
      return value && coffeeNames.includes(value.toLowerCase());
    });
    console.log("filterCoffees:", filterCoffees);
    return filterCoffees;
  };
  const handleSearch = async (e) => {
    setInput(e.target.value);
    const dataFilter = await fetchData(e.target.value);
    if (dataFilter === null) return;
    setResult(
      dataFilter.map((coffee) => {
        return (
          <Link
            href={`/products/${coffee.path}`}
            className="result"
            key={coffee.id}
          >
            {coffee.name}
          </Link>
        );
      })
    );
    console.log(result)
  };

  return (
    <form
      className="search_bar_container search_bar_open"
      action={!result.length ? "" : result[0].props.href}
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
