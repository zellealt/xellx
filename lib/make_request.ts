import chalk from "chalk";

const make_request = async (query: string, headers: any) => {
  const url = query;

  const res = await fetch(url, {
    headers: headers,
  });

  const jsonRes = await res.json();

  console.log(
    chalk.magenta("Request") + chalk.white(" • ") + chalk.green(query)
  );

  return jsonRes;
};

export default make_request;
