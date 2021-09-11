import Shimmer from "@/shimmered/Shimmer";

const CardShimmer = (props: { width: number; height: number }) => {
  return (
    <div className="overflow-hidden rounded-lg border">
      <div className="px-6 py-4">
        <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">
          <div className="mb-3">
            <Shimmer height={props.height} width={props.width} rounded="sm" />
          </div>
        </h4>
        <div className="leading-normal">
          <div className="mb-3">
            <Shimmer height={3} width="" rounded="sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardShimmer;
