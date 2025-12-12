import Cards from "@/components/ui/Cards";
import ArticleCard from "@/components/ui/ArticleCard";
import Tags from "@/components/ui/Tags";
import MainBanner from "@/components/widgets/mainBanner/MainBanner";

export default function Home() {
  return (
    <div>
      <MainBanner></MainBanner>

      <div className="p-3">
        <Cards header="bolatangkas">
          <ArticleCard
            imageUrl="img-livecasino3.png"
            desc="Short description that is less than 160 characters, contain proper metadata (as description) so it is indexable by Google SEO"
            type="2"
          >
            Title Of Article, Shoud be long enough to cover across two full
            lines
          </ArticleCard>
        </Cards>
      </div>

      <div className="p-3">
        <Cards header="MesinSlot">
          <ArticleCard imageUrl="img-livecasino3.png" type="1">
            Title Of Article, Shoud be long enough to cover across two full
            lines
          </ArticleCard>
          <div className="grid grid-cols-2 gap-3 mt-3">
            <ArticleCard imageUrl="img-livecasino3.png" type="3">
              Title Of Article, Shoud be long enough to cover across two full
              lines
            </ArticleCard>
            <ArticleCard imageUrl="img-livecasino3.png" type="3">
              Title Of Article, Shoud be long enough to cover across two full
              lines
            </ArticleCard>
          </div>
        </Cards>
      </div>

      <div className="p-3">
        <Cards header="olahraga">
          <div className="flex flex-col gap-3">
            <ArticleCard imageUrl="img-livecasino3.png" type="1">
              Title Of Article, Shoud be long enough to cover across two full
              lines
            </ArticleCard>
            <ArticleCard imageUrl="img-livecasino3.png" type="4">
              Title Of Article, Shoud be long enough to cover across two full
              lines
            </ArticleCard>
            <ArticleCard imageUrl="img-livecasino3.png" type="4">
              Title Of Article, Shoud be long enough to cover across two full
              lines
            </ArticleCard>
            <ArticleCard imageUrl="img-livecasino3.png" type="4">
              Title Of Article, Shoud be long enough to cover across two full
              lines
            </ArticleCard>
          </div>
        </Cards>
      </div>

      <div className="p-3">
        <Cards header="Togel">
          <ArticleCard imageUrl="img-livecasino3.png" type="1">
            Title Of Article, Shoud be long enough to cover across two full
            lines
          </ArticleCard>
        </Cards>
      </div>

      <div className="p-3">
        <Tags></Tags>
      </div>
    </div>
  );
}
