import ServerCardShimmer from "@/shimmered/Cards/ServerCard";

const ServerCardsShimmerLayout = () => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10 md:justify-center -z-1">
      <div className="px-4 lg:px-0 md:px-0">
        <ServerCardShimmer buttonLayer={true} />
      </div>
      <div className="px-4 lg:px-0 md:px-0">
        <ServerCardShimmer buttonLayer={true} />
      </div>
      <div className="px-4 lg:px-0 md:px-0">
        <ServerCardShimmer buttonLayer={true} />
      </div>
      <div className="px-4 lg:px-0 md:px-0">
        <ServerCardShimmer buttonLayer={true} />
      </div>
      <div className="px-4 lg:px-0 md:px-0">
        <ServerCardShimmer buttonLayer={true} />
      </div>
      <div className="px-4 lg:px-0 md:px-0">
        <ServerCardShimmer buttonLayer={true} />
      </div>
    </div>
  );
};

export default ServerCardsShimmerLayout;
