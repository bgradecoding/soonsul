import IconArrowBack from "../icons/arrow/back";
import IconShare from "../icons/share";

type Props = {
  title: string;
  share?: boolean;
};

const HeaderComponent: React.FC<Props> = ({ title, share = false }) => {
  return (
    <div className="flex items-center justify-between h-12 px-2 border-b border-gray-300 b-1">
      <div className="p-2">
        <IconArrowBack />
      </div>

      <div>{title}</div>
      {share && (
        <div className="p-2">
          {" "}
          <IconShare />
        </div>
      )}
    </div>
  );
};

export default HeaderComponent;
