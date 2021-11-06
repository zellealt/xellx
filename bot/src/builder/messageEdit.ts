const invite = (
  old_message_content: string,
  old_message_embeds: any[],
  new_message_content: string,
  new_message_embeds: any[],
  message_creator: string,
  message_creator_avatar: string,
  message_link: string
) => {
  const data = {
    type: "edit_message",
    data: [
      [
        {
          type: "old_message",
          content: old_message_content,
          embeds: old_message_embeds,
        },
        {
          type: "new_message",
          content: new_message_content,
          embeds: new_message_embeds,
        },
        {
          message_creator: message_creator,
          message_creator_avatar: message_creator_avatar,
        },
        {
          message_link: message_link,
        },
      ],
    ],
  };

  return data;
};

export default invite;
