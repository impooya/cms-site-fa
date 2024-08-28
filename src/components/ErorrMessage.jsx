import PropTypes from "prop-types";

export default function ErorrMessage({ msg }) {
  return (
    <>
      <div className="bg-red-600 h-20 flex justify-center items-center">
        <h1 className="text-white text-3xl">{msg}</h1>
      </div>
    </>
  );
}

ErorrMessage.propTypes = {
  msg: PropTypes.string.isRequired,
};
