import { Corgis } from "../lib/sequelize";

export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { Allow: "POST" },
      body: "Method Not Allowed"
    };
  }

  const { name, instagram } = JSON.parse(event.body);

  //await Corgis.sync();
  await Corgis.bulkCreate([
    {
      name,
      instagram
    }
  ]);

  return {
    statusCode: 200,
    body: JSON.stringify({ name, instagram })
  };
}
