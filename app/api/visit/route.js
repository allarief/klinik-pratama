import { prisma } from "../../../lib/prisma";

export async function GET() {
  const now = new Date();

  const visit = await prisma.websiteVisit.findUnique({
    where: { id: 1 },
  });

  // Jika belum ada data
  if (!visit) {
    const created = await prisma.websiteVisit.create({
      data: {
        id: 1,
        total: 1,
        daily: 1,
        weekly: 1,
        monthly: 1,
        yearly: 1,
        lastHit: now,
      },
    });

    return Response.json(created);
  }

  const last = new Date(visit.lastHit);

  const isNewDay =
    last.getDate() !== now.getDate() ||
    last.getMonth() !== now.getMonth() ||
    last.getFullYear() !== now.getFullYear();

  const isNewMonth =
    last.getMonth() !== now.getMonth() ||
    last.getFullYear() !== now.getFullYear();

  const isNewYear =
    last.getFullYear() !== now.getFullYear();

  const updated = await prisma.websiteVisit.update({
    where: { id: 1 },
    data: {
      total: { increment: 1 },

      daily: isNewDay ? 1 : { increment: 1 },
      monthly: isNewMonth ? 1 : { increment: 1 },
      yearly: isNewYear ? 1 : { increment: 1 },

      lastHit: now,
    },
  });

  return Response.json({
    total: Number(updated.total),
    daily: updated.daily,
    monthly: updated.monthly,
    yearly: updated.yearly,
  });
}
