import { combineReducers } from 'redux';
import order from './order';
import language from './language';
import sections from './sections';
import categories from './categories';
import products from './products';
import slides from './slides';
import login from './login';

export default function getRootReducer(navReducer) {
  return combineReducers({
    nav: navReducer,
    order,
    language,
    sections,
    categories,
    products,
    login,
    slides,
  });
}
