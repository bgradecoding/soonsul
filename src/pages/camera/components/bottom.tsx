import IconShot from "@/components/icons/shot";
import IconImage from "@/components/icons/image";
import IconHistory from "@/components/icons/history";

const CameraBottom: React.FC = () => {
  return (
    <>
      <div className="fixed bottom-0 flex justify-between items-center w-full h-[88px] bg-white">
        <div className="flex justify-center pl-4">
          <IconImage width={32} height={32} />
        </div>
        <div className="flex items-center justify-center">
          <IconShot width={48} height={48} />
        </div>
        <div className="pr-4 cursor-pointer ">
          <IconHistory width={32} height={32} />
        </div>
      </div>
    </>
  );
};

export default CameraBottom;
