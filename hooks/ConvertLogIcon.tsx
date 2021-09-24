import {
  PencilIcon,
  StarIcon,
  ServerIcon,
  UserRemoveIcon,
  UserAddIcon,
  ChatAlt2Icon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";

const ConvertLogIcon = (icon: string, classNames: string) => {
  let JsxIcon = QuestionMarkCircleIcon;

  if (icon === "added_sticky_role") {
    JsxIcon = UserAddIcon;
  }
  if (icon === "removed_server_data") {
    JsxIcon = ServerIcon;
  }
  if (icon === "removed_sticky_role") {
    JsxIcon = UserRemoveIcon;
  }
  if (icon === "updated_channel") {
    JsxIcon = PencilIcon;
  }
  if (icon === "updated_auto_role") {
    JsxIcon = StarIcon;
  }
  if (icon === "updated_command") {
    JsxIcon = ChatAlt2Icon;
  }

  return <JsxIcon className={classNames} />;
};

export default ConvertLogIcon;
