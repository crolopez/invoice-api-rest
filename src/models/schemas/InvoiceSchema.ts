import { Schema } from 'mongoose'

const InvoiceSchema = new Schema(
  {
    invoiceId: { type: String, unique: true },
    supplier: String,
    dateIssued: String,
    currency: String,
    amount: Number,
    description: String,
  },
  {
    timestamps: {
      createdAt: 'created_at' ,
      updatedAt: 'updated_at',
    },
  }
)

export { InvoiceSchema }
