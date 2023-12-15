import { CarretIcon } from "../icons";

type SettingsRowProps = {
  title: string;
  refIcon: JSX.Element;
  color?: string;
} & (
  | {
      withArrow?: undefined;
      modeBox: JSX.Element;
    }
  | {
      withArrow: boolean;
      modeBox?: undefined;
    }
);

function SettingsRow({
  title,
  refIcon,
  color,
  modeBox,
  withArrow,
}: SettingsRowProps) {
  if (modeBox) {
    return (
      <li
        aria-labelledby="setting-title1"
        className="p-2 flex text-sm items-center justify-between"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center">
          {refIcon}
          <h4 id="setting-title1" className={`text-${color}`}>
            {title}
          </h4>
        </div>
        {modeBox}
      </li>
    );
  }
  return (
    <li
      aria-labelledby="setting-title"
      className="hover:bg-secondaryText cursor-pointer duration-300 p-2 flex text-sm items-center justify-between"
    >
      <div className="flex items-center">
        {refIcon}
        <h4 id="setting-title" className={`text-${color}`}>
          {title}
        </h4>
      </div>
      {withArrow && (
        <CarretIcon height="20" width="20" style={`fill-${color} -rotate-90`} />
      )}
    </li>
  );
}

export default SettingsRow;
