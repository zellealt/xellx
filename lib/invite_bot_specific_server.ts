const invite_bot_specific_server = (id: number) => {
  return (window.location.href =
    "https://discord.com/oauth2/authorize?client_id=870400020757745694&scope=bot%20applications.commands&guild_id=" +
    id +
    "&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Fapi%2Fget_server&permissions=2134207679");
};

export default invite_bot_specific_server;
