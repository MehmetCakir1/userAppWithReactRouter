import { useLocation } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar";

const Details = () => {
  const { state } = useLocation();
  const navigate = useNavigate()
  // console.log(state);
  return (
    <div >
      <Navbar/>
      <div className="d-flex justify-content-center  details m-auto p-3 gap-4 mt-5">
        <div>
<article className="d-flex align-items-center p-2"><h4 className="text-primary">Name</h4><h4>{state.name}</h4></article>
<article className="d-flex align-items-center p-2"><h4 className="text-primary">Userame</h4><h4>{state.username}</h4></article>
<article className="d-flex align-items-center p-2"><h4 className="text-primary">Email</h4><h4>{state.email}</h4></article>
<article className="d-flex align-items-center p-2"><h4 className="text-primary">Phone</h4><h4>{state.phone}</h4></article>
<article className="d-flex align-items-center p-2"><h4 className="text-primary">Company</h4><h4>{state.company.name}</h4></article>
<article className="d-flex align-items-center p-2"><h4 className="text-primary">Website</h4><h4>{state.website}</h4></article>
<article className="d-flex align-items-center p-2"><h4 className="text-primary">Address</h4><h4>Street:{state.address.street} <br />
            Suite:{state.address.suite} <br />
            City:{state.address.city} <br />
            Street:{state.address.street} <br />
            Zip-Code:{state.address.zipcode}</h4></article>
        </div>
      </div>
      <div className="text-center mt-4">
        <button className="p-2 rounded-3 fw-bold" onClick={()=>navigate("/")}>Back To Home</button>
      </div>
      
    </div>
  );
};

export default Details;
