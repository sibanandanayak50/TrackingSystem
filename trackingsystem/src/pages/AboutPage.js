import { useEffect } from "react";
import "../styles/style.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import store from "../store/index.js";

const About = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchApi = () => {
    fetch("apiEndpoint", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: store.getState(),
    })
      .then((res) => res.json())
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    dispatch({
      type: "PAGE_VISIT",
      payload: {
        user_id: "",
        timestamp: JSON.parse(JSON.stringify(new Date())),
        activity_type: "page_visit",
        page_name: "Home Page",
        additional_info: {
          device_info: { device_type: "", device_model: "" },
        },
      },
    });
  }, []);

  const handleClick = () => {
    navigate("/");
    dispatch({
      type: "CLICK",
      payload: {
        user_id: "",
        timestamp: JSON.parse(JSON.stringify(new Date())),
        activity_type: "click",
        page_name: "About Page",
        additional_info: {
          device_info: { device_type: "", device_model: "" },
        },
      },
    });

    dispatch({
      type: "REDIRECTION",
      payload: {
        user_id: "",
        timestamp: JSON.parse(JSON.stringify(new Date())),
        activity_type: "redirection",
        page_name: "About Page",
        additional_info: {
          device_info: { device_type: "", device_model: "" },
        },
      },
    });
    fetchApi();
  };

  const handleLinkClick = () => {
    dispatch({
      type: "CLICK",
      payload: {
        user_id: "",
        timestamp: JSON.parse(JSON.stringify(new Date())),
        activity_type: "click",
        page_name: "About Page",
        additional_info: {
          device_info: { device_type: "", device_model: "" },
        },
      },
    });
    dispatch({
      type: "REDIRECTION",
      payload: {
        user_id: "",
        timestamp: JSON.parse(JSON.stringify(new Date())),
        activity_type: "redirection",
        page_name: "external page",
        additional_info: {
          device_info: { device_type: "", device_model: "" },
        },
      },
    });
    fetchApi();
  };
  return (
    <div className="mainContainer">
      <header>
        <h1>Welcome to About Page</h1>
      </header>
      <div className="container">
        <button onClick={handleClick}>Go Back To Home Page</button>
        <a
          href="https://www.facebook.com"
          name="Facebook"
          target="_blank"
          onClick={handleLinkClick}
        >
          Facebook
        </a>
      </div>
    </div>
  );
};

export default About;
