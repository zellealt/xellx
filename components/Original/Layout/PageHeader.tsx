interface PageHeaderProps {
  leftContent?: any | null;
  rightContent?: any | null;
  rightTitle?: string | null;
  leftTitle?: string | null;
  children?: any;
  padding?: boolean;
  fullWidth?: boolean;
}

const PageHeader = (props: PageHeaderProps) => {
  const fullWidthClass = props.fullWidth ? "" : "max-w-7xl";
  let contentClasses = props.padding
    ? `${fullWidthClass} mx-auto py-6 sm:px-6 lg:px-8`
    : `${fullWidthClass}`;
  const titleClasses = props.padding ? "mx-auto" : "";

  return (
    <div>
      <header className="bg-white dark:bg-gray-800 filter drop-shadow -z-1">
        <div
          className={`max-w-7xl ${titleClasses} py-6 px-4 sm:px-6 lg:px-8 flex flex-row justify-between`}
        >
          <div className="lg:w-2/5 sm:w-5/12 flex gap-4">
            {props.leftContent}
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
              {props.leftTitle}
            </h1>
          </div>
          <div className="px-4"></div>
          <div className="lg:w-1/5 sm:w-4/12">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {props.rightTitle}
            </h1>
            <div>{props.rightContent}</div>
          </div>
        </div>
      </header>
      <main>
        <div className={`${contentClasses}`}>{props.children}</div>
      </main>
    </div>
  );
};

export default PageHeader;
