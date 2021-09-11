import XellxPartialBrand from "../Layout/Header/XellxPartialBrand";

const Spinner = () => {
  return (
    <div className="stack">
      <div className="">
        <XellxPartialBrand height="10" color="gray-800 dark:text-white" />
      </div>
      <div className="animate-ping">
        <XellxPartialBrand height="10" color="gray-800 dark:text-white" />
      </div>
    </div>
  );
};

export default Spinner;
