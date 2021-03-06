import { NextApiRequest, NextApiResponse } from "next";
import { createPool, sql } from "slonik";
import config from "../../config.js";

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const pool = createPool(config.POSTGRES_CONNECTION_STRING);
  await pool.connect(async connection => {
    let result = await connection.query(
      sql`SELECT * FROM product WHERE name = 'lolo'`,
    );

    if (result.rowCount < 1) {
      await connection.query(
        sql`INSERT INTO product (name, price, spicyLevel, photo) VALUES ('lololo', '12.90', 'medium', '/static/salsa-picante.jpg')`,
      );
      result = await connection.query(sql`SELECT * FROM product`);
    }

    res.status(200).json(result);
  });
};
