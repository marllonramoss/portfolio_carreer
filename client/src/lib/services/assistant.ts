import { apiRequest } from '../queryClient';

interface AssistantResponse {
  message: string;
  error?: string;
}

export async function sendMessageToAssistant(message: string, language: 'pt-BR' | 'en-US'): Promise<AssistantResponse> {
  try {
    const response = await apiRequest('POST', '/api/assistant', { 
      message,
      language
    });

    const data = await response.json();
    return { message: data.output };
  } catch (error) {
    console.error('Erro ao enviar mensagem para o assistente:', error);
    
    // Mensagens de erro de acordo com o idioma
    const errorMessages = {
      'en-US': 'Sorry, there was an error processing your message. Please try again.',
      'pt-BR': 'Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, tente novamente.'
    };

    return {
      message: errorMessages[language],
      error: error instanceof Error ? error.message : 'Erro desconhecido',
    };
  }
} 