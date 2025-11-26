import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="text-center">
      <Image
        width="152"
        height="34"
        src="/assets/Logo-Bonanza88_variant11.png"
        alt="Bonanza88"
        className="inline-block"
      ></Image>
    </Link>
  );
};

export default Logo;
