import Image from "next/image";
import IconStar from "@/components/star";

const Intro: React.FC = () => {
  const arrayd = [1, 2, 3, 4, 5];
  return (
    <div className="flex ">
      <div className="p-2">
        <Image
          //TODO: 이미지 경로 수정
          src={"https://thumb.mt.co.kr/06/2021/11/2021111911385598861_1.jpg"}
          alt="logo"
          width={156}
          height={248}
        />
      </div>
      <div className="h-[264px] ml-4">
        <div className="">
          <div>내 평점 5.0</div>
          <div>5.0</div>
          <div className="flex">
            {arrayd.map((_, index) => (
              <IconStar key={index} width={12} height={11} />
            ))}
          </div>
          <div>99개 평가</div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Intro;
