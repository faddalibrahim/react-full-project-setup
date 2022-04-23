// libraries
import { useParams } from "react-router-dom";

// components
import Error404Svg from "./Error404Svg";

// styles
import error404Styles from "./error404.module.scss";

const Error404 = (props) => {
  const params = useParams();
  console.log(apple);
  return (
    <div className={error404Styles.error404}>
      <center>
        <Error404Svg />
        <span>
          ooops! looks like we don't have a(n) <strong>{params["*"]}</strong>{" "}
          page
        </span>
      </center>
    </div>
  );
};

export default Error404;
