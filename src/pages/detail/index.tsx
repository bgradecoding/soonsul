import HeaderComponent from "@/components/header";
import Intro from "./components/intro";
import Info from "./components/info";
import Prize from "./components/prize";
import Divider from "./components/divider";
import SalePlace from "./components/salePlace";
import Evaluation from "./components/evalutaion";
import ReviewContainer from "./components/reviewContainer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useGetLiquorDetail } from "@/biz/liquor";

const DetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [idDetail, setIdDetail] = useState<string>("");

  const { data, isLoading, isError } = useGetLiquorDetail(idDetail);
  //const data = { data: { name: "", ingredient: "" }, code: "" };
  useEffect(() => {
    if (id) {
      setIdDetail(id as string);
    }
  }, [id]);

  return (
    <div>
      <HeaderComponent
        title={data?.data?.name}
        share={true}
        onClick={() => router.push("/camera")}
      />
      <div className="pt-4 mt-12" />
      <Intro data={data} />
      {/*<Intro data={undefined} />*/}
      <div className="p-4">
        <Info
          category={data?.code}
          name={data?.data.name}
          ingredient={data?.data.ingredient}
        />
      </div>
      <Divider />
      <Prize prize={undefined} />
      <Divider />
      <SalePlace />
      <Divider />
      <Evaluation />
      <Divider />
      <ReviewContainer />
    </div>
  );
};

export default DetailPage;
