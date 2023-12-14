import { useLocation, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const path = state ? state.prevPath : "/";
  const returnBtn = () => {
    navigate(path, { replace: true });
  };
  return (
    <div
      aria-labelledby="notFound"
      className="bg-mainBg w-screen h-screen grid place-content-center"
    >
      <h1 id="notFound" className="text-secondaryText font-extrabold text-5xl">
        Not Found 404
      </h1>

      <button
        onClick={returnBtn}
        className="text-secondaryText text-2xl border w-44 place-self-center mt-10 py-2 transition-colors duration-200 ease-out hover:bg-sideBg"
      >
        Return
      </button>
    </div>
  );
}

export default NotFound;
