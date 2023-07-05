import CheckBox from ".";

type Props = {
  checkList: readonly boolean[];
  labels: readonly string[];
  onCheck: (index: number) => void;
};

const Checks: React.FunctionComponent<Props> = ({
  checkList,
  labels,
  onCheck,
}) => {
  return (
    <>
      {labels.map((label, idx) => (
        <div key={idx} className="pb-4">
          <CheckBox
            idx={idx}
            checkList={checkList}
            onChange={() => onCheck(idx)}
            label={label}
          />
        </div>
      ))}
    </>
  );
};

export default Checks;
