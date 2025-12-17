import { prisma } from "../../../lib/prisma";


export async function GET() {
  const visit = await prisma.websiteVisit.upsert({
    where: { id: 1 },
    update: { total: { increment: 1 } },
    create: { id: 1, total: 1 },
  });

  return Response.json({
    visits: Number(visit.total),
  });
}
