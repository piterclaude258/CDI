// Opções de segurança e comportamento
export const OPT={
 recaptcha:'',            // chave de SITE do reCAPTCHA v3 (Firebase App Check). Vazio = desativado
 palavras:['palavrao1','palavrao2'], // palavras bloqueadas nas felicitações (minúsculas; acrescente as suas)
 espera:60                // segundos entre mensagens do mesmo visitante (mínimo 60, igual às regras)
};
