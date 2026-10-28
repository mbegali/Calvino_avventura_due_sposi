/* CALVINO - SCRIPT PRINCIPALE
   Questo file comprende i dati del glossario e il comportamento della pagina.
   L HTML lo carica con <script src="script.js" defer></script>.
*/

/* 1. Etichette delle parole: ID interno -> espressione leggibile. */
window.TERM_LABELS = {
  "faceva-il-turno-della-notte": "faceva il turno della notte",
  "rincasare": "rincasare",
  "un-lungo-tragitto": "un lungo tragitto",
  "nella-bella-stagione": "nella bella stagione",
  "in-tram": "in tram",
  "tra-le-sei-e-tre-quarti-e-le-sette": "tra le sei e tre quarti e le sette",
  "alle-volte": "alle volte",
  "la-sveglia": "la sveglia",
  "si-sovrapponevano": "si sovrapponevano",
  "spremere": "spremere",
  "affondato": "affondato",
  "guanciale": "guanciale",
  "di-strappo": "di strappo",
  "alla-cieca": "alla cieca",
  "vestaglia": "vestaglia",
  "recipienti": "recipienti",
  "portavivande": "portavivande",
  "termos": "termos",
  "acquaio": "acquaio",
  "fornello": "fornello",
  "spalancare": "spalancare",
  "si-vergognasse": "si vergognasse",
  "mezz-addormentata": "mezz’addormentata",
  "riaffiorare": "riaffiorare",
  "si-e-pari": "si è pari",
  "destarla": "destarla",
  "la-tazzina": "la tazzina",
  "la-smorfia": "la smorfia",
  "stirarsi": "stirarsi",
  "cingere-il-collo": "cingere il collo",
  "giaccone-impermeabile": "giaccone impermeabile",
  "nebbia": "nebbia",
  "brontolamento": "brontolamento",
  "passando-in-rassegna": "passando in rassegna",
  "inconvenienti": "inconvenienti",
  "le-grane": "le grane",
  "reparto": "reparto",
  "poco-scaldata": "poco scaldata",
  "rabbrividendo": "rabbrividendo",
  "stanzino": "stanzino",
  "si-toglieva-di-dosso": "si toglieva di dosso",
  "l-unto": "l’unto",
  "officina": "officina",
  "lavabo": "lavabo",
  "intirizziti": "intirizziti",
  "dandosi-delle-spinte": "dandosi delle spinte",
  "strofinarsi": "strofinarsi",
  "s-insinuava": "s’insinuava",
  "tutt-a-un-tratto": "tutt’a un tratto",
  "reggicalze": "reggicalze",
  "como": "comò",
  "mollette": "mollette",
  "impacciato": "impacciato",
  "tacchi": "tacchi",
  "gradini": "gradini",
  "trotterellare": "trotterellare",
  "cortile": "cortile",
  "marciapiede": "marciapiede",
  "stridere": "stridere",
  "pedana": "pedana",
  "aggrappata": "aggrappata",
  "cicca": "cicca",
  "sportelli": "sportelli",
  "intatto": "intatto",
  "si-coricava": "si coricava",
  "nicchia-di-tepore": "nicchia di tepore",
  "affondava-il-viso": "affondava il viso",
  "stufa": "stufa",
  "rifare-il-letto": "rifare il letto",
  "spazzare": "spazzare",
  "mettere-a-bagno": "mettere a bagno",
  "malfatto": "malfatto",
  "botteghe": "botteghe",
  "appesantito": "appesantito",
  "pianerottolo": "pianerottolo",
  "sporta": "sporta",
  "diamoci-un-addrizzo": "diamoci un addrizzo",
  "tutt-e-due": "tutt’e due",
  "merenda": "merenda",
  "sfaccendava": "sfaccendava",
  "seggiola-di-paglia": "seggiola di paglia",
  "si-dava-attorno": "si dava attorno",
  "urtarsi": "urtarsi",
  "struggimento": "struggimento",
  "portata-di-mano": "portata di mano",
  "canna-della-bici": "canna della bici",
  "da-cima-a-fondo": "da cima a fondo",
  "radi-fanali": "radi fanali",
  "gasometro": "gasometro",
  "strisciava": "strisciava",
  "tenerezza": "tenerezza"
};

