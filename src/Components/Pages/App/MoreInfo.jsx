import {
  FaCheckCircle,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function MoreInfo() {
  return (
    <div className="grid gap-5 grid-cols-3">
      <div className="md:col-span-1 col-span-3 font-bold">
        <h2 className="text-highlight flex items-center gap-2">
          <FaCheckCircle className="text-primary" /> My Achievements
        </h2>
        <ul className="flex flex-col gap-4 text-sm font-normal ">
          <li>I am the sohokormi at brack</li>
          <li>I am sitylioclube of dhaka flaw garden international</li>
          <li>Vaccinator in sefta ltd</li>
        </ul>
      </div>
      <div className="md:col-span-1 col-span-3 font-bold">
        <h2 className="text-highlight flex items-center gap-2">
          <FaCheckCircle className="text-primary" /> Awards
        </h2>
        <ul className="flex flex-col gap-4 text-sm font-normal ">
          <li>
            <b>Berk</b>: change agent burke village education resource center
          </li>
          <li>
            <b> UNICEF: </b>
            community volunteer UNICEF bangladesh
          </li>
          {/* <li>
            Bachsach Award'08 (as Best Actress), Binodon Bichitra Performance
            Award'10(as Best Model) Film Award Bangla'10, Sako Telefilm
            Award'10.
          </li> */}
        </ul>
      </div>
      <div className="md:col-span-1 col-span-3 font-bold">
        <h2 className="text-highlight flex items-center gap-2">
          <FaCheckCircle className="text-primary" /> Let's Connect
        </h2>
        <ul className="flex flex-col gap-4 text-sm font-normal ">
          <li>
            <span className="flex items-center gap-1">
              <FaEnvelope className="text-primary" /> sadialucky1990@gmail.com
            </span>
          </li>
          <li>
            <Link
              to={"https://www.facebook.com/BidyaSinhaSahaMim/"}
              className="flex items-center gap-1"
            >
              <FaPhone className="text-primary" /> Call: 018263143283 <br /> 01920948120
              {/* <FaFacebook className="text-primary" /> /BidyaSinhaSahaMim */}
            </Link>
          </li>
          {/* <li>
            <span className="flex items-center gap-1">
              <FaGithub className="text-primary" /> GitHub:
            </span>
            github.com/yourusername
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default MoreInfo;
