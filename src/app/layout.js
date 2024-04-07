import { Lobster, Besley } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
  variable:'--lobster-font',
});
const besley = Besley({
  weight: "400",
  subsets: ["latin"],
  variable:'--besley-font',
});

export const metadata = {
  title: {
    default: "Coffee Stellar",
    template: "%s | Coffee Stellar"
  },
  description: "Coffee Stellar home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${lobster.variable} ${besley.variable}`} >
      <body className={lobster.className}>
        {children}
        <SpeedInsights/>
      </body>
    </html>
  );
}
