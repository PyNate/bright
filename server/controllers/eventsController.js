import * as Events from '../models/eventsModel';
import * as EventsCategories from '../models/eventsCategoriesModel';
import * as Categories from '../models/categoriesModel';
import arrayDiff from '../utils/arrayDiff';

function formatServerEvent(clientEvent) {
  return {
    title: clientEvent.title,
    description: clientEvent.description,
    start_date: clientEvent.startDate,
    end_date: clientEvent.endDate,
    is_featured: clientEvent.isFeatured,
  };
}

function formatClientEvent(serverEvent) {
  return {
    id: serverEvent.id,
    title: serverEvent.title,
    description: serverEvent.description,
    startDate: serverEvent.start_date,
    endDate: serverEvent.end_date,
    isFeatured: serverEvent.is_featured,
  };
}

function filterNewCategories(categories) {
  return categories.filter(cat => !cat.id);
}

function getCategoryIds(newIds, categories) {
  const result = newIds.slice();
  categories.forEach((category) => {
    if (category.id) {
      result.push(category.id);
    }
  });
  return result;
}

function handleNewCategories(newCategories) {
  if (!newCategories.length) {
    return [];
  }
  return Categories.insert(newCategories);
}

export function getEvents(req, res) {
  return Events.getAll()
    .then((data) => {
      const formattedData = data.map(event => formatClientEvent(event));
      res.status(200).send(formattedData);
    });
}

export function createEvent(req, res) {
  // [todo]: Reduce database operations
  const reqData = req.body;
  const newEvent = formatServerEvent(reqData);
  const newCategories = filterNewCategories(reqData.categories);
  let eventId;
  return Events.insert(newEvent)
    .then((data) => {
      eventId = data[0]; // data is an array of ids, but only one new event will be created
      return null;
    })
    .then(() => handleNewCategories(newCategories))
    .then((newCategoryIds) => {
      const categoryIds = getCategoryIds(newCategoryIds, reqData.categories);
      return EventsCategories.linkCategoriesToEvent(categoryIds, eventId);
    })
    .then(() => {
      res.status(201).end();
    });
}

export function editEvent(req, res) {
  const reqData = req.body;
  const updatedEvent = formatServerEvent(reqData);
  const updatedId = reqData.id;
  const newCategories = filterNewCategories(reqData.categories);
  const categoriesDiff = {};
  let updatedCategoryIds;
  updatedEvent.id = updatedId;
  return Events.update(updatedEvent)
    .then(() => handleNewCategories(newCategories))
    .then((newCategoryIds) => {
      updatedCategoryIds = getCategoryIds(newCategoryIds, reqData.categories);
      return EventsCategories.getCategoriesByEventId(updatedId);
    })
    .then((oldCategories) => {
      const oldCategoryIds = getCategoryIds([], oldCategories);
      categoriesDiff.toAdd = arrayDiff(updatedCategoryIds, oldCategoryIds);
      categoriesDiff.toDelete = arrayDiff(oldCategoryIds, updatedCategoryIds);
      console.log(categoriesDiff);
      return null;
    })
    .then(() => {
      if (!categoriesDiff.toAdd) {
        return null;
      }
      return EventsCategories.linkCategoriesToEvent(categoriesDiff.toAdd, updatedId);
    })
    .then(() => {
      if (!categoriesDiff.toDelete) {
        return null;
      }
      return EventsCategories.deleteByEventAndCategories(updatedId, categoriesDiff.toDelete);
    })
    .then(() => {
      res.status(202).end();
    });
}

export function deleteEvent(req, res) {
  const eventId = parseInt(req.url.split('/')[2], 10);
  return Events.deleteByIds([eventId])
    .then(() => {
      res.status(202).end();
    });
}
