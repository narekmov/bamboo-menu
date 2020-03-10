import { GET_SLIDES } from '../constants/slides';

const initialState = {
  slides: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SLIDES:
      console.log(action.pay);
      
      return { ...state, slides: [...action.payload] };
    default:
      return { ...state };
  }
};
