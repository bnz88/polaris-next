import Image from "next/image";
import Link from "next/link";

const Sosmed = () => {
  return (
    <div className="grid grid-cols-6 gap-2">
      <Link
        href="/"
        className="p-1 bg-[#1e235a] rounded-sm text-center flex justify-center"
      >
        <Image
          className=""
          alt="Follow us on Whatsapp"
          src="/assets/logo-followus-wa.png"
          width="40"
          height="40"
        ></Image>
      </Link>
      <Link
        href="/"
        className="p-1 bg-[#1e235a] rounded-sm text-center flex justify-center"
      >
        <Image
          className=""
          alt="Follow us on Telegram"
          src="/assets/logo-followus-tg.png"
          width="40"
          height="40"
        ></Image>
      </Link>
      <Link
        href="/"
        className="p-1 bg-[#1e235a] rounded-sm text-center flex justify-center"
      >
        <Image
          className=""
          alt="Follow us on Instagram"
          src="/assets/logo-followus-ig.png"
          width="40"
          height="40"
        ></Image>
      </Link>
      <Link
        href="/"
        className="p-1 bg-[#1e235a] rounded-sm text-center flex justify-center"
      >
        <Image
          className=""
          alt="Follow us on Facebook"
          src="/assets/logo-followus-fb.png"
          width="40"
          height="40"
        ></Image>
      </Link>
      <Link
        href="/"
        className="p-1 bg-[#1e235a] rounded-sm text-center flex justify-center"
      >
        <Image
          className=""
          alt="Follow us on Youtube"
          src="/assets/logo-followus-yt.png"
          width="40"
          height="40"
        ></Image>
      </Link>

      <Link
        href="/"
        className="p-1 bg-[#1e235a] rounded-sm text-center flex justify-center"
      >
        <Image
          className=""
          alt="Follow us on Thread"
          src="/assets/logo-followus-th.png"
          width="40"
          height="40"
        ></Image>
      </Link>
    </div>
  );
};

export default Sosmed;
