import { useRouter } from "next/router";
import Image from "next/image";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const Home: React.FC = () => {
  const router = useRouter();
  const { height } = useWindowDimensions();
  setTimeout(() => {
    router.push("/auth/login"); // /는 스플래쉬 페이지로 활용
  }, 3000);

  return (
    <div
      className="flex items-center justify-center"
      style={{ height: height }}
    >
      <Image src={"/img/favicon.svg"} alt="logo" width={120} height={120} />
    </div>
  );
};

export default Home;
