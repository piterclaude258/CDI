# Teste de ponta a ponta (sem tocar nos dados reais)

## A. Local, com o emulador do Firebase
1. `npm install -g firebase-tools` e, na pasta do projeto, `npm install`.
2. Regras: `npm run test:rules` (corre `tests/rules.test.mjs`).
3. Site: `npm run emu` e abra `http://localhost:5000/admin.html?emu=1`.
   - No painel do emulador (`http://localhost:4000` > Authentication) crie o utilizador **admin@teste.com** e, em `firestore.rules`, use temporariamente esse email.
4. Siga a lista abaixo usando sempre `?emu=1` nos links.

## B. Lista de verificação
- [ ] Entrar no `/admin` com o email de administrador.
- [ ] Importar 3 convidados (um em inglês, um com máx. 1 pessoa).
- [ ] Abrir o link de cada um: nome na saudação, idioma certo, estado "visto" no painel.
- [ ] Confirmar presença (e alterar depois); tentar mais pessoas que o máximo (deve falhar).
- [ ] Recusar presença; o resumo e a tabela atualizam.
- [ ] Enviar felicitação: aparece "pendente" no painel; aprovar; aparece no convite.
- [ ] Segunda felicitação em menos de 1 minuto: bloqueada. Mensagem com link: bloqueada.
- [ ] Botões "Convidar", "Lembrar" (WhatsApp), "QR", "Copiar link".
- [ ] Exportar CSV e abrir no Excel (acentos e colunas corretos).
- [ ] "Cópia de segurança": descarregar, apagar um convidado, "Restaurar".
- [ ] Calendário (.ics e Google), Waze/Maps, partilha, PT/EN, contagem decrescente.

## C. Produção
1. Firebase > Authentication: ativar **E-mail/palavra-passe** e **Anónimo**.
2. Firestore: publicar `firestore.rules` com o seu email.
3. **App Check**: Firebase > App Check > registar a app Web com **reCAPTCHA v3**; copie a chave do site para `public/opcoes.js` (`recaptcha`). Teste o convite e o painel e só depois carregue em **Aplicar** (enforce) para o Firestore.
4. Domínios autorizados (Authentication > Definições) com o seu domínio.
5. Orçamento: Firebase > Utilização e faturação > definir alerta de gastos.

## D. Telemóveis e ligação lenta
- Abra o link pessoal em pelo menos: Android (Chrome e Samsung Internet), iPhone (Safari), um telemóvel antigo.
- Chrome no computador: F12 > Rede > "3G lento" e > Dispositivo (iPhone SE, Galaxy S8). Verifique: capa abre, texto legível sem as letras, botão ver convite, fotos não bloqueiam, RSVP funciona.
- Ative "Reduzir movimento" no telemóvel: os efeitos devem parar.
- Mede-se: o convite deve mostrar texto em menos de 3 s em 3G; comprima fotos (≤ 300 KB).

## E. Editor na nuvem
- [ ] `/editor`: entrar com o email de anfitrião; o estado mostra "☁ guardado" depois de editar.
- [ ] Limpar os dados do navegador, voltar a entrar: os convites reaparecem.
- [ ] Carregar uma foto da capa e 3 da galeria (incluindo uma tirada com o telemóvel); aparecem na pré-visualização.
- [ ] Novo… a partir de cada modelo; alterar programa, FAQ e presentes pelos campos.
- [ ] "Ver como convidado" com um nome: a saudação muda; PT/EN.
- [ ] Publicar no site; abrir o convite numa janela anónima: mostra a versão publicada e as fotos.
- [ ] Cartaz PNG, JPG e PDF nos quatro modelos e três tamanhos.
