import { format } from "date-fns";

export function prettyDate(d) {
  return format(d, "EEE, LLL do yyyy");
}

export function prettyTime(d) {
  return format(d, "hh:mm");
}
