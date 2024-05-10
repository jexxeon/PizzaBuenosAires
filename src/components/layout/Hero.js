import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <>
      <section className="hero mt-4">
        <div className="py-12">
          <h1 className="text-4xl font-semibold ">
            Todo es mejor con una <span className="text-primary">Pizza</span>
          </h1>
          <p className="my-6 text-gray-500 text-sm">
            La pizza es la pieza que falta para completar cada día, una alegría
            de vida sencilla pero deliciosa.
          </p>
          <div className="flex gap-4 text-sm">
            <button className="bg-primary  flex items-center gap-2 text-white px-4 py-2 rounded-full ">
              Ordenar Ahora
              <Right />
            </button>
            <button className="flex gap-2 py-2 text-gray-600">
              Más información
              <Right />
            </button>
          </div>
        </div>

        <div className="relative">
          <Image
            src={"/pizza.png"}
            layout={"fill"}
            objectFit={"contain"}
            alt={"pizza"}
          />
        </div>
      </section>
    </>
  );
}
