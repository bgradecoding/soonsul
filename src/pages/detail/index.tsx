import HeaderComponent from "@/components/header";
import Intro from "./components/intro";
import { useRouter } from "next/router";
import { useEffect } from "react";

const DetailPage: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;
  const stringName = name as string;

  useEffect(() => {
    if (name) {
      //fetchDetail();
    }
  }, [name]);

  return (
    <div>
      <HeaderComponent
        title={stringName}
        share={true}
        onClick={() => router.push("/camera")}
      />
      <div className="pt-4 " />
      <Intro />
    </div>
  );
};

export default DetailPage;
