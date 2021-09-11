export default async function get_server(req: { query: any }, res: any) {
  const { guild_id } = req.query;

  res.writeHead(302, {
    Location: "/server/" + guild_id + "/overview",
    //add other headers here...
  });
  res.end();
}
