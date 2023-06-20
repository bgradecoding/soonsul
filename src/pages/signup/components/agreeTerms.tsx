import BottomModal from "@/pages/components/modals/bottomModal";
import { useState } from "react";
import IconCheckboxOff from "@/pages/components/icons/checkbox/off";
import IconCheckboxOn from "@/pages/components/icons/checkbox/on";

const AgreeTerms = () => {
  const [isOpen, closeModal] = useState(true);
  const [isAllAgree, setAllAgree] = useState(false);
  const [isFirstAgree, setFirstAgree] = useState(false);
  const [isSecondAgree, setSecondAgree] = useState(false);
  const [isThirdAgree, setThirdAgree] = useState(false);
  return (
    <BottomModal isOpen={isOpen} closeModal={closeModal}>
      <div className="h-[276px]">
        <div className="flex justify-center py-2">
          <div className="  w-[49.79px] h-[3.87px] bg-[#D9D9D9] rounded-[30px]" />
        </div>
        <div className="h-[192px] p-4 mb-2">
          <div>
            <div className="flex justify-between">
              <div className="flex items-center">
                {isAllAgree ? (
                  <IconCheckboxOn
                    fill="#1AC6A9"
                    stroke="#1AC6A9"
                    onClick={() => setAllAgree(!isAllAgree)}
                  />
                ) : (
                  <IconCheckboxOff onClick={() => setAllAgree(!isAllAgree)} />
                )}
                <div className="pl-1 la-1">전체 동의합니다.</div>
              </div>
            </div>
            <div className="my-4 border-t border-[#F0F0F0] w-full" />
            <div className="flex justify-between pb-4">
              <div className="flex items-center">
                {isFirstAgree ? (
                  <IconCheckboxOn
                    fill="#1AC6A9"
                    stroke="#1AC6A9"
                    onClick={() => setFirstAgree(!isFirstAgree)}
                  />
                ) : (
                  <IconCheckboxOff
                    onClick={() => setFirstAgree(!isFirstAgree)}
                  />
                )}
                <div className="pl-1 la-1"> [필수] 만 14세 이상입니다</div>
              </div>
              <div className=" la-2 text-[#8A8A8A]">보기</div>
            </div>
            <div className="flex justify-between pb-4">
              <div className="flex items-center">
                {isSecondAgree ? (
                  <IconCheckboxOn
                    fill="#1AC6A9"
                    stroke="#1AC6A9"
                    onClick={() => setSecondAgree(!isSecondAgree)}
                  />
                ) : (
                  <IconCheckboxOff
                    onClick={() => setSecondAgree(!isSecondAgree)}
                  />
                )}
                <div className="pl-1 la-1"> [필수] 이용약관 동의</div>
              </div>
              <div className=" la-2 text-[#8A8A8A]">보기</div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">
                {isThirdAgree ? (
                  <IconCheckboxOn
                    fill="#1AC6A9"
                    stroke="#1AC6A9"
                    onClick={() => setThirdAgree(!isThirdAgree)}
                  />
                ) : (
                  <IconCheckboxOff
                    onClick={() => setThirdAgree(!isThirdAgree)}
                  />
                )}
                <div className="pl-1 la-1"> [필수] 개인정보처리방침 동의</div>
              </div>
              <div className=" la-2 text-[#8A8A8A]">보기</div>
            </div>
          </div>
        </div>
        <div className="text-[#FEFEFE] la-1 flex w-full bg-[#1AC6A9] h-[56px] justify-center items-center">
          완료
        </div>
      </div>
    </BottomModal>
  );
};

export default AgreeTerms;
