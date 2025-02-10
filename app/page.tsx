import { DownloadButton, GlitchText } from "@/components";
import { orbitron, shareTechMono } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const projects = [
    {
      title: "Lego Collection",
      url: "/project/lego-collection",
      img: "https://res.cloudinary.com/dtzk6eano/image/upload/v1739154049/lego-collection/gnyoneug3wooo8irqlle.jpg",
      bg: "bg-cyberpunk-tqs",
      description:
        "Fotografía y edición de una colección de figuras LEGO, destacando detalles, iluminación y composición visual.",
    },
    {
      title: "Consultora Temachtli",
      url: "/project/temachtli",
      img: "https://res.cloudinary.com/dtzk6eano/image/upload/v1739155774/temachtli/mbsm8it1ccttl8wcarg5.png",
      bg: "bg-cyberpunk-ylw",
      description:
        "Proyecto de branding y diseño visual para Consultora Temachtli, enfocada en identidad y presencia digital.",
    },
    {
      title: "Twitch Collection",
      url: "/project/twich-collection",
      img: "https://res.cloudinary.com/dtzk6eano/image/upload/v1739157978/twich-collection/cgnd5hbqu7cnt5yv4ayz.jpg",
      bg: "bg-cyberpunk-ble",
      description:
        "Creación de contenido gráfico y edición de imágenes para una colección temática de Twitch.",
    },
  ];
  return (
    <div className="wide-parent min-h-screen">
      <main className="section relative">
        <section className="mt-24 flex flex-col items-center md:flex-row">
          <div className="w-3/5 flex flex-col bg-opacity-10">
            <span
              className={`text-4xl text-center font-bold opacity-65 ${orbitron.className}`}
            >
              Arquitecto de Contenido Digital
            </span>
            <span className="text-center text-8xl mt-8">
              Ian
              <br />
              De Nova
            </span>
            <p className="md:w-3/4 mx-auto text-sm mt-16 border-l-4 pl-2 border-cyberpunk-tqs">
              Licenciado en Comunicación con un enfoque en edición de foto y
              video. Transformo ideas en contenido visual poderoso, combinando
              creatividad, técnica y estrategia para contar historias.
            </p>
          </div>
          <div className=" flex items-center justify-center overflow-hidden rounded-full border w-80 h-80 border-b-4 border-t-2 border-e-8 border-x-transparent border-b-cyberpunk-tqs border-t-cyberpunk-ble">
            <Image
              src="/eliancyberpunk.webp"
              alt="Ian Cyberpunk"
              width={300}
              height={300}
              className="w-[300px] h-[300px] rounded-full object-cover"
            ></Image>
          </div>
          <DownloadButton className="absolute"></DownloadButton>
        </section>
        <section
          className="w-full mt-24 flex justify-center pt-12"
          id="aboutme"
        >
          <Image
            src="/cyberstation.webp"
            alt="Ian Cyberpunk"
            width={300}
            height={300}
            className="w-[300px] h-[300px] rounded-full object-cover"
          ></Image>
          <div className="w-1/2 px-8 flex flex-col">
            <GlitchText
              className={`text-6xl ${shareTechMono.className} uppercase`}
            >
              Sobre mi
            </GlitchText>
            <p className="mx-auto text-sm mt-4 border-l-4 pl-2 border-cyberpunk-tqs">
              Soy una persona creativa y comprometida, con gran capacidad de
              adaptación y trabajo en equipo. Me apasiona la edición de video y
              la fotografía, donde encuentro la oportunidad de contar historias
              visuales de manera impactante. Disfruto aportar ideas innovadoras
              y siempre estoy abierto a nuevas perspectivas. Enfrento los
              desafíos con creatividad, buscando soluciones que potencien cada
              proyecto y lo lleven al siguiente nivel.
            </p>
          </div>
        </section>
        <section className="mt-24 flex flex-col items-center" id="proyects">
          <GlitchText
            className={`text-6xl ${shareTechMono.className} uppercase`}
          >
            Mis Proyectos
          </GlitchText>
          <div className="w-full flex justify-center py-16 gap-16 flex-wrap">
            <div className="w-full flex justify-center py-16 gap-16 flex-wrap">
              {projects.map(({ title, url, img, bg, description }) => {
                return (
                  <div
                    key={title}
                    className={`${bg} h-[334px] bg-opacity-30 w-60 gap-4 flex flex-col justify-between items-center py-4 rounded-lg border border-white hover:bg-opacity-75 relative group transition-all duration-500`}
                  >
                    <span className="text-cyberpunk-blk font-semibold text-xl">
                      {title}
                    </span>
                    <Image
                      src={img}
                      width={200}
                      height={200}
                      alt={title}
                      className="transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <p className="hidden font-semibold text-cyberpunk-blk text-sm px-4 text-center group-hover:block transition-all duration-500 absolute top-1/2 -translate-y-1/2">
                      {description}
                    </p>
                    <Link
                      className="text-cyberpunk-wht bg-cyberpunk-blk px-4 py-2 rounded-xl hover:bg-cyberpunk-ylw hover:text-cyberpunk-blk transition-all duration-300"
                      href={url}
                    >
                      Ver Más
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
