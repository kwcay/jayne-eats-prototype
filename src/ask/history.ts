export function getHistoryPrompt(name: string) {
  const time = Intl.DateTimeFormat('en', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(new Date());

  return `${name} @ ${time}:`;
}

export function getHistoryLine(name: string, msg: string) {
  return `${getHistoryPrompt(name)} ${msg}`;
}
