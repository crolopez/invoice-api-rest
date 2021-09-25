import mongoose from 'mongoose'

export interface InvoiceDoc extends mongoose.Document {
  invoiceId: string,
  supplier: string,
  dateIssued: string,
  currency: string,
  amount: number,
  description: string,
}
