/** Parse YYYY-MM-DD string to Date (noon local) */
export function parseDateString(str: string): Date | null {
  if (!str) return null;
  const d = new Date(str + 'T12:00:00');
  return isNaN(d.getTime()) ? null : d;
}

/** Format Date to YYYY-MM-DD for form inputs */
export function formatDateForForm(d: Date | null): string {
  if (!d) return '';
  return d.toISOString().slice(0, 10);
}

/** Parse HH:mm string to Date */
export function parseTimeString(str: string): Date | null {
  if (!str) return null;
  const [h, m] = str.split(':').map(Number);
  if (isNaN(h) || isNaN(m)) return null;
  return new Date(2000, 0, 1, h, m);
}

/** Format Date to HH:mm for form inputs */
export function formatTimeForForm(d: Date | null): string {
  if (!d) return '';
  return d.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

/** Format date string for display (e.g. "Mon, Mar 2, 2026") */
export function formatDateDisplay(dateStr: string): string {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

/** Format time string for display (e.g. "7:30 PM") */
export function formatTimeDisplay(timeStr: string): string {
  if (!timeStr) return '';
  const [h, m] = timeStr.split(':');
  const hour = parseInt(h, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  return `${hour12}:${m} ${ampm}`;
}
