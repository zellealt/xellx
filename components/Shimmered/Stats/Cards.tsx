import SquareCard from "@/original/Cards/SquareCard";
import Shimmer from "../Shimmer";

const Cards = () => {
  return (
    <div className="space-y-8 p-3 md:flex md:gap-20 md:space-y-0 md:p-0">
      <SquareCard
        mdWidth="1/4"
        title={<Shimmer width={24} rounded="sm" height={6} />}
        value={<Shimmer width={16} rounded="sm" height={10} />}
        color="gray-200 dark:bg-gray-700"
        fraction="0"
      />
      <SquareCard
        mdWidth="2/4"
        title={<Shimmer width={16} rounded="sm" height={6} />}
        value={<Shimmer width={40} rounded="sm" height={10} />}
        color="gray-200 dark:bg-gray-700"
        fraction="0"
      />
      <SquareCard
        mdWidth="1/4"
        title={<Shimmer width={20} rounded="sm" height={6} />}
        value={<Shimmer width={7} rounded="sm" height={10} />}
        color="gray-200 dark:bg-gray-700"
        fraction="0"
      />
    </div>
  );
};

export default Cards;
