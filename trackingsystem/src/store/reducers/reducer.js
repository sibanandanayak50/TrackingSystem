const initialState = {
  user_id: "",
  timestamp: "",
  activity_type: "",
  page_name: "",
  additional_info: {
    device_info: { device_type: "", device_model: "" },
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PAGE_VISIT":
      return {
        ...state,
        timestamp: action.payload.timestamp,
        activity_type: action.payload.activity_type,
        page_name: action.payload.page_name,
      };
    case "REDIRECTION":
      return {
        ...state,
        timestamp: action.payload.timestamp,
        activity_type: action.payload.activity_type,
        page_name: action.payload.page_name,
      };
    case "CLICK":
      return {
        ...state,
        timestamp: action.payload.timestamp,
        activity_type: action.payload.activity_type,
        page_name: action.payload.page_name,
      };
    default:
      return;
  }
};

export default rootReducer;
