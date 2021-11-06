const convertMessageType = (message: any) => {
  let messageType: string;
  const hasContent: boolean = message.content !== "";
  const hasEmbeds: boolean = message.embeds.toString() !== "";
  if (hasContent && hasEmbeds) messageType = "Embed and Message";
  else if (!hasEmbeds && hasContent) messageType = "Message";
  else if (hasEmbeds && !hasContent) messageType = "Embed";
  else messageType = "Unknown Message";
  return messageType;
};

export default convertMessageType;
