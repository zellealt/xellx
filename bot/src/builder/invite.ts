const invite = (
  invite_id: string,
  executor: string,
  executor_avatar: string,
  invite_creator: string,
  invite_creator_avatar: string,
  channel: string,
  channel_type: string
) => {
  const data = {
    type: "invite",
    data: [
      [
        {
          type: "invite",
          invite_id: invite_id,
          executor: executor,
          executor_avatar: executor_avatar,
          invite_creator: invite_creator,
          invite_creator_avatar: invite_creator_avatar,
          channel: channel,
          channel_type: channel_type,
        },
      ],
    ],
  };

  return data;
};

export default invite;
