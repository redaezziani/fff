// Date: 04/18/2021
import ReactLottie from "react-lottie";
import animationData from "./json/spider.json";
const LottieAnimation = ({...props}) => {
  const {id}=props
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      container: document.getElementById(id),
      renderer: "svg",
      loop: true,
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div id={id}>
      <ReactLottie options={defaultOptions} width={300} height={200} />
    </div>
  );
};

export default LottieAnimation;
