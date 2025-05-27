import { apiRequest } from '../queryClient';

// Função para gerenciar o ID da sessão
function getOrCreateSessionId(): string {
  let sessionId = localStorage.getItem('chat_session_id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    localStorage.setItem('chat_session_id', sessionId);
  }
  return sessionId;
}

interface AssistantResponse {
  message: string;
  error?: string;
}

export async function sendMessageToAssistant(message: string, language: 'pt-BR' | 'en-US'): Promise<AssistantResponse> {
  try {
    const sessionId = getOrCreateSessionId();
    
    const response = await apiRequest('POST', '/api/assistant', { 
      message,
      language,
      sessionId
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