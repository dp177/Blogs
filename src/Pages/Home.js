import Header from "../Components/Header"
import Blogs from "../Components/Blogs"
import Pagination from "../Components/Pagination"
import { Outlet } from "react-router-dom"
function Home(){
    return(
        <div>
            <Outlet></Outlet>
            <Header>
            </Header>
            <Blogs>
            </Blogs>
            <Pagination>
            </Pagination>
        </div>
    )
}
export default Home
