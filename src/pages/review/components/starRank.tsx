import { useTranslation } from "react-i18next";
import Title from "@/pages/detail/components/title";
import { useState } from "react";
import IconStarMarker from "@/components/icons/star/marker";
import { colors } from "@/constants/design";
import StarRate from "./starRate";

const StarRank = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState<number | null>(0.5);
  return (
    <div className="p-4 ">
      <Title text={t("common.starRank")} />
      <div className="pb-1" />
      <StarRate />
    </div>
  );
};

export default StarRank;
