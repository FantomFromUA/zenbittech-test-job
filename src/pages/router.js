import { Route, Routes } from "react-router-dom";
import pagesData from "./pagesData";

const Router = () => {
    const pageRouters = pagesData.map(({path, title, element}) => {
        return <Route key={title} path={`/${path}`} element={element} />
    })
    return (
        <Routes>
            {pageRouters}
        </Routes>
    );
}
 
export default Router;