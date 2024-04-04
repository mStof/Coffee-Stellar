export async function generateMetadata({ params, searchParams }, parent) {
    return {
      title: params.coffee,
      description: `Descrição do café ${params.coffee} | Coffee Stellar`,
    }
  }

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" >
      <body>{children}</body>
    </html>
  )
}