import { InvoiceDoc } from './InvoiceDoc'

export interface InvoiceResponse {
  success: boolean,
  errorMessage?: string,
  invoices?: InvoiceDoc[]
}
