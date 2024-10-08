import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Breaking news</button>
            <Marquee pauseOnHover={true} speed={100}>
               <Link to="/"> Ad possimus aliquid consequuntur eos magnam?.</Link>
               <Link className="mx-12" to="/"> ipsum velit impedit officia dolores optio quia quam, unde autem amet?</Link>
               <Link to="/">  Aut est reprehenderit veritatis veniam exercitationem, harum non optio enim temporibus.</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;