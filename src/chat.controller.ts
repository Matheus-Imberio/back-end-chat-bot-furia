import { Controller, Get } from '@nestjs/common';

@Controller('chat')
export class ChatController {
  @Get('jogo')
  getJogo() {
    return {
      adversario: 'Team Vitality',
      data: '25/04/2025',
      hora: '16:00',
      campeonato: 'IEM Rio 2025',
      ondeAssistir: 'https://twitch.tv/gaules'
    };
  }

  @Get('ultimos')
  getUltimos() {
    return [
      { adversario: 'NaVi', resultado: 'Vitória', placar: '2x1' },
      { adversario: 'FaZe', resultado: 'Derrota', placar: '1x2' },
      { adversario: 'Astralis', resultado: 'Vitória', placar: '2x0' }
    ];
  }

  @Get('jogadores')
  getJogadores() {
    return [
      { nome: 'KSCERATO', funcao: 'Rifler', curiosidade: 'Ídolo silencioso da torcida.' },
      { nome: 'yuurih', funcao: 'Entry Fragger', curiosidade: 'Confiável como poucos.' },
      { nome: 'arT', funcao: 'In-Game Leader', curiosidade: 'O homem do rush maluco.' },
      { nome: 'chelo', funcao: 'Support', curiosidade: 'Tático e versátil.' },
      { nome: 'fallen', funcao: 'AWPer', curiosidade: 'O Professor tá on.' }
    ];
  }

  @Get('clip')
  getClip() {
    return {
      titulo: 'Fúria destruindo no fut!',
      url: 'https://www.youtube.com/watch?v=uRQ9GCo1LJQ'
    };
  }

  @Get('frase')
  getFrase() {
    const frases = [
      'Eles que lutem.',
      'FURIA nunca desiste!',
      'Rumo ao topo!',
      'Confia no processo.',
      'O Brasil tá com a gente!'
    ];
    const random = Math.floor(Math.random() * frases.length);
    return { frase: frases[random] };
  }

  @Get('ranking')
  getRanking() {
    return {
      posicao: 5,
      campeonato: 'HLTV Global Ranking',
      atualizadoEm: 'Abril de 2025'
    };
  }

  @Get('loja')
  getLoja() {
    return {
      url: 'https://www.furia.gg/store',
      mensagem: 'Confira os novos drops da FURIA!'
    };
  }

  @Get('quiz')
  getQuiz() {
    return {
      pergunta: 'Quem é conhecido como "O Professor" na FURIA?',
      alternativas: ['arT', 'fallen', 'KSCERATO', 'yuurih'],
      resposta: 'fallen'
    };
  }

  @Get('art')
getArt() {
  return {
    correta: false,
    mensagem: 'Errado! A resposta certa é o **fallen**, conhecido como "O Professor".'
  };
}

@Get('fallen')
getFallen() {
  return {
    correta: true,
    mensagem: 'Acertou! O **fallen** é conhecido como "O Professor" na FURIA.'
  };
}

@Get('kscerato')
getKscerato() {
  return {
    correta: false,
    mensagem: 'Errado! A resposta certa é o **fallen**, conhecido como "O Professor".'
  };
}

@Get('yuurih')
getYuurih() {
  return {
    correta: false,
    mensagem: 'Errado! A resposta certa é o **fallen**, conhecido como "O Professor".'
  };
}

  @Get('menu')
getMenu() {
  return {
    mensagem: 'Bem-vindo ao chatbot da FURIA! Aqui estão as opções disponíveis:',
    opcoes: [
      { comando: '/jogo', descricao: 'Informações sobre o próximo jogo da FURIA' },
      { comando: '/ultimos', descricao: 'Resultados dos últimos jogos da FURIA' },
      { comando: '/jogadores', descricao: 'Conheça os jogadores do time' },
      { comando: '/clip', descricao: 'Assista a um clipe da FURIA em ação' },
      { comando: '/frase', descricao: 'Receba uma frase motivacional da FURIA' },
      { comando: '/ranking', descricao: 'Veja a posição atual da FURIA no ranking' },
      { comando: '/loja', descricao: 'Acesse a loja oficial da FURIA' },
      { comando: '/quiz', descricao: 'Teste seus conhecimentos sobre a FURIA' }
    ]
  };
}
}