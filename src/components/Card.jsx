import { useNavigate } from "react-router-dom";

const Card = ({ card }) => {
  // console.log(card);
  const navigate = useNavigate();
  const { id, name, username, email } = card;
  return (
    <div key={id} className="row col-lg-3 col-md-4 col-sm-6  text-center d-flex flex-wrap">
      <div className="card d-flex justify-content-center flex-column align-items-center border border-2 rounded-3 border-primary text-center p-1">
        <div className=" circle border border-1 border-primary rounded-circle fw-bold text-light d-flex justify-content-center align-items-center mb-4">{name[0]}</div>
        <h5 className="fw-bold  my-1">{name}</h5>
        <p className="fs-4 my-1"> <i>@{username}</i> </p>
        <p className="fw-bold fs-lg-5 mt-2">{email}</p>
        <button className="fw-bold fs-6 p-2 rounded-3 mt-4" onClick={() => navigate("/details", { state: card })}>
          More Details
        </button>
      </div>
    </div>
  );
};

export default Card;
