import { DateTime } from "luxon";

export function formatRelativeTime(datetime) {
  const time = DateTime.fromISO(datetime);
  const now = DateTime.local();

  if (now.hasSame(time, "day")) {
    return time.toFormat("HH:MM");
  }

  if (now.diff(time, "day").as("days") < 1) {
    return "Hier";
  }

  return time.toFormat("dd/MM/yyyy");
}