/* 2. Significati in inglese, mostrati quando lo studente clicca. */
window.GLOSSARY_MEANINGS = {
  "faceva-il-turno-della-notte": "worked the night shift",
  "rincasare": "return home",
  "un-lungo-tragitto": "a long journey / commute",
  "nella-bella-stagione": "in the warmer months",
  "in-tram": "by tram",
  "tra-le-sei-e-tre-quarti-e-le-sette": "between 6:45 and 7:00",
  "alle-volte": "sometimes",
  "la-sveglia": "the alarm clock",
  "si-sovrapponevano": "overlapped",
  "spremere": "squeeze out",
  "affondato": "buried / sunk into",
  "guanciale": "pillow",
  "di-strappo": "with a sudden jerk",
  "alla-cieca": "blindly",
  "vestaglia": "dressing gown / robe",
  "recipienti": "containers",
  "portavivande": "lunch container",
  "termos": "thermos flask",
  "acquaio": "kitchen sink",
  "fornello": "stove burner",
  "spalancare": "open wide",
  "si-vergognasse": "felt ashamed",
  "mezz-addormentata": "half-asleep",
  "riaffiorare": "resurface / reemerge",
  "si-e-pari": "they are on equal footing",
  "destarla": "wake her",
  "la-tazzina": "small cup",
  "la-smorfia": "grimace / facial expression",
  "stirarsi": "stretch",
  "cingere-il-collo": "put one’s arms around the neck",
  "giaccone-impermeabile": "waterproof jacket",
  "nebbia": "fog",
  "brontolamento": "grumbling",
  "passando-in-rassegna": "going through one by one",
  "inconvenienti": "difficulties / inconveniences",
  "le-grane": "troubles / problems",
  "reparto": "department / workshop section",
  "poco-scaldata": "poorly heated",
  "rabbrividendo": "shivering",
  "stanzino": "small room",
  "si-toglieva-di-dosso": "removed from himself",
  "l-unto": "grease",
  "officina": "workshop",
  "lavabo": "washbasin",
  "intirizziti": "chilled / stiff with cold",
  "dandosi-delle-spinte": "nudging each other",
  "strofinarsi": "rub / scrub",
  "s-insinuava": "slipped in / crept in",
  "tutt-a-un-tratto": "all of a sudden",
  "reggicalze": "garter belt",
  "como": "dresser",
  "mollette": "hairpins",
  "impacciato": "awkward / embarrassed",
  "tacchi": "heels",
  "gradini": "steps",
  "trotterellare": "quick little trot",
  "cortile": "courtyard",
  "marciapiede": "sidewalk",
  "stridere": "screech",
  "pedana": "step of a tram",
  "aggrappata": "clinging on",
  "cicca": "cigarette butt",
  "sportelli": "shutters",
  "intatto": "untouched",
  "si-coricava": "lay down",
  "nicchia-di-tepore": "pocket of warmth",
  "affondava-il-viso": "buried his face",
  "stufa": "stove / heater",
  "rifare-il-letto": "make the bed",
  "spazzare": "sweep",
  "mettere-a-bagno": "soak",
  "malfatto": "poorly done",
  "botteghe": "shops",
  "appesantito": "weighed down",
  "pianerottolo": "landing",
  "sporta": "shopping bag",
  "diamoci-un-addrizzo": "let’s get ourselves organized / get moving",
  "tutt-e-due": "both",
  "merenda": "snack / packed food",
  "sfaccendava": "did household chores",
  "seggiola-di-paglia": "straw chair",
  "si-dava-attorno": "kept busy",
  "urtarsi": "get on each other’s nerves",
  "struggimento": "aching longing",
  "portata-di-mano": "within reach",
  "canna-della-bici": "bicycle’s top tube",
  "da-cima-a-fondo": "from top to bottom",
  "radi-fanali": "widely spaced streetlights",
  "gasometro": "gas holder / gasworks landmark",
  "strisciava": "slid / crept",
  "tenerezza": "tenderness"
};

/* 3. Inizio e fine dei paragrafi (secondi del video).
   Sono caricati dal file timings.js PRIMA di script.js.
   Se non li hai ancora preparati, il player non può sincronizzarsi. */

/* 4. Collegamento al database Supabase.
   Copia qui Project URL e PUBLISHABLE KEY dal progetto Mini Lettura.
   Mai inserire secret/service_role key in questo file pubblico. */
