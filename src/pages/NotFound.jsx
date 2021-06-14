const NotFound = ({ history }) => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 lg:px-0 flex flex-col items-center justify-center py-40">
      <h2 className="text-2xl font-semibold text-gray-600 text-center">
        The requested page does not exist.
      </h2>
      <button
        className="hover:underline mt-2 cursor-pointer text-green-500"
        onClick={() => history.goBack()}
      >
        Go back
      </button>
    </div>
  );
};

export default NotFound;
