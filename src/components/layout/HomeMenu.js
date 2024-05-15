import Image from "next/image";
import MenuItem from "../menu/MenuItems";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
  return (
    <>
      <section className="">
        <div className="absolute left-0 right-0 w-full justify-start">
          <div className="absolute left-0 -top-[70px] text-left -z-10">
            <Image
              src={"/sallad1.png"}
              width={109}
              height={189}
              alt={"sallad"}
            />
          </div>
          <div className="absolute -top-[100px] right-0 -z-10">
            <Image
              src={"/sallad2.png"}
              width={107}
              height={195}
              alt={"sallad"}
            />
          </div>
        </div>
        <div className="text-center mb-4">
          <SectionHeaders subHeader={"Disponible"} mainHeader={"Menu"} />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <MenuItem img="/pepperoni.png"
            titulo="Pepperoni"
            desc="Una deliciosa pizza de pepperoni y una de las mas famosas"
            precio="$25k" />
          <MenuItem img="/margarita.png"
            titulo="Margarita"
            desc="Una deliciosa pizza de albahaca y mozzarella"
            precio="$20k" />
          <MenuItem img="/hawaiana.png"
            titulo="Hawaiana"
            desc="Una deliciosa pizza de piña con jamon y queso"
            precio="$20k" />
            <MenuItem img="/pollochampinon.png"
            titulo="Pollo con Champiñones"
            desc="Una deliciosa pizza de pollo con champiñones frescos"
            precio="$25k" />
            <MenuItem img="/vegetariana.png"
            titulo="Vegetariana"
            desc="Una deliciosa pizza con los vegetales mas frescos"
            precio="$20k" />
            <MenuItem img="/queso.png"
            titulo="Solo queso"
            desc="Una deliciosa pizza de solo queso para personas sencillas como tú"
            precio="$15k" />

        </div>
      </section>
    </>
  );
}
