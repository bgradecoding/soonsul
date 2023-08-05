import Banner from "./components/banner";
import { EmblaOptionsType } from "embla-carousel-react";
import LoveLiquor from "./components/loveLiquor";

const MainPage: React.FC = () => {
  const SLIDE_COUNT = 3;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const OPTIONS: EmblaOptionsType = {};
  return (
    <div>
      <Banner slides={SLIDES} options={OPTIONS} />
      <div className="pb-2" />
      <LoveLiquor />
    </div>
  );
};

export default MainPage;
