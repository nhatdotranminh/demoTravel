import { createStore } from "redux";

const defaultState = {
  place: [
    { id: 1, en: "action", vn: "hành động", memorized: true, isShow: false },
    { id: 2, en: "actor", vn: "diễn viên ", memorized: true, isShow: false },
    { id: 3, en: "activity", vn: "hoạt động", memorized: false, isShow: false },
    { id: 4, en: "active", vn: " chủ động", memorized: true, isShow: false }
  ],
  filterStatus: "SHOW ALL",
  isAdding: false
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "FILTER_SHOW_ALL":
      return { ...state, filterStatus: "SHOW_ALL" };
    case "FILTER_MEMORIZED":
      return { ...state, filterStatus: "MEMORIZED" };
    case "FILTER_NEED_PRACTICE":
      return { ...state, filterStatus: "NEED_PRACTICE" };
    case "TOllGE_MEMORIZED":
      return {
        ...state,
        arrWords: state.arrWords.map(e =>{
          if(e.id !== action.id) return e;
          return{...e, memorized: !e.memorized}
        })
      }
    default:
      break;
  }
  return state;
};

const store = createStore(reducer);
module.exports = store;
