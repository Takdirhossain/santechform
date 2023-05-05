import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import DownloadIcon from "@mui/icons-material/Download";
import LoginIcon from "@mui/icons-material/Login";
import InstagramIcon from "@mui/icons-material/Instagram";
import RedditIcon from "@mui/icons-material/Reddit";
const Topnav = () => {
  return (
    <div className="bg-[#293f75] h-12 text-sm text-white w-full flex justify-between pl-5 pr-5 ">
      <div className="flex items-center ">
        <div className="mr-2 text-[#87e3d8]">
          <AccessTimeIcon />
        </div>
        <div>Moday To Friday <span className="text-[#8b98b9]">8am to 8pm</span> </div>
        <div className="flex items-center ml-10">
          <div className="mr-2 text-[#87e3d8]">
            <LocationOnIcon />
          </div>
          <div>
            <h2>Offices <span className="text-[#8b98b9]">Gangtok, Sikkim WC1B 4EA</span></h2>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex ">
          <button className="bg-[#50dec8] pt-2 pb-2 pr-5 pl-5 rounded-sm">Download <span><DownloadIcon/></span></button>
          <button className="bg-[#50dec8] pt-2 pb-2 pr-5 pl-5 rounded-sm ml-5">Login <LoginIcon/> </button>
        </div>
        <div className="ml-5 text-[#50dec8]">
          <InstagramIcon className="mr-3 cursor-pointer" />
          <FacebookIcon className="mr-3 cursor-pointer"/>
          <RedditIcon className="mr-3 cursor-pointer" />
          <TwitterIcon />
        </div>
      </div>
    </div>
  );
};

export default Topnav;
