import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import { AppProvider } from "../components/AppContext";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Pizza Buenos Aires",
  description: "Pizzeria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="max-w-4xl mx-auto p-4">
          <AppProvider>
            <Header />
            {children}
            <footer className="border-t p-8 text-center text-gray-500 mt-16">
              &copy; 2024 Todos los derechos reservados a Pizzas Buenos Aires.
            </footer>
          </AppProvider>
        </main>
      </body>
    </html>
  );
}
