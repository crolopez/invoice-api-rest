import Invoice from '../models/Invoice'
import { InvoiceResponse } from '../types/InvoiceResponse'
import { InvoiceBody } from '../types/InvoiceBody'

export default class InvoiceHandler {
  static async registerInvoice(invoice: InvoiceBody): Promise<InvoiceResponse> {
    const invoiceEntry = new Invoice(invoice)

    await Invoice.init()
    await Invoice.create(invoiceEntry)

    return {
      success: true,
    }
  }

  static async getInvoice(invoiceId: string): Promise<InvoiceResponse> {
    const response: InvoiceResponse = { success: true }
    try {
      const invoices = await Invoice.find({ invoiceId: invoiceId })
      if (invoices.length == 0) {
        response.success = false
        response.errorMessage = 'Invoice not found'
      } else {
        response.invoices = invoices
      }
    } catch(e) {
      response.success = false
      response.errorMessage = `Unhandled error: ${e}`
    }
    return response
  }

  static async getInvoices(): Promise<InvoiceResponse> {
    const response: InvoiceResponse = { success: true }
    try {
      response.invoices = await Invoice.find({})
    } catch(e) {
      response.success = false
      response.errorMessage = `Unhandled error: ${e}`
    }
    return response
  }

  static async deleteInvoice(invoiceId: string): Promise<InvoiceResponse> {
    const response: InvoiceResponse = { success: true }
    try {
      const removedInvoice = await Invoice.findOneAndDelete({ invoiceId: invoiceId })
      if (removedInvoice == null) {
        response.success = false
        response.errorMessage = 'Invoice not found'
      }
    } catch(e) {
      response.success = false
      response.errorMessage = `Unhandled error: ${e}`
    }
    return response
  }
}
