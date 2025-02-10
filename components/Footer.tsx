import Link from "next/link";

const Footer = () => {
  return (
    <footer className="wide-parent text-cyberpunk-wht py-8 bg-cyberpunk-blk flex justify-center mt-16">
      <div className="flex gap-8">
        <Link href="https://wa.me/+525649350721" target="_blank" className="hover:text-cyberpunk-ylw transition-colors duration-300">
          Whatsapp
        </Link>
        <Link href="https://www.indeed.com" target="_blank" className="hover:text-cyberpunk-ylw transition-colors duration-300">
          Indeed
        </Link>
        <Link href="https://www.linkedin.com/in/your-profile" target="_blank" className="hover:text-cyberpunk-ylw transition-colors duration-300">
          LinkedIn
        </Link>
      </div>
    </footer>
  );
};

export default Footer;