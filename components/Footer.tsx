import Link from "next/link";

const Footer = () => {
  return (
    <footer className="wide-parent text-cyberpunk-wht py-8 bg-cyberpunk-blk flex justify-center mt-16">
      <div className="flex gap-8">
        <Link href="https://wa.me/+525649350721" target="_blank" className="hover:text-cyberpunk-ylw transition-colors duration-300">
          Whatsapp
        </Link>
        <a href="mailto:emmanueliandenova@hotmail.com" className="hover:text-cyberpunk-ylw transition-colors duration-300">
          emmanueliandenova@hotmail.com
        </a>
        <Link href="https://www.linkedin.com/in/emmanuel-ian-de-nova-ensuastegui-07190734b/" target="_blank" className="hover:text-cyberpunk-ylw transition-colors duration-300">
          LinkedIn
        </Link>
      </div>
    </footer>
  );
};

export default Footer;