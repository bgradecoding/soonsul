import Banner from "./components/banner";
import { EmblaOptionsType } from "embla-carousel-react";
import LoveLiquorWeek from "./components/loveLiquorWeek";
import LoveLiquorNow from "./components/loveLiquorNow";
import Promotion from "./components/promotion";
import Divider from "../detail/components/divider";
import useUserStore from "@/store/user";

const MainPage: React.FC = () => {
  const SLIDE_COUNT = 3;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const OPTIONS: EmblaOptionsType = {};
  const { userInfo } = useUserStore();
  console.log("userInfo main-----------", userInfo);
  return (
    <div className="pb-16">
      <Banner slides={SLIDES} options={OPTIONS} />
      <div className="pb-2" />
      <LoveLiquorWeek />
      <Divider />
      <LoveLiquorNow />
      <Divider />
      <Promotion />
    </div>
  );
};

export default MainPage;