// Esegui database.sql nel SQL Editor di Supabase; incolla qui URL e chiave pubblica.
// Non inserire mai una service_role key o una secret key!
window.ANALYTICS_CONFIG = {
  supabaseUrl: "https://icqrmuzamalslgyxncel.supabase.co",
  anonKey: "sb_publishable_p5o00R30ORMHspSYwJqM1w_YNPRp4Cy"
};

/* 5. Funzioni del sito: clic sul glossario, salvataggio, dashboard, audio e quiz. */
'use strict';
const VIDEO_ID='h1PzCiEi7cM';
const rawTimes=window.PARAGRAPH_TIMINGS || {};
const editorMode=new URLSearchParams(location.search).has('editor');
const storedTimes=editorMode?JSON.parse(localStorage.getItem('calvino_teacher_times')||'{}'):{};
let timings={...rawTimes,...storedTimes};
const terms=window.TERM_LABELS||{};
const cfg=window.ANALYTICS_CONFIG||{};
const dbReady=Boolean(cfg.supabaseUrl && cfg.anonKey);
// La publishable key identifica l'applicazione; il database applica regole RLS.
const apiHeaders=()=>({'apikey':cfg.anonKey});
const label=s=>terms[s]||s;
const $=sel=>document.querySelector(sel);
const statsStatus=$('#data-status');
const pop=$('#gloss-popover');
let activeGloss=null;
const localCounterKey='calvino_demo_aggregate_counts';
let counts=JSON.parse(localStorage.getItem(localCounterKey)||'{}');
function validTiming(m){return m && Number.isFinite(+m.start) && Number.isFinite(+m.end) && +m.end > +m.start;}
function speakLabel(p){const m=timings[p];return validTiming(m)?`${pretty(m.start)}–${pretty(m.end)}`:'Audio da sincronizzare';}
function pretty(t){let s=Math.max(0,Math.floor(+t));return String(Math.floor(s/60)).padStart(1,'0')+':'+String(s%60).padStart(2,'0');}
function refreshTimings(){
 document.querySelectorAll('.audio-status').forEach(el=>el.textContent=speakLabel(el.dataset.paragraph));
 document.querySelectorAll('button[data-audio]').forEach(btn=>{
  const available=validTiming(timings[btn.dataset.audio]);
  // Il pulsante deve funzionare anche se il docente non ha ancora segnato i tempi.
  btn.disabled=false;
  btn.textContent=available?'▶ Ascolta il paragrafo':
    editorMode?'▶ Apri il video per segnare i tempi':'▶ Apri la registrazione';
  btn.title=available?'Ascolta solo questo paragrafo':
    'Apre il video completo: i tempi di questo paragrafo non sono ancora disponibili';
 });
}
function showGloss(button){
 if(activeGloss)activeGloss.classList.remove('active');
 activeGloss=button;button.classList.add('active');
 let k=button.dataset.term;
 $('#gloss-term').textContent=button.textContent;
 $('#gloss-meaning').textContent=GLOSSARY[k]||'Significato da verificare';
 pop.hidden=false;$('#pop-close').focus({preventScroll:true});
 register(k);
}
const GLOSSARY=window.GLOSSARY_MEANINGS||{};
document.addEventListener('click',e=>{
 const b=e.target.closest('.gloss');if(b){showGloss(b);return;}
 const a=e.target.closest('[data-audio]');if(a){playParagraph(+a.dataset.audio);return;}
});
$('#pop-close').addEventListener('click',()=>{pop.hidden=true;if(activeGloss)activeGloss.classList.remove('active');});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){pop.hidden=true;if(activeGloss)activeGloss.classList.remove('active');}});
document.querySelectorAll('.checkpoint').forEach(cp=>{
 cp.querySelector('.check-answer').addEventListener('click',()=>{
  const picked=cp.querySelector('input[type=radio]:checked');const feedback=cp.querySelector('.feedback');
  if(!picked){feedback.textContent='Seleziona una risposta.';feedback.className='feedback no';return;}
  const ok=picked.value===cp.dataset.answer;feedback.textContent=ok?'✓ Corretto.':'Riprova: rileggi il passaggio.';
  feedback.className='feedback '+(ok?'ok':'no');
 });
});
function localRegister(k){counts[k]=(counts[k]||0)+1;localStorage.setItem(localCounterKey,JSON.stringify(counts));renderCounts();}
async function register(k){
 if(!dbReady){localRegister(k);return;}
 try{
  const response=await fetch(cfg.supabaseUrl.replace(/\/$/,'')+'/rest/v1/rpc/calvino_register_gloss',{
   method:'POST',headers:{...apiHeaders(),'Content-Type':'application/json'},body:JSON.stringify({p_term:k})
  });
  if(!response.ok)throw new Error('HTTP '+response.status);
  fetchCounts();
 }catch(e){statsStatus.textContent='Statistiche condivise non raggiungibili. Controlla il collegamento al database.';console.warn(e);}
}
async function fetchCounts(){
 if(!dbReady){renderCounts();return;}
 try{
  const response=await fetch(cfg.supabaseUrl.replace(/\/$/,'')+'/rest/v1/calvino_gloss_counts?select=term,views',{
   headers:apiHeaders()
  });
  if(!response.ok)throw new Error('HTTP '+response.status);
  counts=Object.fromEntries((await response.json()).map(r=>[r.term,+r.views]));
  statsStatus.textContent='Dashboard condivisa: dati aggregati, aggiornabili da tutti.';
  renderCounts();
 }catch(e){statsStatus.textContent='Errore di connessione alle statistiche condivise.';console.warn(e);}
}
function renderCounts(){
 const all=Object.entries(counts).filter(([k])=>terms[k]).sort((a,b)=>b[1]-a[1]);
 const total=all.reduce((n,[,v])=>n+v,0);const distinct=all.filter(x=>x[1]>0).length;
 $('#metric-clicks').textContent=total;$('#metric-terms').textContent=distinct;
 const top=all.filter(x=>x[1]>0).slice(0,12);const max=Math.max(1,...top.map(x=>x[1]));
 const root=$('#stats-bars');root.replaceChildren();
 if(!top.length){root.textContent='Nessuna consultazione registrata.';return;}
 for(const [key,value] of top){
  const row=document.createElement('div');row.className='bar-row';
  const word=document.createElement('span');word.textContent=label(key);
  const bar=document.createElement('div');bar.className='bar';const progress=document.createElement('span');progress.style.width=(100*value/max)+'%';bar.append(progress);
  const num=document.createElement('b');num.textContent=value;row.append(word,bar,num);root.append(row);
 }
}
if(dbReady){statsStatus.textContent='Collegamento alle statistiche condivise…';$('.share-warning').hidden=true;}
else{statsStatus.textContent='Modalità demo locale';$('.share-warning').hidden=false;}
$('#refresh-stats').addEventListener('click',fetchCounts);
fetchCounts();if(dbReady)setInterval(fetchCounts,30000);

