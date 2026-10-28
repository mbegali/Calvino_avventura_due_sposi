CALVINO — REDESIGN VISIVO

Questa versione mantiene la logica e i timings del sito sincronizzato,
ma usa una nuova identità visiva ispirata alla copertina caricata di Gli amori difficili.
Asset aggiunto: calvino_cover.jpg

CALVINO — SITO SINCRONIZZATO

VIDEO
https://www.youtube.com/watch?v=h1PzCiEi7cM

CONTENUTO DEL PACCHETTO
- index.html
- style.css
- script.js
- timings.js
- database.sql
- transcript.txt
- transcript.json

SINCRONIZZAZIONE
timings.js contiene i tempi di inizio/fine dei 14 paragrafi.
I tempi sono stati ricavati allineando il testo dei paragrafi del sito
alla trascrizione Whisper fornita (con timestamp di segmento/parola).

Il pulsante “Ascolta il paragrafo” usa il YouTube IFrame API e passa:
- startSeconds
- endSeconds

Il link esterno di fallback apre lo stesso video al secondo iniziale
del paragrafo selezionato.

IMPORTANTE
1. Fai un controllo uditivo rapido dei 14 punti di inizio/fine prima di
   usare il sito con gli studenti. Whisper ha commesso alcuni errori di
   trascrizione, ma i confini temporali risultano allineati al testo.
2. Il file script.js incluso qui conserva ANALYTICS_CONFIG esattamente
   come nel file caricato. Se nel sito Render/GitHub avevi già inserito
   supabaseUrl e anonKey, reinseriscili prima di sostituire il file.
3. Non rieseguire database.sql se il database Supabase esiste già.
4. L'embed YouTube può ancora essere bloccato da YouTube/browser.
   Il link esterno resta disponibile come fallback.
