
export interface InvoiceBody {
  invoiceId: string,
  supplier: string,
  dateIssued: string,
  currency: string,
  amount: number,
  description: string,
}
