import { prisma } from "@/lib/prisma";

function getISOWeekKey(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return `${d.getUTCFullYear()}-W${weekNo}`;
}

export async function GET() {
  try {
    const now = new Date();

    const dayKey   = now.toISOString().split("T")[0];
    const monthKey = `${now.getFullYear()}-${now.getMonth() + 1}`;
    const yearKey  = `${now.getFullYear()}`;
    const weekKey  = getISOWeekKey(now);

    const visit = await prisma.websiteVisit.findUnique({ where: { id: 1 } });

    const updated = await prisma.websiteVisit.upsert({
      where: { id: 1 },
      update: {
        total: { increment: 1 },

        daily: visit?.dailyDate === dayKey ? { increment: 1 } : 1,
        dailyDate: dayKey,

        weekly: visit?.weeklyKey === weekKey ? { increment: 1 } : 1,
        weeklyKey: weekKey,

        monthly: visit?.monthlyKey === monthKey ? { increment: 1 } : 1,
        monthlyKey: monthKey,

        yearly: visit?.yearlyKey === yearKey ? { increment: 1 } : 1,
        yearlyKey: yearKey,
      },
      create: {
        id: 1,
        total: 1,

        daily: 1,
        dailyDate: dayKey,

        weekly: 1,
        weeklyKey: weekKey,

        monthly: 1,
        monthlyKey: monthKey,

        yearly: 1,
        yearlyKey: yearKey,
      },
    });

    return Response.json({
      total: Number(updated.total),
      daily: updated.daily,
      weekly: updated.weekly,
      monthly: updated.monthly,
      yearly: updated.yearly,
    });

  } catch (error) {
    console.error("VISIT API ERROR:", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
