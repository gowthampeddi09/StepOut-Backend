const { createTrainInDB, updateTrainInDB, deleteTrainFromDB } = require('../models/trainModel');

// Controller to create a new train
const createTrain = async (req, res) => {
  try {
    const { train_name, source, destination, seat_capacity, available_seats, arrival_time_at_source, arrival_time_at_destination } = req.body;
    const trainId = await createTrainInDB(train_name, source, destination, seat_capacity, available_seats, arrival_time_at_source, arrival_time_at_destination);
    res.status(201).json({ status: 'Train created successfully', train_id: trainId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to update train details
const updateTrain = async (req, res) => {
  try {
    const { trainId } = req.params;
    const { train_name, source, destination, seat_capacity, available_seats, arrival_time_at_source, arrival_time_at_destination } = req.body;
    await updateTrainInDB(trainId, train_name, source, destination, seat_capacity, available_seats, arrival_time_at_source, arrival_time_at_destination);
    res.status(200).json({ status: 'Train updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to delete a train
const deleteTrain = async (req, res) => {
  try {
    const { trainId } = req.params;
    await deleteTrainFromDB(trainId);
    res.status(200).json({ status: 'Train deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createTrain, updateTrain, deleteTrain };
