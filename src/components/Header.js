// import Button from "./Button";

const Header = ({ head, onPress, showAdd }) => {
  return (
    <header className="text-center display-6 mt-4">
      {head}

      {showAdd ? (
        <button
          type="button"
          className="btn btn-outline-danger btn-lg ms-5 mb-1 font-monospace"
          onClick={onPress}
        >
          Close
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-outline-primary btn-lg ms-5 mb-1 font-monospace"
          onClick={onPress}
        >
          Add Data
        </button>
      )}

      {/* <Button btnclass='btn btn-outline-primary btn-lg ms-5 mb-1' text='Add Data' onClick={onPress} /> */}
    </header>
  );
};

Header.defaultProps = {
  head: "BLOOD PRESSURE TRACKER",
};

export default Header;
