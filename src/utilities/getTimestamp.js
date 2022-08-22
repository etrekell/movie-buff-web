export function getTimestamp() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();

  const formattedMonth = month < 10 ? `0${month}` : `${month}`;
  const ymd = `${year}-${formattedMonth}-${day}`;
  const hmsm = `${hours}:${minutes}:${seconds}-${milliseconds}`;

  return `${ymd}_${hmsm}`;
}
