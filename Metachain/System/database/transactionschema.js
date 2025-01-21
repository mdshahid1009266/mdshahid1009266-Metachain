import mongoose from "mongoose";

const Transaction = new mongoose.Schema({
  crypto: {
    type: String,
    required: true,
    enum: ['BTC', 'ETH', 'USDT'], // Accepted crypto values
  },
  currency: {
    type: String,
    required: true,
    enum: ['USD', 'EUR', 'BDT'], // Accepted currency values
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: ['Bkash', 'Nagad', 'Rocket', 'Paypal'], // Accepted payment methods
  },
  amount: {
    type: Number,
    required: true,
    min: 0.01, // Minimum value to ensure positive amounts
  },
  transactionID: {
    type: String,
    required: true,
    unique: true, // Ensure transaction IDs are unique
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set the creation date
  },
})

export default mongoose.model("Transaction", Transaction)
