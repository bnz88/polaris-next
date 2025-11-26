import Link from "next/link";
import Image from "next/image";

const LinkGame = ({ children, url, imageUrl, cmClass }) => {
  return (
    <Link
      href={url ? url : "/"}
      className={`${
        cmClass ? cmClass + " pl-3" : "bg-[#1e235a] p-3"
      }   capitalize text-[15px] rounded-sm flex justify-between items-center`}
    >
      {children}
      {imageUrl ? (
        <Image src={`/assets/${imageUrl}`} width="75" height="60"></Image>
      ) : null}
    </Link>
  );
};

export default LinkGame;
