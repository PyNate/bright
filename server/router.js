import express from 'express';
import * as eventsController from './controllers/eventsController';
import * as categoriesController from './controllers/categoriesController';

const router = express.Router();

router.get('/events', eventsController.getEvents);
router.post('/events', eventsController.createEvent);
router.put('/events/:id', eventsController.editEvent);
router.delete('/events/:id', eventsController.deleteEvent);

router.get('/events/:id/categories', categoriesController.getCategoriesForEvent);

router.get('/categories', categoriesController.getCategories);
router.put('/categories/:id', categoriesController.updateCategory);

export default router;
