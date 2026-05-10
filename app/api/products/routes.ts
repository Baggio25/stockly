import { db } from "@/lib/prisma";

//Foi criado um exemplo de como ficaria utilizar http request
export async function GET() {
  const products = await db.product.findMany({});

  return Response.json(products, { status: 200 });
}
