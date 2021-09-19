import mongoose from 'mongoose'
import { InvoiceSchema } from './schemas/InvoiceSchema'
import { InvoiceDoc } from '../types/InvoiceDoc'

export default mongoose.model<InvoiceDoc>('Invoices', InvoiceSchema)
