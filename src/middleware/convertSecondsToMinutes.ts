export function convertSecondsToMinutesAndSeconds(seconds: number) {
  const minutes = Math.floor(seconds / 60)
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes
  const remainingSeconds = seconds % 60
  const output =
    formattedMinutes +
    ':' +
    (remainingSeconds < 10 ? '0' : '') +
    remainingSeconds
  return output
}
