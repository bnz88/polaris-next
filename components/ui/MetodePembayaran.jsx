import Image from "next/image";
import { isMobile } from "@/lib/utilsServer";

export async function MetodePembayaran() {
  const thisismobile = await isMobile();
  return (
    <div className="bg-[#05145a] p-4">
      <div className="uppercase mb-2">Metode Pembayaran:</div>
      {thisismobile ? (
        <Image
          src="https://p56pngklqgj5.imagehost.cloud/cdn-cgi/image/format=auto,width=366/cms/images/placeholders/img-M-banking-1-5x.png"
          height="366"
          width="211"
          className="w-full"
          alt="Metode Pembayaran"
        ></Image>
      ) : (
        <Image
          src="https://p56pngklqgj5.imagehost.cloud/cdn-cgi/image/format=auto,height=251/cms/images/placeholders/logo-desktop-all-bank-1-5x.png"
          height="100"
          width="924"
          className="w-full"
          alt="Metode Pembayaran"
        ></Image>
      )}
    </div>
  );
}

export default MetodePembayaran;
