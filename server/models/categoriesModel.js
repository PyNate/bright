import * as mUtils from '../utils/modelHelpers';
import Tables from '../../constants/tableConstants';

export function getAll() {
  return mUtils.getAllFromTable(Tables.CATEGORIES);
}

export function insert(category) {
  // Can also be used for an array of categories
  return mUtils.insertInTable(category, Tables.CATEGORIES);
}

export function update(category) {
  return mUtils.updateInTable(category, Tables.CATEGORIES);
}

export function deleteByIds(ids) {
  return mUtils.deleteByIdsFromTable(ids, Tables.CATEGORIES);
}
