import Link from "next/link";
import {orbitron, shareTechMono} from '@/app/layout'
import {GlitchText, CyberButton} from "@/components";

const Header = () => (
<header className={`${shareTechMono.className} text-base wide-parent`} id="tops">
  <nav className="border px-4 py-2 flex section rounded-sm mt-4 border-cyberpunk-ylw justify-between">
    <div className={`${orbitron.className} gap-4 sm:gap-8 md:justify-between text-sm w-full flex flex-wrap justify-center`}>
      <Link href="#tops" className="w-full sm:w-auto mx-auto sm:mx-0 text-center">
        <GlitchText className="inline">Ian De Nova</GlitchText>    
      </Link>
      <Link href="/#aboutme">Sobre Mi</Link>
      <Link href="/#proyects">Proyectos</Link>
      {/* <Link href="/#contact">Contacto</Link> */}
    <Link href="/#contact" className="">
      <CyberButton>Contacto</CyberButton>    
    </Link>
    </div>

  </nav>
</header>
)
export default Header;