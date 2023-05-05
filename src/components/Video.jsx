import background from "../assets/videoBg.mp4";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import "./custom.css"
const Video = () => {

  return (
    <div className="relative">
      <div className="">
        <video className="video" src={background} autoPlay loop muted></video>
      </div>
      <div className="content ">
        <h2 className="text-6xl font-bold text-[#50dec8]">Fastest Way To Grow Your Business</h2>
        <p className="text-center mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Eveniet inventore delectus, <br />veritatis ipsa placeat consectetur hic praesentium necessitatibus earum ut?</p>
       <div className="">
       <button className="bg-[#293f75]  font-bold rounded-md mt-5 text-white pt-3 pb-3 pr-7 pl-7">
                {" "}
               
               Get Started
              </button>
       <button className="bg-[#293f75] ml-10 font-bold rounded-md mt-5 text-white pt-3 pb-3 pr-7 pl-7">
                {" "}
               <PlayCircleFilledWhiteIcon/>
               <span className="ml-3">Watch The Video</span>
              </button>
       </div>
      </div>
    </div>
  );
};

export default Video;
