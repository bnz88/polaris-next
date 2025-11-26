import Link from "next/link";
import Image from "next/image";
import "./style.css";

const ArticleCard = ({ children, url, imageUrl, desc, type = 1 }) => {
  return (
    <Link href={url ? url : "/"} className={`article_${type}`}>
      <Image
        src={`/assets/${imageUrl}`}
        alt={children}
        width="170"
        height="96"
        className={`article_${type}_img`}
      ></Image>
      {children ? (
        <div className={`article_${type}_title`}>{children}</div>
      ) : null}
      {desc ? <div className={`article_${type}_desc`}>{desc}</div> : null}
    </Link>
  );
};

export default ArticleCard;
