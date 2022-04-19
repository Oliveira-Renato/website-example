export default function useValidaUrl(url) {
  const parsed = url? new URL(url): null;
  
  return ['http:','https:'].includes(parsed.protocol);
}