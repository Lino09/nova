"use client";
import { FormEvent } from "react";

const Form = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = (event.target as HTMLFormElement).nombre.value;
    const message = (event.target as HTMLFormElement).mensaje.value;
    const whatsappMessage = `Hola, soy ${name}. ${message}`;
    const whatsappUrl = `https://wa.me/+525649350721?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    (event.target as HTMLFormElement).nombre.value = "";
    (event.target as HTMLFormElement).mensaje.value = "";
    window.open(whatsappUrl, "_blank");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-12 w-full md:w-1/2 border-2 p-8 rounded bg-cyberpunk-ble text-cyberpunk-white font-bold"
    >
      <label htmlFor="name" className="flex flex-col">
        <span className="">Nombre</span>
        <input
          type="text"
          name="nombre"
          id="name"
          className=" border-pink-900 bg-opacity-0 bg-white rounded outline-none ring-0 mt-2 p-2 border-y-2 "
        />
      </label>
      <label htmlFor="message" className="flex flex-col">
        <span className="">Mensaje</span>
        <textarea
          name="mensaje"
          id="message"
          className=" border-pink-900  bg-opacity-0 bg-white rounded outline-none ring-0 mt-2 p-2 border-y-2 "
        ></textarea>
      </label>
      <button
        type="submit"
        className=" bg-cyberpunk-blk text-cyberpunk-wht font-bold py-2 rounded-xl w-40 mx-auto hover:text-cyberpunk-blk transition-all duration-300 border border-cyberpunk-blk hover:bg-cyberpunk-ylw"
      >
        Enviar
      </button>
    </form>
  );
};

export default Form;
