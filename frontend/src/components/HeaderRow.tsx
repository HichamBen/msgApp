type HeaderRowProps = {
  title: string;
  imgSrc: string;
  withBadge?: string;
  description?: string;
  withTime?: string;
};
function HeaderRow({
  title,
  imgSrc,
  withBadge,
  description,
  withTime,
}: HeaderRowProps) {
  return (
    <div className="mt-4 relative cursor-pointer border-b border-mainBg hover:bg-mainBg p-2 rounded-sm flex space-x-2 items-center">
      <img
        src={imgSrc}
        alt={"pic-" + title}
        className="w-12 h-12 rounded-full shrink-0"
      />
      <div className="relative w-full text-primaryText">
        <h3 className="text-sm">{title}</h3>
        {description && <p className="text-[13px]">{description}</p>}

        {withTime && (
          <span className="absolute text-xs right-0 top-0">{withTime}</span>
        )}
      </div>
      {withBadge && (
        <span
          className={`absolute w-2 h-2 ${
            withBadge === "online" ? "bg-greenIcons" : "bg-redIcons"
          }  rounded-full left-9 bottom-2`}
        />
      )}
    </div>
  );
}

export default HeaderRow;
