import Spinner from "../Spinner/Spinner";

const FullLoader = () => {
  return (
    <div className="bg-white absolute inset-0 flex items-center justify-center">
      <Spinner />
    </div>
  );
};

export default FullLoader;
