import House from '../models/House';
import User from '../models/User';

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

  async update(request, response) {
    const { filename } = request.file;
    const { house_id } = request.params;
    const { description, price, location, status } = request.body;
    const { user_id } = request.headers;

    const user = await User.findById(user_id);
    const houses = await House.findById(house_id);

    if(String(user._id) !== String(houses.user)) {
      return response.status(401).json({ error: 'Não autorizado.' });
    }

    await House.updateOne({ _id: house_id }, {
      user: user_id,
      thumbnail: filename,
      description,
      price,
      location,
      status,
    });

    return response.send();
  }

}

export default new HouseController(); 