import { ReportHandler } from 'web-vitals';

export function logInfo(...messages: any[]) {
  // eslint-disable-next-line no-console
  console.log(...messages);
}

export function logWarning(...messages: any[]) {
  // eslint-disable-next-line no-console
  console.warn(...messages);
}

export function logError(...messages: any[]) {
  // eslint-disable-next-line no-console
  console.error(...messages);
}

export async function reportWebVitals(onPerfEntry?: ReportHandler) {
  if (!onPerfEntry) {
    return;
  }

  const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import(
    'web-vitals'
  );

  getCLS(onPerfEntry);
  getFID(onPerfEntry);
  getFCP(onPerfEntry);
  getLCP(onPerfEntry);
  getTTFB(onPerfEntry);
}
