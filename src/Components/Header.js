import HomePage from "./Homepage";
import UserPage from "./UserPage";
import { Link } from "react-router-dom";

let Header=()=>{
    return(
        <>
        <nav>
            <Link class="nl" to='/' element={<HomePage></HomePage>}>HomePage</Link>
            <Link class="nl" to='/user' element={<UserPage></UserPage>}>UserPage</Link>
        </nav>
        </>
    )
}

export default Header;