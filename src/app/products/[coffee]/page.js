import "@/style/coffeePage/style.scss";
import Navbar from "@/app/components/nav";
import Player from "@/app/components/player";
import Footer from "@/app/components/footer";
import CoffeeHeader from "../components/header";
import CoffeeInfos from "../components/coffee";
import CoffeeTable from "../components/table";

export async function generateStaticParams() {
  return [
    { coffee: "CoffeEarth" },
    { coffee: "Venusian-Velvet-Smoothie" },
    { coffee: "Mercurial-Mist-Tea" },
    { coffee: "Saturnian-Spice-Latte" },
    { coffee: "Marsian-Mocha-Bliss" },
  ];
}
export const dynamicParams = false;

const getData = async (params) => {
  if(!process.env.NEXT_PRODUCTION_URL){
    return
  }
  const res = await fetch(`${process.env.NEXT_PRODUCTION_URL}/api/${params.coffee}`);
  const data = await res.json();

  return data;
};

export default async function page({ params }) {
  const coffee = await getData(params);
  const { id, name, description, lactose, cold, glutem, imgs, nutricionalTable } = coffee

  return (
    <>
      <Navbar />
      <Player />
      <CoffeeHeader title={name} lactose={lactose} cold={cold} glutem={glutem} />
      <CoffeeInfos description={description} imgs={imgs} />
      <CoffeeTable nutricionalTableData={nutricionalTable} />
      <Footer />
    </>
  );
}
