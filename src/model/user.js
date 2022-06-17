import mongoose from 'mongoose'
import crypto from 'crypto'

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
    }
  }
)
export const UserModel = mongoose.model('User', schema)