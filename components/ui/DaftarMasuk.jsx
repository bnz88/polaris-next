import Link from "next/link";

const DaftarMasuk = () => {
  return (
    <div className="last:mb-0">
      <div className="flex justify-between items-center gap-4 ">
        <Link className="btn btn-secondary" href="/">
          Daftar
        </Link>
        <Link className="btn  btn-primary" href="/">
          MASUK
        </Link>
      </div>
      <div className="flex justify-between items-center gap-4">
        <Link className="btn btn-link" href="/">
          Mengapa Bonanza88?
        </Link>
        <Link className="btn btn-link" href="/">
          Lupa ID/katasandi?
        </Link>
      </div>
    </div>
  );
};

export default DaftarMasuk;
