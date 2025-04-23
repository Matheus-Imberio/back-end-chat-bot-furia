# 🐆 FURIA ChatBot - Backend

🔥 API feita com NestJS para alimentar o ChatBot dos fãs da FURIA — tudo o que o torcedor precisa saber sobre o time de CS:GO mais brabo do Brasil!

## 🚀 Endpoints Disponíveis

Base URL: `http://localhost:3000/chat`

| Rota            | Descrição |
|-----------------|-----------|
| `/jogo`         | Info do próximo jogo (adversário, data, horário, onde assistir) |
| `/ultimos`      | Últimos jogos e resultados |
| `/jogadores`    | Lista dos jogadores, função e curiosidades |
| `/clip`         | Clip de destaque (YouTube) |
| `/frase`        | Uma frase aleatória estilo FURIA |
| `/ranking`      | Ranking atual no cenário competitivo |
| `/loja`         | Link para a loja oficial |
| `/quiz`         | Quiz com pergunta sobre o time |

---

## 🧠 Exemplo de Resposta

### `GET /chat/jogo`
```json
{
  "adversario": "Team Vitality",
  "data": "25/04/2025",
  "hora": "16:00",
  "campeonato": "IEM Rio 2025",
  "ondeAssistir": "https://twitch.tv/gaules"
}
```

## ⚙️ Como rodar

1. Clone o projeto:

```bash
git clone https://github.com/seu-user/back-end-chat-bot-furia.git

```
2. Instale as dependências e rode:

```bash
npm install
npm start:dev
```
3. Acesse no navegador:

```bash
http://localhost:3000/chat
```

# 🛠️ Feito com

NestJS – Framework Node.js poderoso com TypeScript

❤️ e muita paixão pela FURIA

# 🤘 Autoria
Feito por Matheus Henrique Imberio para o Challenge #1 - Experiência Conversacional FURIA ⚡