interface DayButtonProps {
  day: number;
}

const DayButton = ({ day }: DayButtonProps) => {
  return (
    <div className="flex h-15 w-70 justify-between rounded-xl bg-blue-100 p-2 text-2xl shadow-md">
      <div className="my-auto">DAY {day}</div>
      <button className="mb-1 cursor-pointer">{'>'}</button>
    </div>
  );
};

export default DayButton;
