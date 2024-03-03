class CrudRepository {
  constructor(model) {
    this.model = model;
  }
  async create(data) {
    try {
      const doc = await this.model.create(data);
      const result = await doc.save();
      return result;
    } catch (error) {
      console.log("inside crud repo");
      throw error;
    }
  }
  async destroy(id) {
    try {
      const result = await this.model.findByIdAndDelete(id);
      return result;
    } catch (error) {
      console.log("inside crud repo");
      throw error;
    }
  }
  async get(id) {
    try {
      const result = await this.model.findById(id);
      return result;
    } catch (error) {
      console.log("inside crud repo");
      throw error;
    }
  }
  async update(id, data) {
    try {
      const result = await this.model.findByIdAndUpdate(id, data, {
        new: true,
      });
      return result;
    } catch (error) {
      console.log("inside crud repo");
      throw error;
    }
  }
}
module.exports = CrudRepository;
