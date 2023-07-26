import IconBookmarkOutline from "@/components/icons/bookmark/outline";
import IconBookmarkFill from "@/components/icons/bookmark/fill";
import { useRouter } from "next/router";
interface BottomAreaProps {
  evaluationYn?: boolean;
  bookmarkYn?: boolean;
  liquorId: string;
  name?: string;
  category?: string;
  salePlace?: string;
}

const BottomArea: React.FC<BottomAreaProps> = ({
  evaluationYn = false,
  bookmarkYn = false,
  liquorId,
  name,
  category,
  salePlace,
}) => {
  const router = useRouter();
  return (
    <div className="fixed bottom-0 p-2 h-[56px] bg-white w-full">
      <div className="flex">
        <div className="flex items-center p-2 mr-2">
          {bookmarkYn ? <IconBookmarkFill /> : <IconBookmarkOutline />}
        </div>
        {evaluationYn ? (
          <>
            <button
              onClick={() =>
                router.push(
                  `/review?liquorId=${liquorId}&name=${name}&category=${category}&salePlace=${salePlace}`
                )
              }
              className="flex-1 h-full font-bold text-center text-white bg-yellow-500"
            >
              내 평가 수정하기
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() =>
                router.push(
                  `/review?liquorId=${liquorId}&name=${name}&category=${category}&salePlace=${salePlace}`
                )
              }
              className="flex-1 h-10 font-bold text-center text-white rounded-lg bg-primary"
            >
              평가하기
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default BottomArea;
