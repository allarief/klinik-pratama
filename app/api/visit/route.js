import { prisma } from "@/lib/prisma";

function getWeekNumber(date) {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear =
    (date - firstDayOfYear) / 86400000 + firstDayOfYear.getDay() + 1;
  return Math.ceil(pastDaysOfYear / 7);
}

function isBot(userAgent) {
  if (!userAgent) return false; // kalau mau hitung semua, ubah ke false
  return /bot|crawl|spider|slurp|google|bing|yandex/i.test(userAgent);
}

export async function GET(req) {
  const now = new Date();
  const userAgent = req.headers.get("user-agent");

  // 🚫 Skip bot (hapus if ini kalau mau bot ikut dihitung)
  if (isBot(userAgent)) {
    return Response.json({ message: "Bot ignored" });
  }

  const visit = await prisma.websiteVisit.findUnique({
    where: { id: 1 },
  });

  const last = visit ? new Date(visit.lastHit) : now;

  const isNewDay =
    last.getDate() !== now.getDate() ||
    last.getMonth() !== now.getMonth() ||
    last.getFullYear() !== now.getFullYear();

  const isNewMonth =
    last.getMonth() !== now.getMonth() ||
    last.getFullYear() !== now.getFullYear();

  const isNewYear =
    last.getFullYear() !== now.getFullYear();

  const isNewWeek =
    getWeekNumber(last) !== getWeekNumber(now) ||
    last.getFullYear() !== now.getFullYear();

  const updated = await prisma.websiteVisit.upsert({
    where: { id: 1 },
    update: {
      total: { increment: 1 },
      daily: isNewDay ? 1 : { increment: 1 },
      weekly: isNewWeek ? 1 : { increment: 1 },
      monthly: isNewMonth ? 1 : { increment: 1 },
      yearly: isNewYear ? 1 : { increment: 1 },
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
    total: Number(updated.total),
    daily: updated.daily,
    weekly: updated.weekly,
    monthly: updated.monthly,
    yearly: updated.yearly,
  });
}
