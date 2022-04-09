import { format } from "date-fns";

export function prettyDate(d: Date) {
  return format(d, "EEE, LLL do yyyy");
}

export function prettyTime(d: Date) {
  return format(d, "hh:mm");
}

export function prettyHour(d: Date) {
  return format(d, "hh");
}

export function prettyMin(d: Date) {
  return format(d, "mm");
}
