export function formatUSPhone(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.length !== 10) {
    throw new Error('Phone number must be exactly 10 digits');
  }

  const area = digits.slice(0, 3);
  const prefix = digits.slice(3, 6);
  const line = digits.slice(6);

  return `+1 (${area}) ${prefix}-${line}`;
}
