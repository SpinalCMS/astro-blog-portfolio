import * as timeago from "timeago.js"

export function timeAgo(date) {
    return timeago.format(date);
}

export function fullDate(date) {
    const badDate = new Date(date);
    const formatted = Intl.DateTimeFormat('en-US').format(badDate);

    return formatted;
}