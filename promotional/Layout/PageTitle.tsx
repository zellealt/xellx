const PageTitle = (props: { title: string; desc: string }) => (
  <div>
    <h1 className="text-4xl font-bold px-10 pt-5">{props.title}</h1>
    <p className="text-xl font-light px-10">{props.desc}</p>
  </div>
);

export default PageTitle;
