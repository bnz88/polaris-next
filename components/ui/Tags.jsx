import Link from "next/link";

const Tags = () => {
  return (
    <div className="p-3 bg-[#191e46] rounded-sm ">
      <div className="text-white uppercase mb-2">Tags</div>
      <div className="*:rounded-sm *:text-yellow-300 *:p-1 *:px-2 *:border-1 *:border-amber-300 *:inline-block *:mr-2 *:mb-2">
        <Link href="/">Berita Kasino</Link>
        <Link href="/">Cara Bermain</Link>
        <Link href="/">Promosi</Link>
        <Link href="/">Bermain Aman</Link>
        <Link href="/">Review</Link>
        <Link href="/">Analisa Olahraga</Link>
        <Link href="/">Game Terbaru</Link>
      </div>
    </div>
  );
};

export default Tags;
