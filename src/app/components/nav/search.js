import { TbSearch } from "react-icons/tb";
import { useState } from "react";
import Link from "next/link";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  const fetchData = async (value) => {
    if (!process.env.NEXT_PUBLIC_URL) return null;
    const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/search`).then(
      (res) => res.json()
    );

    const filterCoffees = data.filter((key) => {
      const coffeeNames = key.name.toLowerCase();
      return value && coffeeNames.includes(value.toLowerCase());
    });
    console.log(filterCoffees)
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
            key={coffee.id}
            className="result"
            href={`/products/${coffee.path}`}
            tabIndex="0"
            aria-label={`Página do ${coffee.name}`}
          >
            {coffee.name}
          </Link>
        );
      })
    );
  };

  return (
    <form
      className="search_bar_container search_bar_open"
      action={!result.length ? "" : result[0].props.href}
      id="search_bar"
      name="search_bar"
    >
      <input
        type="text"
        className="search_bar"
        placeholder="Qual café hoje?"
        value={input}
        onChange={handleSearch}
        required
      />
      <button
        type="button"
        className="btn_search_bar"
        aria-label="Pesquisar"
        title="Botão da barra de pesquisa"
      >
        <TbSearch />
      </button>
      <div className="result_container">{result}</div>
    </form>
  );
}
