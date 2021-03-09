const mongoose = require('mongoose');

const { Schema } = mongoose;

const customerLogEntrySchema = new Schema(
  {
    customer_name: {
      type: String,
      required: true,
    },
    customer_email: String,
    customer_number: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const customerLogEntry = mongoose.model(
  'customerLogEntry',
  customerLogEntrySchema
);

module.exports = customerLogEntry;
