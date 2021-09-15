import InvoiceHandler from '../../../src/modules/InvoiceHandler'

describe('Class InvoiceHandler', () => {
  test('#registerInvoice: the invoice is registered', async () => {
    const result = InvoiceHandler.registerInvoice()
    expect(result).toStrictEqual({ success: true })
  })
})
