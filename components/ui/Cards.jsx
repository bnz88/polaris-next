import Link from "next/link";

const Cards = ({ children, header }) => {
  return (
    <div>
      <div className="mb-2 border-b-[1px] border-[#d0b323] flex justify-between items-center">
        <div className="text-[#000] p-1 px-4 font-bold bg-[#d0b323] inline-block rounded-t-sm uppercase">
          {header}
        </div>
        <Link
          href="/"
          className="hover:underline uppercase text-[#d0b323] text-[13px] "
        >
          Lihat Semua
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Cards;
