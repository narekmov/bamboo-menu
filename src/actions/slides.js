import { GET_SLIDES } from '../constants/slides';
import { getSlides } from '../service';

export const addSlides = (token) => dispatch => {
  getSlides(token).then(res =>
    dispatch({
      type: GET_SLIDES,
      payload: res.slides
    })).catch(err => console.log(err));
};
