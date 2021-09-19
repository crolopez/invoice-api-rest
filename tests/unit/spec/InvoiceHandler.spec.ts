import InvoiceHandler from '../../../src/modules/InvoiceHandler'
import Invoice from '../../../src/models/Invoice'

describe('Class InvoiceHandler', () => {
  const testInvoiceId = '5e3e0b21-e98a-4480-bfb7-49e8dc61f551'
  const testInvoice = {
    invoiceId: testInvoiceId,
    suplier: 'Fake supplier',
    dateIssued: '2019-10-10 13:30:01 T+0210',
    currency: 'EUR',
    amount: 1000.00,
    description: 'New projector for confenrece room',
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('#registerInvoice: the invoice is registered', async () => {
    Invoice.init = jest.fn()
    Invoice.create = jest.fn()

    const result = await InvoiceHandler.registerInvoice(testInvoice)

    expect(Invoice.init).toBeCalled()
    expect(Invoice.create).toBeCalled()
    expect(result).toStrictEqual({ success: true })
  })

  test('#getInvoice: the invoice is returned', async () => {
    Invoice.find = jest.fn().mockResolvedValueOnce([testInvoice])

    const result = await InvoiceHandler.getInvoice(testInvoiceId)

    expect(Invoice.find).toBeCalledWith({ invoiceId: testInvoiceId })
    expect(result).toStrictEqual({
      success: true,
      invoices: [testInvoice],
    })
  })

  test('#getInvoice: the invoice is not found', async () => {
    Invoice.find = jest.fn().mockResolvedValueOnce([])

    const result = await InvoiceHandler.getInvoice(testInvoiceId)

    expect(result).toStrictEqual({
      success: false,
      errorMessage: 'Invoice not found',
    })
  })

  test('#getInvoices: the invoices are returned', async () => {
    Invoice.find = jest.fn().mockResolvedValueOnce([testInvoice, testInvoice])

    const result = await InvoiceHandler.getInvoices()

    expect(Invoice.find).toBeCalledWith({ })
    expect(result).toStrictEqual({
      success: true,
      invoices: [testInvoice, testInvoice],
    })
  })

  test('#getInvoices: there are not invoices', async () => {
    Invoice.find = jest.fn().mockResolvedValueOnce([])

    const result = await InvoiceHandler.getInvoices()

    expect(result).toStrictEqual({
      success: true,
      invoices: [],
    })
  })

  test('#deleteInvoice: the invoice is deleted', async () => {
    Invoice.findOneAndDelete = jest.fn().mockResolvedValueOnce(testInvoiceId)

    const result = await InvoiceHandler.deleteInvoice(testInvoiceId)

    expect(Invoice.findOneAndDelete).toBeCalledWith({ invoiceId: testInvoiceId })
    expect(result).toStrictEqual({ success: true })
  })

  test('#deleteInvoice: the invoice is not found', async () => {
    Invoice.findOneAndDelete = jest.fn().mockResolvedValueOnce(null)

    const result = await InvoiceHandler.deleteInvoice(testInvoiceId)

    expect(result).toStrictEqual({
      success: false,
      errorMessage: 'Invoice not found',
    })
  })
})
