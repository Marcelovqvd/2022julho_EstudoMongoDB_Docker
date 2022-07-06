import mongoose from 'mongoose'
import crypto from 'crypto'

const schema = new mongoose.Schema(({
  title:  String,
  author: String,
  date: { type: Date, default: Date.now },
  hidden: Boolean
}))
export const BookModel = mongoose.model('Book', schema)