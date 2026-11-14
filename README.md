# Convite digital com Firebase

## 1. Firebase (console.firebase.google.com)
1. Criar projeto > adicionar app **Web** > copiar a configuração para `public/config.js`.
2. **Authentication** > Sign-in method > ativar *Email/palavra-passe* > criar o seu utilizador (é o anfitrião).
3. **Firestore Database** > criar base de dados (modo produção).
4. Separador **Regras**: colar `firestore.rules`, trocar `SEU_EMAIL_DE_ADMIN@exemplo.com` pelo seu email e publicar.
5. Authentication > Definições > Domínios autorizados: adicionar o domínio da Vercel/GitHub Pages.

## 2. Publicar
- **GitHub**: criar repositório e enviar esta pasta.
- **Vercel**: Import do repositório (a pasta `public` é publicada, via `vercel.json`). Alternativa: GitHub Pages com a pasta `public`.

## 3. Usar
- `/admin` : entrar, adicionar convidados (gera link único `/?c=codigo`), enviar convite e lembretes por WhatsApp, ver estados, exportar CSV (abre no Excel) e aprovar felicitações.
- Convite: personalizar `public/config.js`.

## Fotos e música
Coloque os ficheiros em `public/img/` (ex.: `capa.jpg`, `1.jpg`, `musica.mp3`) e indique os caminhos em `public/config.js`
(`foto`, `galeria`, `fundos`, `musica`). Use fotos comprimidas (até ~300 KB cada) para o convite abrir depressa.
Tudo o resto (tema, letra, moldura, padrão, efeito, vestuário, presentes, FAQ) também se muda em `config.js`.

## Novidades
- Idiomas: textos em `config.js` podem ser `{pt:'...',en:'...'}`; o convidado vê o seletor PT/EN. Em `/admin`, a coluna Idioma (pt/en) define o idioma do link.
- Calendário (.ics e Google Calendar), Waze e Google Maps em cada momento do programa. Em `prog` use `geo:'-25.96,32.57'` (coordenadas) e `dur:60` (minutos).
- Importar lista: em `/admin`, cole `Nome;WhatsApp;Máx;pt/en` (uma linha por convidado) e carregue em Importar. Cada convidado recebe o seu link e QR.
- `criancas:false` em `config.js` junta "não extensivo a crianças" ao limite de pessoas do convidado.

## Editor visual (`/editor`)
Abra `https://SEU-SITE/editor` (ou `public/editor.html` com um servidor local). Edite tudo com pré-visualização ao vivo (telemóvel, tablet, computador).
- **Vários convites**: Novo, Duplicar, Renomear, Apagar (ficam guardados neste navegador).
- **Outro dispositivo**: Exportar (.json) e Importar.
- **Publicar**: "config.js" descarrega o ficheiro final (cole a configuração Firebase na secção Firebase do editor antes). Substitua `public/config.js` no repositório e faça commit.
- **Cartaz**: PNG, JPG ou PDF (A5) com nomes, data, programa e QR opcional.
- **Textos**: "Sugerir texto" por tipo de evento; "Copiar pedido para o Claude" para textos à medida.
- Contraste (WCAG) e paletas sugeridas na secção Estilo.
Nota: o editor só altera ficheiros; não escreve no Firebase. Se não quiser que seja público, apague `public/editor.html` do site publicado.

## Segurança e testes (novo)
- Códigos de convidado com 12 caracteres aleatórios. Convites criados antes continuam a funcionar.
- Felicitações: login anónimo, 1 por minuto por visitante, bloqueio de links e de palavras (`public/opcoes.js`), moderação obrigatória.
- App Check (reCAPTCHA v3): chave em `public/opcoes.js`. Passos em `TESTE.md`.
- Painel: "Cópia de segurança" e "Restaurar". Teste local com emulador: `TESTE.md`.
- Ative também o login **Anónimo** no Firebase Authentication.

## Painel (novo)
- **Editar** nome, telefone, máx., idioma, grupo e mesa; **filtros** por texto, estado, idioma, visto, convite enviado, grupo e mesa.
- **Grupos e mesas**: campos Grupo e Mesa (também na importação: `Nome;WhatsApp;Máx;pt/en;Grupo;Mesa`); secção Mesas com totais.
- **Catering**: o convidado indica restrições alimentares e observações ao confirmar; aparecem na tabela e no CSV.
- **Gráficos**: pessoas confirmadas por dia e situação por grupo.
- **Envio em massa**: "Abrir próximo no WhatsApp" percorre, um a um, quem ainda não foi convidado (segundo os filtros) e marca como enviado; também copia a tabela de links ou as mensagens. Nota: uma lista de difusão do WhatsApp envia a mesma mensagem a todos, por isso não serve para links pessoais.
- **Vários anfitriões**: crie a conta em Authentication > Utilizadores e adicione o email na secção "Anfitriões" (só o proprietário, email nas regras, altera a lista). Não desative "Permitir criar contas" (Authentication > Definições): isso bloquearia também o login anónimo usado nas felicitações.

## Editor ligado à nuvem (novo)
- Em `/editor`, **☁ Entrar** com o email de anfitrião. Os convites guardam-se sozinhos no Firebase e sincronizam entre dispositivos.
- **Publicar no site** grava o convite escolhido no Firebase e o site passa a mostrá-lo **sem novo deploy** (`config.js` fica como reserva). O painel `/admin` também usa o convite publicado.
- **Fotos**: "Carregar" comprime a imagem (até 1280 px, JPEG) e guarda-a no Firestore (não usa o Storage, que é pago). Cada visita ao convite lê as fotos usadas (cota gratuita: 50 000 leituras/dia).
- **Modelos**: Novo… > Casamento clássico, Casamento moderno, Aniversário infantil, Batizado, Formatura.
- **Cartaz**: modelos Clássico, Moderno, Foto e Minimal; tamanhos A5, Story e Quadrado; usa a moldura e o padrão do convite.
- **Ver como convidado**: nome e máximo de pessoas no topo da pré-visualização mostram a saudação e o RSVP.
- Publique de novo `firestore.rules` (há coleções novas: convites, publico, fotos).
