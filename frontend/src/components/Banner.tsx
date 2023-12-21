type BannerProps = {
  message: string;
};

function Banner({ message }: BannerProps) {
  return (
    <div role="banner" className="p-2 mt-4 rounded-md text-center bg-orange-300 text-redIcons">
      {message}
    </div>
  );
}

export default Banner;
