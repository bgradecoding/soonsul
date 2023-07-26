import { ReviewMain } from "@/interfaces/review";
import IconStar from "../icons/star";
import { colors } from "@/constants/design";
import { financial } from "@/utils/form";
import Profile from "./profile";
import IconThumb from "../icons/thumb";
import IconComment from "../icons/comment";
interface Props {
  data: ReviewMain;
}
const ReviewMainItem: React.FC<Props> = ({ data }) => {
  return (
    <div className="pb-4">
      <div className="flex items-center justify-between pb-2">
        <div className="flex items-center">
          <div className="flex pr-[2px]">
            {Array(data?.averageRating)
              .fill(0)
              .map((_, index) => (
                <IconStar
                  key={index}
                  width={12}
                  height={11}
                  fill={colors.primary}
                />
              ))}
            {Array(5 - (data?.averageRating ? data?.averageRating : 0))
              .fill(0)
              .map((_, index) => (
                <IconStar key={index} width={12} height={11} />
              ))}
          </div>
          <div className="text-gray-600 la-2">
            {financial(data.averageRating + "", 1)}
          </div>
        </div>
        <div className="text-gray-400 la-2">{data.createdDate}</div>
      </div>
      <div className="mb-2 text-gray-600 la-2 line-clamp-4">{data.content}</div>
      <div className="flex items-center justify-between">
        <Profile
          src={data.profileImage}
          nickname={data.nickname}
          reviewCount={data.reviewNumber}
        />
        <div className="flex items-center">
          <div className="flex items-center">
            <IconThumb />
            <div className="pl-1 text-gray-600 la-2">{data.goodNumber}</div>
          </div>
          <div className="flex items-center pl-4">
            <IconComment />
            <div className="pl-1 text-gray-600 la-2">{data.commentNumber}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewMainItem;
