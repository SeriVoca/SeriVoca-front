import { useNavigate } from "react-router-dom";

interface DayButtonProps {
  day: number;
}

const DayButton = ({ day }: DayButtonProps) => {
  const navigate = useNavigate();

  const handleDayClick = () => {
    navigate(`/${day}`);
  };

  return (
    <div className="flex h-15 w-70 justify-between rounded-xl bg-blue-100 p-2 text-2xl shadow-md">
      <div className="my-auto">DAY {day}</div>
      <button className="mb-1 cursor-pointer" onClick={handleDayClick}>{'>'}</button>
    </div>
  );
};

export default DayButton;