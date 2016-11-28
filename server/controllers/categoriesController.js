import * as EventsCategories from '../models/eventsCategoriesModel';
import * as Categories from '../models/categoriesModel';

export function getCategoriesForEvent(req, res) {
  const eventId = parseInt(req.url.split('/')[2], 10);
  return EventsCategories.getCategoriesByEventId(eventId)
    .then((categories) => {
      res.status(200).send(categories);
    });
}

export function getCategories(req, res) {
  return Categories.getAll()
    .then((categories) => {
      res.status(200).send(categories);
    });
}

export function updateCategory(req, res) {
  const updatedCategory = req.body;
  return Categories.update(updatedCategory)
    .then(() => {
      res.status(202).end();
    });
}
