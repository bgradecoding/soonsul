import ReviewList from "@/components/review/reviewList";
import Title from "./title";

const ReviewContainer: React.FC = () => {
  return (
    <div className="p-4">
      <div className="flex items-center pb-4">
        <Title text="리뷰" />
        <div className="pl-1 text-gray-500 la-3">99</div>
      </div>
      <ReviewList />
    </div>
  );
};

export default ReviewContainer;
