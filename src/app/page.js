import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders
          subHeader={"Nuestra historia"}
          mainHeader={"Sobre nosotros"}
        />
        <div className="max-w-md mx-auto text-gray-500 mt-4 flex flex-col gap-4">
          <p>
            En La Pizzería de Buenos Aires, llevamos más de una década sirviendo
            las pizzas más deliciosas y auténticas a nuestra comunidad. Desde
            que abrimos nuestras puertas en 2008, nos hemos comprometido a
            ofrecer ingredientes frescos y de la más alta calidad en cada una de
            nuestras creaciones culinarias.
          </p>
          <p>
            Lo que nos distingue es nuestro enfoque en la tradición italiana y
            el amor por la buena comida. Cada pizza que sale de nuestra cocina
            es una obra maestra artesanal, desde la masa perfectamente amasada
            hasta la selección cuidadosa de ingredientes frescos y sabrosos.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders subHeader={"No lo dudes!"} mainHeader={"Contactanos"} />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+573053891080"
          >
            +57 305 3891080
          </a>
        </div>
      </section>
    </>
  );
}
