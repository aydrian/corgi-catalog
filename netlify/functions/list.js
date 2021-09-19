import { Corgis } from "../lib/sequelize";

export async function handler(event, context) {
  //await Corgis.sync();
  const corgis = await Corgis.findAll();
  return {
    statusCode: 200,
    body: JSON.stringify({ corgis })
  };
}
