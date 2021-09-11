import PageHeader from "@/original/Layout/PageHeader";
import ServerCardsShimmerLayout from "./CardsLayout";

function ShimmeredLayer3() {
  return (
    <PageHeader
      padding={true}
      fullWidth={false}
      rightContent={
        <input
          type="text"
          id="search"
          className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 dark:border-gray-700 w-full py-2 px-4 bg-white dark:text-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent dark:bg-gray-900"
          name="search"
          placeholder="Search"
        />
      }
      leftTitle="Dashboard"
      content={<ServerCardsShimmerLayout />}
      leftContent={null}
      rightTitle={null}
    />
  );
}

export default ShimmeredLayer3;
