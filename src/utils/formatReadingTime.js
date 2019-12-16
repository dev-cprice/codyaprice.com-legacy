export default function formatReadingTime(minutes = 1) {
  // can't figure out how to update the `timeToRead` markdown remark query
  // field, so I'll just pad the time here to match what I feel is the _real_
  // read time for most posts... will iterate on it
  const paddedMinutes = Math.floor((minutes || 1) / 0.4375)

  const cups = Math.round(paddedMinutes / 5)
  if (cups > 5) {
    return `${new Array(Math.round(cups / Math.E))
      .fill("🍱")
      .join("")} ${paddedMinutes} min read`
  } else {
    return `${new Array(cups || 1)
      .fill("☕️")
      .join("")} ${paddedMinutes} min read`
  }
}
