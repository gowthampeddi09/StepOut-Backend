const pool = require('../utils/db');

// Model to create a train in the database
const createTrainInDB = async (train_name, source, destination, seat_capacity, available_seats, arrival_time_at_source, arrival_time_at_destination) => {
  const [result] = await pool.query(
    'INSERT INTO trains (train_name, source, destination, seat_capacity, available_seats, arrival_time_at_source, arrival_time_at_destination) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [train_name, source, destination, seat_capacity, available_seats, arrival_time_at_source, arrival_time_at_destination]
  );
  return result.insertId;
};

// Model to update a train in the database
const updateTrainInDB = async (trainId, train_name, source, destination, seat_capacity, available_seats, arrival_time_at_source, arrival_time_at_destination) => {
  await pool.query(
    'UPDATE trains SET train_name = ?, source = ?, destination = ?, seat_capacity = ?, available_seats = ?, arrival_time_at_source = ?, arrival_time_at_destination = ? WHERE id = ?',
    [train_name, source, destination, seat_capacity, available_seats, arrival_time_at_source, arrival_time_at_destination, trainId]
  );
};

// Model to delete a train from the database
const deleteTrainFromDB = async (trainId) => {
  await pool.query('DELETE FROM trains WHERE id = ?', [trainId]);
};

module.exports = { createTrainInDB, updateTrainInDB, deleteTrainFromDB };
