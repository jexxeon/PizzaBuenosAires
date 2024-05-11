"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Header() {
  const session = useSession();
  console.log(session);
  const status = session.status;
  return (
    <>
      <header className="flex items-center justify-between">
        <nav className="flex items-center gap-8 text-gray-500 font-semibold">
          <Link className="text-primary font-semibold text-2xl" href="/">
            PIZZAS BUENOS AIRES
          </Link>
          <Link href={"/"}>Home</Link>
          <Link href={""}>Menu</Link>
          <Link href={""}>Información</Link>
          <Link href={""}>Contactanos</Link>
        </nav>
        <nav className="flex items-center gap-4 text-gray-900 font-semibold">
          {status === "authenticated" && (
            <button
              onClick={() => signOut()}
              className="bg-primary rounded-full text-white px-8 py-2"
            >
              Cerrar Sesión
            </button>
          )}
          {status !== "authenticated" && (
            <>
              <Link href={"/login"}>Iniciar</Link>
              <Link
                href={"/register"}
                className="bg-primary rounded-full text-white px-8 py-2"
              >
                Registrar
              </Link>
            </>
          )}
        </nav>
      </header>
    </>
  );
}
