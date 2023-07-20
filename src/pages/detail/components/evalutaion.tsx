import Title from "./title";
import IconEdit from "@/components/icons/edit";
import { EVALUTIONITEMS } from "@/constants/biz";

const Evaluation: React.FC = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between pb-4">
        <Title text={"평가"} />
        <IconEdit />
      </div>
      {EVALUTIONITEMS.map((item, index) => {
        return (
          <div key={index} className="flex items-center justify-between pb-2">
            <div className="w-10 text-center la-3">{item}</div>
            <div className="flex flex-1 h-[10px]">
              <div className="bg-gray-600 h-[10px] flex-[1]" />
              <div className="bg-gray-300 h-[10px] flex-[1]" />
            </div>
          </div>
        );
      })}
      <div className="flex items-center justify-center pt-6 la-3">
        <div className="w-4 h-4 bg-gray-600 rounded-full" />
        <div className="pl-1 ">전체평균</div>
      </div>
    </div>
  );
};

export default Evaluation;
