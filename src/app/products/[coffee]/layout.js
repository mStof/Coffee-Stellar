export async function generateMetadata({ params, searchParams }, parent) {
    const titleName = params.coffee.replace(/-/g, " ")
  
    return {
      title: titleName,
      description: `Descrição do café ${titleName} | Coffee Stellar`,
    }
  }

export default function CoffeePageLayout({ children }) {
  return <main className="main_container">{children}</main>
}