// Un unico player YouTube IFrame API per tutti i paragrafi.
let player=null,playerReady=false,requestedParagraph=null,ytInitialized=false;
const dock=$('#audio-dock');
// Per gli embed YouTube serve un HTTP Referer. Creiamo l'iframe NOI,
// con referrerPolicy impostata PRIMA di caricare l'URL del video.
// In questo modo YouTube può riconoscere il dominio Render che ospita la pagina.
function createPlayer(){
 if(ytInitialized)return;ytInitialized=true;
 const oldSlot=$('#yt-player');
 const frame=document.createElement('iframe');
 frame.id='yt-player';
 frame.title='Lettura audio di L’avventura di due sposi';
 frame.setAttribute('referrerpolicy','strict-origin-when-cross-origin');
 frame.setAttribute('allow','accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share');
 frame.setAttribute('allowfullscreen','');
 frame.style.border='0';
 frame.src='https://www.youtube.com/embed/'+VIDEO_ID+
   '?enablejsapi=1&playsinline=1&origin='+encodeURIComponent(location.origin);
 oldSlot.replaceWith(frame);
 const api=document.createElement('script');
 api.src='https://www.youtube.com/iframe_api';
 api.onerror=()=>{$('#audio-info').textContent='Player YouTube non caricato. Usa il link qui sotto.';};
 document.head.append(api);
}
window.onYouTubeIframeAPIReady=()=>{
 player=new YT.Player('yt-player',{
  events:{
   onReady:()=>{
    playerReady=true;
    $('#audio-info').textContent='Player pronto.';
    if(requestedParagraph)playParagraph(requestedParagraph);
   },
   onError:e=>{
    let msg='Riproduzione incorporata non disponibile (errore '+e.data+').';
    if(e.data===153) msg+=' YouTube non ha ricevuto un Referer valido: prova il link qui sotto o un altro browser.';
    $('#audio-info').textContent=msg+' Il link esterno funziona anche quando l’embed è bloccato.';
   }
  }
 });
};
// Una sola alternativa esterna al player, aggiornata per il paragrafo richiesto.
function updateExternalLink(n){
 const m=timings[n];
 const at=validTiming(m)?Math.max(0,Math.floor(+m.start)):2;
 const link=$('#youtube-fallback');
 link.href='https://www.youtube.com/watch?v='+VIDEO_ID+'&t='+at+'s';
 link.textContent=validTiming(m)?
   'apri YouTube da '+pretty(m.start):
   'apri YouTube dall’inizio (tempi del paragrafo non disponibili)';
}
function playParagraph(n){
 requestedParagraph=n;dock.hidden=false;
 $('#playing-title').textContent='Paragrafo '+n;
 const m=timings[n];
 updateExternalLink(n);
 if(!playerReady){
  $('#audio-info').textContent='Caricamento del player… Se appare errore 153, usa il link qui sotto.';
  createPlayer();return;
 }
 if(validTiming(m)){
  player.loadVideoById({videoId:VIDEO_ID,startSeconds:+m.start,endSeconds:+m.end});
  $('#audio-info').textContent='Riproduzione del passaggio '+pretty(m.start)+'–'+pretty(m.end);
 } else if(editorMode){
  player.loadVideoById({videoId:VIDEO_ID,startSeconds:2});
  $('#audio-info').textContent='Modalità docente: individua i tempi e salvali; puoi inserirli anche manualmente negli appositi campi.';
 } else {
  player.loadVideoById({videoId:VIDEO_ID,startSeconds:2});
  $('#audio-info').textContent='Il video parte dall’inizio perché mancano ancora i tempi del paragrafo '+n+'.';
 }
}
$('#hide-audio').addEventListener('click',()=>{dock.hidden=true;if(playerReady)player.pauseVideo();});

