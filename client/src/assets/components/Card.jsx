import PropTypes from "prop-types";
export const Card = ({ item }) => {
  return (
    <div className="card" style={{ width: "18rem;" }}>
      <div className="card-body">
        <h5 className="card-title">{item?.pizza}</h5>
        <p className="card-text">
          {item?.description}
        </p>
        <p>{item?.size}</p>
        <p>{item?.price}</p>
      </div>
    </div>
  );
};

Card.PropTypes = {
  item: PropTypes.object,
};

