import { prisma } from "../../../lib/prisma";

export async function GET() {
  const now = new Date();

  const visit = await prisma.websiteVisit.upsert({
    where: { id: 1 },
    update: {
      total: { increment: 1 },
      daily: { increment: 1 },
      weekly: { increment: 1 },
      monthly: { increment: 1 },
      yearly: { increment: 1 },
      lastHit: now,
    },
    create: {
      id: 1,
      total: 1,
      daily: 1,
      weekly: 1,
      monthly: 1,
      yearly: 1,
      lastHit: now,
    },
  });

  return Response.json({
    total: Number(visit.total),
    daily: visit.daily,
    weekly: visit.weekly,
    monthly: visit.monthly,
    yearly: visit.yearly,
  });
}
