import { AzureFunction, Context, HttpRequest } from '@azure/functions'

const handler: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  context.log('HTTP trigger function processed a request.')

  const name = (req.query.name || (req.body && req.body.name))
  const responseMessage = name
    ? `Hello,  ${name}. This HTTP triggered function executed successfully.`
    : 'This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.'

  context.res = {
    status: 200,
    body: responseMessage,
  }
}

export default handler




/*

import type { APIGatewayProxyHandler } from 'aws-lambda/trigger/api-gateway-proxy'
import { Message } from 'telegram-typings'
import { commandDispatcher } from './modules/commands/commandDispatcher'

const handle: APIGatewayProxyHandler = async (event: any) => {
  try {
    const { message } = JSON.parse(event.body)
    const response = await commandDispatcher(message as Message)
    return {
      body: JSON.stringify(response),
      statusCode: 200,
    }
  } catch (error) {
    return {
      body: JSON.stringify({ reason: error.message }),
      statusCode: 500,
    }
  }
}

export { handle }

*/