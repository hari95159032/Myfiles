import { useNavigate } from "react-router-dom";

let Header=()=>{
    const navigate = useNavigate();
    return(
        <div className="navbar">
            <h1>Header Part</h1>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <button className="btnclick" type="click" onClick={() => navigate(-1)}>Home</button>
        </div>
    )
}
export default Header;