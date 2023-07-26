import Image from "next/image";
import IconStar from "@/components/icons/star";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { colors } from "@/constants/design";
import { DetailRes } from "@/interfaces/liquor";
import { financial, formatNumber } from "@/utils/form";
interface IntroProps {
  data?: DetailRes;
}

const Intro: React.FC<IntroProps> = ({ data }) => {
  const arrayd = [1, 2, 3, 4, 5];
  const { width } = useWindowDimensions();
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
      <div
        className="h-[264px] ml-4 flex justify-center"
        style={{ width: (width ? width : 0) - 172 }}
      >
        <div>
          <div className="pb-6 text-center">
            <div className="flex justify-center pb-1 la-2 text-primary">
              <div className="">내 평점</div>
              <div className="font-bold ">5.0</div>
            </div>

            <div className="pb-1 text-gray-600 sl-3">
              {financial(data?.data.averageRating + "", 1)}
            </div>
            <div className="flex justify-center pb-1">
              {Array(data?.data.averageRating)
                .fill(0)
                .map((_, index) => (
                  <IconStar
                    key={index}
                    width={12}
                    height={11}
                    fill={colors.primary}
                  />
                ))}
              {Array(
                5 - (data?.data.averageRating ? data?.data.averageRating : 0)
              )
                .fill(0)
                .map((_, index) => (
                  <IconStar key={index} width={12} height={11} />
                ))}
            </div>
            <div className="text-gray-500 la-2">{`${data?.data.ratingNumber}개 평가`}</div>
          </div>
          <div className="pb-6 text-center">
            <div className="text-gray-500 la-2">판매 최저가</div>
            <div className="text-gray-500 b-1">
              {formatNumber(
                data?.data.lowestPrice ? data?.data.lowestPrice : 0
              )}
              원
            </div>
          </div>
          <div className="text-center text-gray-500 la-2">
            <div>{`도수 ${data?.data.alcohol}%`}</div>
            <div>{`용량 ${data?.data.capacity}ml`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
