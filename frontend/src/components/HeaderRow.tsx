import { ReactNode } from "react";
import {
  AscArrowIcon,
  CheckIcon,
  DesArrowIcon,
  DoubleCheckIcon,
  FilledPhone,
  HistoryIcon,
  VideoIcon,
} from "../icons";

type HeaderRowProps =
  | {
      title: string;
      imgSrc: string;
    } & (
      | {
          type: "chat";
          connected: boolean;
          time: string;
          status?: undefined;
          description: {
            from?: string;
            content: string;
            status?: "wait" | "onserver" | "arrived" | "viewed";
          };
        }
      | {
          type: "contact";
          connected?: undefined;
          time?: undefined;
          status?: undefined;
          description: string;
        }
      | {
          type: "voice" | "video";
          connected?: undefined;
          time: string;
          status?: "answer" | "decline";
          description?: undefined;
        }
    );

function HeaderRow({
  title,
  imgSrc,
  type,
  description,
  connected,
  time,
  status,
}: HeaderRowProps) {
  let template: ReactNode;

  if (type === "chat") {
    template = (
      <>
        <div className="relative w-full text-primaryText">
          <h3 className="text-sm">{title}</h3>
          <p className="text-[13px]">
            {description.status && <StatusIcon status={description.status} />}
            &nbsp;
            {description.content}
          </p>

          <span className="absolute text-xs right-0 top-0">{time}</span>
        </div>
        <span
          className={`absolute w-2 h-2 ${
            connected ? "bg-greenIcons" : "bg-redIcons"
          }  rounded-full left-9 bottom-2`}
        />
      </>
    );
  } else if (type === "contact") {
    template = (
      <div className="relative w-full text-primaryText">
        <h3 className="text-sm">{title}</h3>
        <p className="text-[13px]">{description}</p>
      </div>
    );
  } else {
    template = (
      <>
        <div className="relative w-full text-primaryText">
          <h3 className="text-sm">{title}</h3>
          <p className="text-[13px]">
            {time}
            &nbsp;
            {status && status === "decline" ? (
              <DesArrowIcon
                width="16"
                height="16"
                style="fill-redIcons inline-block ml-0.5 mb-0.5 absolute"
              />
            ) : status === "answer" ? (
              <DesArrowIcon
                width="16"
                height="16"
                style="fill-greenIcons inline-block ml-0.5 mb-0.5 absolute"
              />
            ) : (
              <AscArrowIcon
                width="16"
                height="16"
                style="fill-greenIcons inline-block ml-0.5 mb-0.5 absolute"
              />
            )}
          </p>

          {type === "voice" ? (
            <FilledPhone
              width="18"
              height="18"
              style="fill-greenIcons cursor-pointer hover:fill-green-400 duration-300 ease-out inline-block mb-0.5 absolute right-0 top-0"
            />
          ) : (
            <VideoIcon
              width="20"
              height="18"
              style="fill-greenIcons cursor-pointer hover:fill-green-400 duration-300 ease-out inline-block mb-0.5 absolute right-0 top-0"
            />
          )}
        </div>
      </>
    );
  }

  return (
    <div
      className={`mt-4 relative border-b border-mainBg ${
        type === "chat" ||
        (type === "contact" && "hover:bg-mainBg cursor-pointer")
      }  p-2 rounded-sm flex space-x-2 items-center`}
    >
      <img
        src={imgSrc}
        alt={"pic-" + title}
        className="w-12 h-12 object-cover object-center rounded-full shrink-0"
      />
      {template}
    </div>
  );
}

function StatusIcon({ status }: { status: string }) {
  if (status === "wait") {
    return (
      <HistoryIcon
        width="14"
        height="14"
        style="fill-secondaryText inline-block mb-0.5"
      />
    );
  } else if (status === "onserver") {
    return (
      <CheckIcon
        width="14"
        height="14"
        style="fill-secondaryText inline-block mb-0.5"
      />
    );
  } else if (status === "arrived") {
    return (
      <DoubleCheckIcon
        width="14"
        height="14"
        style="fill-secondaryText inline-block mb-0.5"
      />
    );
  } else {
    return (
      <DoubleCheckIcon
        width="14"
        height="14"
        style="fill-sky-400 inline-block mb-0.5"
      />
    );
  }
}

export default HeaderRow;
