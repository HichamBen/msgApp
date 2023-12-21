import { ReactNode, useRef } from "react";
import { AscArrowIcon, DesArrowIcon, FilledPhone, VideoIcon } from "../icons";
import { useNavigate } from "react-router-dom";
import LatestMsg from "./LatestMsg";

type HeaderRowProps =
  | {
      id: string;
      title: string;
      imgSrc: string;
    } & (
      | {
          type: "chat";
          connected: boolean;
          time: string;
          status?: "waited" | "saved" | "recieved" | "viewed";
          description: description;
        }
      | {
          type: "contact";
          connected?: undefined;
          time?: undefined;
          status: "wait" | "accept" | "block";
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
  id,
  title,
  imgSrc,
  type,
  description,
  connected,
  time,
  status,
}: HeaderRowProps) {
  const navigate = useNavigate();
  const template = useRef<ReactNode>();

  if (type === "chat") {
    template.current = (
      <>
        <div className="relative w-full text-primaryText">
          <h3 className="text-sm">{title}</h3>
          <LatestMsg description={description} status={status} />

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
    template.current = (
      <div className="relative w-full text-primaryText">
        <h3 className="text-sm">{title}</h3>
        <p className="text-[13px]">{description}</p>
      </div>
    );
  } else {
    template.current = (
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
    );
  }

  return (
    <div
      onClick={
        type === "chat" || type === "contact"
          ? () => navigate(`/chats/${id}`)
          : undefined
      }
      className={`mt-4 relative border-b border-mainBg group ${
        (type === "chat" || type === "contact") && "headerRow cursor-pointer"
      }  p-2 rounded-sm flex space-x-2 items-center`}
    >
      <img
        onClick={e => {
          e.stopPropagation();
          navigate(`/contacts/${id}`);
        }}
        src={imgSrc}
        alt={"pic-" + title}
        className="w-12 h-12 object-cover object-center rounded-full shrink-0"
      />
      {template.current}
    </div>
  );
}

export default HeaderRow;
