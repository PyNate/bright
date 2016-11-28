import db from '../db';
import * as mUtils from '../utils/modelHelpers';
import Tables from '../../constants/tableConstants';

export function getCategoriesByEventId(eventId) {
  return db(Tables.CATEGORIES)
    .join(Tables.EVENTS_CATEGORIES, `${Tables.CATEGORIES}.id`, 'category_id')
    .select(`${Tables.CATEGORIES}.id`, `${Tables.CATEGORIES}.name`)
    .where(`${Tables.EVENTS_CATEGORIES}.event_id`, eventId);
}

export function deleteByEventAndCategories(eventId, categoryIds) {
  return db(Tables.EVENTS_CATEGORIES)
    .whereIn('category_id', categoryIds)
    .andWhere({ event_id: eventId })
    .del();
}

export function linkCategoriesToEvent(categoryIds, eventId) {
  const eventCategory = categoryIds.map((categoryId) => { // eslint-disable-line arrow-body-style
    return {
      category_id: categoryId,
      event_id: eventId,
    };
  });
  return mUtils.insertInTable(eventCategory, Tables.EVENTS_CATEGORIES);
}
