import StatusIcon from "./StatusIcon";

export type LatestMsgProps = {
  description: description;
  status?: "waited" | "saved" | "recieved" | "viewed";
};

function LatestMsg({ description, status }: LatestMsgProps) {
  if (!description) return;

  return (
    <p className="text-[13px] text-primaryText">
      {status && <StatusIcon status={status} />}
      &nbsp;
      {description.type === "text"
        ? description.message
        : `${description.type}: ${description.label}`}
    </p>
  );
}

export default LatestMsg;
