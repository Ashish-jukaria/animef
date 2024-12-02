import { Link } from "react-router-dom"
import { Search } from "./Search"
import { useAuth } from "./useAuth"

export const Navbar = () => {
    const auth=useAuth()
    return (
        <>
            <div className="flex justify-center bg-slate-600 text-white p-10" >
                <div className="mx-3">
                    <Link to='/'>
                    AnimeSuggest
                    </Link>
                   
                    </div>
                <div className="mx-3">
                    <Link to="/login">
                        Login
                    </Link>
                </div>

                <div className="mx-3">
                    <Link to="/signup">
                        Signup
                    </Link>

                </div>

                <div className="mx-3">
                    <Search />
                </div>

                <div>
                    {auth.token && <Link to='/dashboard'>Dashboard</Link>}
                </div>
            </div>
        </>
    )
}