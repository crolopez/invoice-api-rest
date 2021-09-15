import { InvoiceHandlerResponse } from '../types/InvoiceStatus'

export default class InvoiceHandler {
  static registerInvoice (): InvoiceHandlerResponse {
    return {
      success: true,
    }
  }
}
