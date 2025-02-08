import Link from "next/link";
import {orbitron, shareTechMono} from '@/app/layout'
import {GlitchText, CyberButton} from "@/components";

const Header = () => (
<header className={`${shareTechMono.className} text-base wide-parent`} id="tops">
  <nav className="border px-4 py-2 flex section rounded-sm mt-4 border-cyberpunk-ylw justify-between">
    <div className={`${orbitron.className} space-x-4 text-sm`}>
      <Link href="#tops">
        <GlitchText className="inline">Ian De Nova</GlitchText>    
      </Link>
      <Link href="#aboutme">Sobre Mi</Link>
      <Link href="#tops">Proyectos</Link>
      <Link href="#tops">Contacto</Link>
    </div>
    <Link href="#contact">
      <CyberButton>Contacto</CyberButton>    
    </Link>

  </nav>
</header>
)
export default Header;