// L'editor è visibile solo se URL contiene ?editor=1; senza autorizzazione, vale soltanto nel browser locale.
if(editorMode){
 document.body.classList.add('editor-mode');
 $('#teacher-tool').hidden=false;
 const select=$('#teacher-paragraph');
 for(let i=1;i<=14;i++){const op=document.createElement('option');op.value=i;op.textContent='Paragrafo '+i;select.append(op);}
 function updateTeacher(){const m=timings[select.value]||{};$('#teacher-start').value=m.start??'';$('#teacher-end').value=m.end??'';}
 select.addEventListener('change',updateTeacher);updateTeacher();
 $('#mark-start').addEventListener('click',()=>{$('#teacher-start').value=playerReady?player.getCurrentTime().toFixed(1):'';});
 $('#mark-end').addEventListener('click',()=>{$('#teacher-end').value=playerReady?player.getCurrentTime().toFixed(1):'';});
 $('#teacher-save').addEventListener('click',()=>{
  const a=+$('#teacher-start').value,b=+$('#teacher-end').value;
  if($('#teacher-start').value===''||$('#teacher-end').value===''||!Number.isFinite(a)||!Number.isFinite(b)||b<=a){$('#teacher-feedback').textContent='Inserisci un inizio e una fine validi.';return;}
  timings[select.value]={start:a,end:b};localStorage.setItem('calvino_teacher_times',JSON.stringify(timings));
  refreshTimings();$('#teacher-feedback').textContent='Tempi salvati solo in questo browser. Usa Esporta per condividerli.';
 });
 $('#teacher-preview').addEventListener('click',()=>playParagraph(+select.value));
 $('#export-timings').addEventListener('click',()=>{
  const output='/* Tempi verificati dal docente. Carica questo file su GitHub accanto a index.html. */\nwindow.PARAGRAPH_TIMINGS = '+JSON.stringify(timings,null,2)+';\n';
  const blob=new Blob([output],{type:'text/javascript'});const href=URL.createObjectURL(blob);const a=document.createElement('a');a.href=href;a.download='timings.js';a.click();setTimeout(()=>URL.revokeObjectURL(href),500);
 });
}
refreshTimings();
