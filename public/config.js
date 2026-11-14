// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtaCMJGU5sDCuJfMEfgofwuYjZxbThXPM",
  authDomain: "convites-985a0.firebaseapp.com",
  projectId: "convites-985a0",
  storageBucket: "convites-985a0.firebasestorage.app",
  messagingSenderId: "946533435765",
  appId: "1:946533435765:web:67a28f024d840ef1a9ab3c",
  measurementId: "G-JJBX8JL3HH"
};

// 2) Evento. Fotos: coloque os ficheiros em public/img/ e indique o caminho (ex.: 'img/capa.jpg').
export const EV={intro:{pt:'Casamento de',en:'Wedding of'},n1:'Ana',n2:'Pedro',cidade:'Maputo',data:'2027-03-20T09:00',
texto:{pt:'As nossas famílias têm a alegria de o(a) convidar para celebrar connosco este dia tão especial.',en:'Our families are delighted to invite you to celebrate this special day with us.'},
fuso:2,                       // fuso horário do evento em relação ao UTC (Maputo = 2)
criancas:false,               // false = convite não extensivo a crianças (aparece junto ao limite de pessoas)

tema:'Clássico dourado',   // Clássico dourado | Romântico | Moderno | Natureza | Noite | Rosa blush | Azul real
cores:{},                    // opcional: {bg:'#fff',ac:'#c00',tx:'#222'} substitui o tema
fonte:'Cormorant Garamond',  // Cormorant Garamond | Playfair Display | Great Vibes | Montserrat | Dancing Script | Cinzel | Lora
moldura:'dupla',             // dupla | floral | simples | nenhuma
padrao:'pontos',             // pontos | linhas | losangos | nenhum
efeito:'petalas',            // petalas | confetes | nenhum  (cai na capa)
foto:'',                     // foto da capa; vazio = monograma com as iniciais
fundos:{info:'',programa:'',galeria:''}, // fotos de fundo com parallax (opcionais)
musica:'',                   // link ou 'img/musica.mp3'
galeria:[],                  // ['img/1.jpg','img/2.jpg']
prog:[{h:'09H00',t:'Cerimónia Civil',l:'Salão Exemplo',m:'',geo:''},{h:'10H00',t:'Cerimónia Religiosa',l:'Igreja Exemplo',m:'',geo:''},{h:'14H00',t:'Copo d’Água',l:'Salão Exemplo',m:'',geo:''}],
vestuario:{texto:'Traje social. Pedimos que evite branco e creme.',cores:['#b8924a','#3b3228','#e8d9c0']}, // apague a linha para ocultar
presentes:{texto:'A sua presença é o nosso maior presente. Se desejar oferecer algo:',itens:[{t:'M-Pesa',v:'84 000 0000'},{t:'Conta bancária',v:'Banco Exemplo · NIB 0000 0000 0000'}]},
faq:[{q:'Onde posso estacionar?',a:'Há estacionamento no local do copo d’água.'},{q:'Há hotéis por perto?',a:'Sugerimos o Hotel Exemplo, a 5 min do salão.'},{q:'Quem posso contactar?',a:'Maria · 84 000 0000'}]};

// Textos (intro, texto, títulos, FAQ...) podem ser 'texto' ou {pt:'...',en:'...'}. Em cada momento do programa:
//  geo:'-25.9692,32.5732' (coordenadas, para Waze/Google Maps) e dur:60 (duração em minutos, opcional).
