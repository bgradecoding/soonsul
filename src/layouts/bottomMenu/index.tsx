import { useRouter } from "next/router";
import IconBottomCamera from "@/components/icons/bottomCamera";
import IconSearch from "@/components/icons/search";
import IconUser from "@/components/icons/user";

export type BasicProps = {
  children: React.ReactNode;
};

const BottomMenu: React.FC<BasicProps> = ({ children }) => {
  const router = useRouter();
  return (
    <div
      data-layout="bottomMenu"
      className="w-full max-w-2xl mx-auto text-gray-900 bg-white dark:bg-gray-900 dark:text-white"
    >
      <div className=" pb-28">{children}</div>
      <div className="fixed bottom-0 left-0 right-0 flex justify-between h-20 text-lg text-center bg-white border-t-[0.5px] broder-gray2">
        <div onClick={() => router.push("/")} className="pt-3 pl-16">
          <div className="flex justify-center cursor-pointer">
            <IconSearch width={24} height={25} />
          </div>
        </div>
        <div
          onClick={() => router.push("/class/myClass")}
          className="pt-3 pr-[51.5px]"
        >
          <div className="flex justify-center cursor-pointer">
            <IconBottomCamera width={24} height={25} />
          </div>
        </div>
        <div onClick={() => router.push("/")} className="pt-3 pl-16">
          <div className="flex justify-center cursor-pointer">
            <IconUser width={24} height={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomMenu;
