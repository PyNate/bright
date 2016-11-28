import Actions from '../../constants/actionTypeConstants';

export default function categories(state = [], action) {
  if (action.type === Actions.CATEGORIES_LOAD) {
    return action.categories;
  }
  return state;
}
