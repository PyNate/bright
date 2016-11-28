import db from '../db';

export function getAllFromTable(tableName) {
  return db.select().from(tableName);
}

export function insertInTable(item, tableName) {
  return db(tableName).insert(item, 'id');
}

export function updateInTable(item, tableName) {
  return db.select()
    .from(tableName)
    .where({ id: item.id })
    .update({ ...item });
}

export function deleteByPropFromTable(prop, propName, tableName) {
  return db(tableName)
    .where({ [propName]: prop })
    .del();
}

export function deleteByIdsFromTable(ids, tableName) {
  return db(tableName)
    .whereIn('id', ids)
    .del();
}
