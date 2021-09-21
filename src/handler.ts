import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import { connectMongo } from './utils/mongo'
import { InvoiceResponse } from './types/InvoiceResponse'
import InvoiceHandler from './modules/InvoiceHandler'

async function initMongo(context: Context) {
  context.log('Starting MongoDB connection.')
  await connectMongo()
}

async function processRequest(req: HttpRequest): Promise<InvoiceResponse> {
  switch (req.method) {
    case 'GET':
      return req.params.invoiceId == undefined ?
        await InvoiceHandler.getInvoices() :
        await InvoiceHandler.getInvoice(req.params.invoiceId)
    case 'POST':
      return await InvoiceHandler.registerInvoice(req.body)
    case 'DELETE':
      return await InvoiceHandler.deleteInvoice(req.params.invoiceId as string)
    default:
      return {
        success: false,
        errorMessage: `Invalid request method: ${req.method}`,
      }
  }
}

const requestHandler: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  try {
    initMongo(context)
    const result = await processRequest(req)
    context.res = {
      status: result.success ? 200 : 500,
      body: result,
    }
  } catch (error) {
    context.res = {
      status: 500,
      body: error.message,
    }
  }
}

export default requestHandler
