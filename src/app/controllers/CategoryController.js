const CategoryRepository = require('../repositorys/CategoriesRepository');
require('express-async-errors');

class CategoryController {
  async index(request, response) {
    const categories = await CategoryRepository.findAll();

    return response.json(categories);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'name is required' });
    }

    const category = await CategoryRepository.create({ name });

    return response.json(category);
  }
}

module.exports = new CategoryController();
