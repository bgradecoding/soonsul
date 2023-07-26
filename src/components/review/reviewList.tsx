import { ReviewMain } from "@/interfaces/review";
import ReviewMainItem from "./reviewMainItem";

const ReviewList: React.FC = () => {
  console.log("Review List");
  const reviewList: ReviewMain[] = [
    {
      reviewId: 1,
      averageRating: 4,
      content: `술 자체의 향이 크지 않아 입에 넣었을 때 달콤한 맛이 먼저 느껴졌고, 그 뒤로 조금씩 산미와 함께 강렬한 여운이 느껴졌습니다. 
      이러한 맛의 조화는 깔끔하면서도 깊은 맛을 느끼게 해줍니다.
      어릴 적 어머니가 해주던 막걸리 맛이 제대로 나네요. 정말 굿입니다. 최고의 막걸리 와우`,
      goodNumber: 12,
      createdDate: "2023.07.12",
      commentNumber: 23,
      userId: 231242,
      nickname: "날으는킥",
      profileImage: "https://img.lovepik.com/element/40128/7461.png_1200.png",
      reviewNumber: 23,
    },
    {
      reviewId: 2,
      averageRating: 4,
      content: `술 자체의 향이 크지 않아 입에 넣었을 때 달콤한 맛이 먼저 느껴졌고, 그 뒤로 조금씩 산미와 함께 강렬한 여운이 느껴졌습니다. 
        이러한 맛의 조화는 깔끔하면서도 깊은 맛을 느끼게 해줍니다.
        어릴 적 어머니가 해주던 막걸리 맛이 제대로 나네요. 정말 굿입니다. 최고의 막걸리 와우!!!! 정말이지 그맛은 잊을 수 가 없습니다.`,
      goodNumber: 12,
      createdDate: "2023.07.12",
      commentNumber: 23,
      userId: 231242,
      nickname: "날으는킥",
      profileImage: "https://img.lovepik.com/element/40128/7461.png_1200.png",
      reviewNumber: 23,
    },
  ];
  return (
    <div>
      {reviewList.map((v, i) => {
        return (
          <div>
            <ReviewMainItem key={i} data={v} />
            {i !== reviewList.length - 1 && (
              <div className="mb-4 border-b border-gray-200" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ReviewList;
