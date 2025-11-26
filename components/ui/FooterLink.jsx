import Image from "next/image";
import Logo from "./Logo";
import Link from "next/link";

async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

const FooterLink = () => {
  return (
    <div className="p-7 py-5 *:mb-4 bg-[#00142d]">
      <div className="text-center *:inline-block">
        <Logo></Logo>
      </div>
      <div>
        <div className="uppercase text-[400]">Main Menu</div>
        <div className="grid grid-cols-3 gap-x-1 mb-2 *:font-light">
          <Link href="/">Home</Link>
          <Link href="/">Olahraga</Link>
          <Link href="/">Promosi</Link>
          <Link href="/">Bola Tangkas</Link>
          <Link href="/">Live Casino</Link>
          <Link href="/">Download</Link>
          <Link href="/">Mesin Slot</Link>
          <Link href="/">Pvp</Link>
        </div>
      </div>
      <div>
        <div className="uppercase text-[400] mb-2">Informasi</div>
        <div className="grid grid-cols-2 gap-x-1 *:font-light">
          <Link href="/">Tentang Kami</Link>
          <Link href="/">Konten Pihak Ketiga</Link>
          <Link href="/">Tanggung Jawab Taruhan</Link>
          <Link href="/">Kebijakan Privasi</Link>
          <Link href="/">Syarat & Ketentuan</Link>
          <Link href="/">Kebijakan Anti Curang</Link>
        </div>
      </div>
      <div>
        <div className="uppercase text-[400] mb-2">Lisensi dan Sertifikasi</div>
        <div className="flex justify-between">
          <Image
            src="/assets/first-sagayan.png"
            width="199"
            height="37"
            alt="sagayan"
          ></Image>
          <Image
            src="/assets/labs.png"
            width="110"
            height="38"
            alt="labs"
          ></Image>
        </div>
      </div>
      <div className="mt-5 font-light text-center last:mb-0">
        Hak cipta &copy;{getCurrentYear()}. Seluruh hak cipta milik Bonanza88
      </div>
    </div>
  );
};

export default FooterLink;
