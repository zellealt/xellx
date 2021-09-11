import CommandCard from "@/shimmered/Cards/CommandCard";

const DashBoardGrid = () => {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
      <CommandCard />
      <CommandCard />
      <CommandCard />
      <CommandCard />
      <CommandCard />
    </div>
  );
};

export default DashBoardGrid;
