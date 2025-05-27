// Basic sanitization function
export function sanitizeInput(input: string): string {
  return input
    .trim() // Remove espaços no início e fim
    .replace(/[\u0000-\u001F\u007F-\u009F]/g, '') // Remove caracteres de controle
    .replace(/<[^>]*>/g, '') // Remove tags HTML
    .replace(/[^\w\s.,!?@-]/g, ''); // Permite apenas letras, números e pontuação básica
} 