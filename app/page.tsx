import { DownloadButton, GlitchText } from "@/components";
import {orbitron, shareTechMono} from '@/app/layout'
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="wide-parent min-h-screen">
      <main className="section relative">
        <section className="mt-24 flex flex-col items-center md:flex-row">
          <div className="w-3/5 flex flex-col bg-opacity-10">
          <span className={`text-4xl text-center font-bold opacity-65 ${orbitron.className}`}>Arquitecto de Contenido Digital</span>  
          <span className="text-center text-8xl mt-8">
            Ian<br />De Nova
          </span>
          <p className="md:w-3/4 mx-auto text-sm mt-16 border-l-4 pl-2 border-cyberpunk-tqs">Licenciado en Comunicación con un enfoque en edición de foto y video. Transformo ideas en contenido visual poderoso, combinando creatividad, técnica y estrategia para contar historias.</p>
          </div>
          <div className=" flex items-center justify-center overflow-hidden rounded-full border w-80 h-80 border-b-4 border-t-2 border-e-8 border-x-transparent border-b-cyberpunk-tqs border-t-cyberpunk-ble">
            <Image src="/eliancyberpunk.webp" alt="Ian Cyberpunk" width={300} height={300} className="w-[300px] h-[300px] rounded-full object-cover"></Image>
          </div>
            <DownloadButton className="absolute"></DownloadButton> 
        </section>
        <section className="w-full mt-24 flex justify-center pt-12" id="aboutme">
            <Image src="/cyberstation.webp" alt="Ian Cyberpunk" width={300} height={300} className="w-[300px] h-[300px] rounded-full object-cover"></Image>
            <div className="w-1/2 px-8 flex flex-col">
              <GlitchText className={`text-6xl ${shareTechMono.className} uppercase`}>Sobre mi</GlitchText>
                 <p className="mx-auto text-sm mt-4 border-l-4 pl-2 border-cyberpunk-tqs">Soy una persona creativa y comprometida, con gran capacidad de adaptación y trabajo en equipo. Me apasiona la edición de video y la fotografía, donde encuentro la oportunidad de contar historias visuales de manera impactante. Disfruto aportar ideas innovadoras y siempre estoy abierto a nuevas perspectivas. Enfrento los desafíos con creatividad, buscando soluciones que potencien cada proyecto y lo lleven al siguiente nivel.</p>
            </div>
        </section>
        <section className="mt-24 flex flex-col items-center" id='proyects'>
          <GlitchText className={`text-6xl ${shareTechMono.className} uppercase`}> Mis Proyectos</GlitchText>
          <div className="w-full flex justify-center py-16 gap-16 flex-wrap">
            <div className="bg-cyberpunk-tqs  bg-opacity-30 w-60 gap-4 flex flex-col items-center py-4 rounded-lg border border-white hover:bg-opacity-75">
              <span className="text-cyberpunk-blk font-semibold text-xl">Lego Collection</span>
              <Image src='https://res.cloudinary.com/dtzk6eano/image/upload/v1739154049/lego-collection/gnyoneug3wooo8irqlle.jpg' width={200} height={200} alt='Lego Collection'></Image>
              <Link className="text-cyberpunk-wht bg-cyberpunk-blk px-4 py-2 rounded-xl hover:bg-cyberpunk-ylw hover:text-cyberpunk-blk" href={'/project/lego-collection'}>Ver Más</Link>
            </div>
            <div className="bg-cyberpunk-ylw  bg-opacity-30 w-60 gap-4 flex flex-col items-center justify-between py-4 rounded-lg border border-white hover:bg-opacity-75">
              <span className="text-cyberpunk-blk font-semibold text-xl">Consultora Temachtli</span>
              <Image src='https://res.cloudinary.com/dtzk6eano/image/upload/v1739155774/temachtli/mbsm8it1ccttl8wcarg5.png' width={200} height={200} alt='Lego Collection'></Image>
              <Link className="text-cyberpunk-wht bg-cyberpunk-blk px-4 py-2 rounded-xl hover:bg-cyberpunk-ylw hover:text-cyberpunk-blk" href={'/project/temachtli'}>Ver Más</Link>
            </div>
            <div className="bg-cyberpunk-ble  bg-opacity-30 w-60 gap-4 flex flex-col items-center py-4 rounded-lg border border-white hover:bg-opacity-75">
              <span className="text-cyberpunk-blk font-semibold text-xl">Lego Collection</span>
              <Image src='https://res.cloudinary.com/dtzk6eano/image/upload/v1739154049/lego-collection/gnyoneug3wooo8irqlle.jpg' width={200} height={200} alt='Lego Collection'></Image>
              <Link className="text-cyberpunk-wht bg-cyberpunk-blk px-4 py-2 rounded-xl hover:bg-cyberpunk-ylw hover:text-cyberpunk-blk" href={'/project/lego-collection'}>Ver Más</Link>
            </div>
            <div className="bg-cyberpunk-wht  bg-opacity-30 w-60 gap-4 flex flex-col items-center py-4 rounded-lg border border-white hover:bg-opacity-75">
              <span className="text-cyberpunk-blk font-semibold text-xl">Lego Collection</span>
              <Image src='https://res.cloudinary.com/dtzk6eano/image/upload/v1739154049/lego-collection/gnyoneug3wooo8irqlle.jpg' width={200} height={200} alt='Lego Collection'></Image>
              <Link className="text-cyberpunk-wht bg-cyberpunk-blk px-4 py-2 rounded-xl hover:bg-cyberpunk-ylw hover:text-cyberpunk-blk" href={'/project/lego-collection'}>Ver Más</Link>
            </div>
          </div>
           
        </section>
      </main>
    </div>
  );
}
