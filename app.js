const express = require('express')
const app = express()
const port = 3000

const posts = [
    {
        "title": "GP Arabia Saudita: terza volta a Jeddah, il cittadino più veloce del calendario",
        "content": "Debuttato nel 2021, il circuito di Jeddah è stato completato in extremis, con lavori fino all'ultimo minuto. Ora si prepara ad ospitare la sua quinta edizione in Formula 1: è considerato il tracciato cittadino più rapido del campionato e presenta una forma particolare, simile a una forcina. Saranno 50 i giri previsti, con la Red Bull nel mirino.",
        "image": "imgs/f1_jedda_circuito_getty.jpg",
        "tags": ["gp arabia saudita", "formula 1"]
    },
    {
        "title": "Russell, nessuna sanzione per l'episodio del DRS",
        "content": "È ufficiale: nessuna penalità per George Russell in merito all'attivazione del DRS. Leclerc resta quarto e fuori dal podio. La decisione si basa sul fatto che il dispositivo è rimasto attivo solo per 37 metri. Inoltre, oltre ai problemi alla centralina, Russell ha affrontato un guasto al retrotreno della W16, e il team ha sostituito il comando radio con un altro tasto. Non c'è stata intenzionalità da parte del pilota.",
        "image": "imgs/Immagine_WhatsApp_2025-04-13_ore_21.13.15_3cdc8a72",
        "tags": ["russell", "barhein", "f1"]
    },
    {
        "title": "Il 2025 di Kimi Antonelli",
        "content": "Un avvio di stagione rilevante per Kimi Antonelli: dopo un debutto spettacolare in Australia e le difficoltà incontrate in Cina, a Suzuka si è distinto nuovamente. In Bahrain ha ottenuto il 4° tempo in qualifica, ma una penalità lo ha retrocesso di una posizione. In gara ha superato Verstappen con una manovra brillante, ma una scelta strategica poco fortunata lo ha escluso dalla top ten.",
        "image": "imgs/Kimi_Antonelli_F175_Londra",
        "tags": ["mercedes", "antonelli", "stagione2025"]
    },
    {
        "title": "Hamilton sul GP del Bahrain: \"Duro adattarsi, ma non mi arrendo\"",
        "content": "Lewis Hamilton commenta il suo quinto posto a Sakhir: \"Non mi aspettavo un adattamento così difficile alla Ferrari, pensavo sarebbe stato più lineare. Comunque sia, non mollo: ho ancora tanto da dare e oggi l'ho dimostrato. Ora devo imparare a sfruttare meglio il mio potenziale\".",
        "image": "imgs/3934.jpg",
        "tags": ["hamilton", "ferrari", "f1-2025"]
    },
    {
        "title": "Norris dopo le qualifiche in Bahrain: \"La macchina è top, io no...\"",
        "content": "Deluso dal 6° posto in qualifica a Sakhir, Lando Norris è onesto: \"La macchina è fantastica, il team lavora benissimo. Ma oggi non sono stato abbastanza veloce. Si può ancora recuperare in gara, ma al momento non sono soddisfatto della mia prestazione\".",
        "image": "imgs/norris_barhein.jpg",
        "tags": ["norris", "mclaren", "f12025"]
    }
]

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

app.get('/bacheca', (req, res) => {
    res.json(posts)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})