import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import qzone1 from "../../../assets/qZone1.png"
import qzone2 from "../../../assets/qZone2.png"
import qzone3 from "../../../assets/qZone3.png"

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 mb-4">
        <h2 className="text-2xl font-bold">Login With</h2>
        <button className="btn btn-outline w-full my-3">
          <FcGoogle />
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          GitHub
        </button>
      </div>
      <div className=" mb-4">
        <h2 className="text-2xl font-bold">Find Us On</h2>
        <div className=" p-4">
          <a
            href=""
            className="flex items-center text-lg border rounded-t-lg p-4"
          >
            <FaFacebook className="mr-3" />
            <span>Facebook</span>
          </a>
          <a href="" className="flex items-center text-lg border  p-4">
            <FaTwitter className="mr-3" />
            <span>Twitter</span>
          </a>
          <a
            href=""
            className="flex items-center text-lg border rounded-b-lg p-4"
          >
            <FaInstagram className="mr-3" />
            <span>Instagram</span>
          </a>
        </div>

              
        {/* Q zone */}

              
        <div className="p-4 mb-4">
          <h2 className="text-2xl font-bold">Q-Zone</h2>
          <img src={qzone1} alt="" />
          <img src={qzone2} alt="" />
          <img src={qzone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
