import { prisma } from "@/lib/prisma";

function getWeekNumber(date) {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear =
    (date - firstDayOfYear) / 86400000 + firstDayOfYear.getDay() + 1;
  return Math.ceil(pastDaysOfYear / 7);
}

function isBot(userAgent) {
  if (!userAgent) return true;
  return /bot|crawl|spider|slurp|google|bing|yandex/i.test(userAgent);
}

export async function GET(req) {
  const now = new Date();

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    req.headers.get("x-real-ip") ||
    "unknown";

  const userAgent = req.headers.get("user-agent");

  // Ambil data counter sekarang (buat fallback)
  const currentVisit = await prisma.websiteVisit.findUnique({
    where: { id: 1 },
  });

  // 🚫 Jika bot → jangan tambah, tapi tetap kirim data
  if (isBot(userAgent)) {
    return Response.json({
      total: Number(currentVisit?.total || 0),
      daily: currentVisit?.daily || 0,
      weekly: currentVisit?.weekly || 0,
      monthly: currentVisit?.monthly || 0,
      yearly: currentVisit?.yearly || 0,
    });
  }

  // 🕒 Awal hari ini
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  // Cek apakah IP sudah dihitung hari ini
  const existingVisitor = await prisma.visitorLog.findFirst({
    where: {
      ip,
      visitDate: { gte: todayStart },
    },
  });

  // Kalau sudah dihitung → jangan tambah, tapi tetap kirim data
  if (existingVisitor) {
    return Response.json({
      total: Number(currentVisit?.total || 0),
      daily: currentVisit?.daily || 0,
      weekly: currentVisit?.weekly || 0,
      monthly: currentVisit?.monthly || 0,
      yearly: currentVisit?.yearly || 0,
    });
  }

  // Simpan visitor baru
  await prisma.visitorLog.create({
    data: { ip, userAgent },
  });

  const visit = currentVisit;
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
