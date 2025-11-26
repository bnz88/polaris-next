import Image from "next/image";
import Link from "next/link";
const HomeLink = () => {
  return (
    <div className="grid grid-cols-4 rounded-sm gap-3 p-3 *:text-center *:flex *:justify-end *:items-center *:flex-col **:font-bold bg-[#05145a] bg-[url('/assets/img-backgroundmotive.png')] bg-repeat">
      <Link href="/" className="*:whitespace-nowrap *:uppercase *:text-[11px]">
        <Image
          alt="Bola tangkas"
          src="/assets/icn-bolattangkas-32.png"
          width="35"
          height="35"
          sizes="100vw"
        ></Image>
        <span>Bola Tangkas</span>
      </Link>
      <Link href="/" className="*:whitespace-nowrap *:uppercase *:text-[11px]">
        <Image
          alt="Mesin Slot"
          src="/assets/icn-slotonline-24.png"
          width={35}
          height={35}
          sizes="100vw"
        ></Image>
        <span>Mesin Slot</span>
      </Link>
      <Link href="/" className="*:whitespace-nowrap *:uppercase *:text-[11px]">
        <Image
          alt="Live Casino"
          src="/assets/icn-livecasino-24.png"
          width={35}
          height={35}
          sizes="100vw"
        ></Image>
        <span>Live Casino</span>
      </Link>
      <Link href="/" className="*:whitespace-nowrap *:uppercase *:text-[11px]">
        <Image
          alt="Mesin Slot"
          src="/assets/icn-olahraga-24.png"
          width={35}
          height={35}
          sizes="100vw"
        ></Image>
        <span>Olahraga</span>
      </Link>
      <Link href="/" className="*:whitespace-nowrap *:uppercase *:text-[11px]">
        <Image
          alt="Togel"
          src="/assets/icn-togel-24.png"
          width={35}
          height={35}
          sizes="100vw"
        ></Image>
        <span>Togel</span>
      </Link>
      <Link href="/" className="*:whitespace-nowrap *:uppercase *:text-[11px]">
        <Image
          alt="Produk"
          src="/assets/icn-temporary.png"
          width={35}
          height={35}
          sizes="100vw"
        ></Image>
        <span>Produk</span>
      </Link>
      <Link href="/" className="*:whitespace-nowrap *:uppercase *:text-[11px]">
        <Image
          alt="Produk"
          src="/assets/icn-temporary.png"
          width={35}
          height={35}
          sizes="100vw"
        ></Image>
        <span>Produk</span>
      </Link>
      <Link href="/" className="*:whitespace-nowrap *:uppercase *:text-[11px]">
        <Image
          alt="Produk"
          src="/assets/icn-temporary.png"
          width={35}
          height={35}
          sizes="100vw"
        ></Image>
        <span>Produk</span>
      </Link>
    </div>
  );
};

export default HomeLink;
