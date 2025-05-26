interface AssistantResponse {
  message: string;
  error?: string;
}

export async function sendMessageToAssistant(message: string, language: 'pt-BR' | 'en-US'): Promise<AssistantResponse> {
  try {
    // TODO: Substituir com a URL real do seu webhook n8n
    const response = await fetch('https://n8n.marllonramos.com:5678/webhook-test/9b1965ca-db86-4540-9c75-2380800d345e', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        message,
        language // Enviando o idioma para o n8n
      }),
    });

    if (!response.ok) {
      throw new Error('Falha na comunicação com o assistente');
    }

    const data = await response.json();
    // Usando o campo 'output' da resposta da API
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