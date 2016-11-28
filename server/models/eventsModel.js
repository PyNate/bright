import * as m from '../utils/modelHelpers';
import Tables from '../../constants/tableConstants';

export function getAll() {
  return m.getAllFromTable(Tables.EVENTS);
}

export function insert(event) {
  return m.insertInTable(event, Tables.EVENTS);
}

export function update(event) {
  return m.updateInTable(event, Tables.EVENTS);
}

export function deleteByIds(ids) {
  return m.deleteByIdsFromTable(ids, Tables.EVENTS);
}
