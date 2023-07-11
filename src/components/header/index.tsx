import IconArrowBack from "../icons/arrow/back";
import IconShare from "../icons/share";

type Props = {
  title: string;
  share?: boolean;
};

const HeaderComponent: React.FC<Props> = ({ title, share = false }) => {
  return (
    <div className="flex items-center justify-between">
      <IconArrowBack />
      <div>{title}</div>
      {share && <IconShare />}
    </div>
  );
};

export default HeaderComponent;
