import House from '../models/House'

class HouseController {

  async index(request, response) {
    const { status } = request.query;

    const houses = await House.find({ status });

    return response.json(houses);
  }

  async store(request, response) {
    const { filename } = request.file;
    const { description, price, location, status } = request.body;
    const { user_id } = request.headers;

    const house = await House.create({
      user: user_id,
      thumbnail: filename,
      description,
      price,
      location,
      status,
    });

    return response.json(house);
  }
}

export default new HouseController(); 