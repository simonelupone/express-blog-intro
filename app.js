const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

app.get('/bacheca', (req, res) => {
    const posts = [
        {
            title: 'GP dell\'Arabia Saudita: terza volta a Jeddah, il circuito cittadino più veloce',
            content: 'Ha fatto il suo esordio nel 2021, con lavori di sistemazione che hanno rappresentato una vera corsa contro il tempo fino a poco prima del via. Ora il circuito di Jeddah è pronto alla sua quinta volta in F1: è il tracciato cittadino più veloce del Mondiale e ha una forma inusuale, sembra una \'forcina per capelli\'. Qui verranno percorsi 50 giri per una nuova caccia alla Red Bull',
            image: 'imgs/f1_jedda_circuito_getty.jpg',
            tags: ['gp arabia saudita', 'formula 1']
        },
        {
            title: 'Nessuna penalità per Russell sulla questione DRS',
            content: 'Ufficiale: Russell non è stato penalizzato per la questione \'apertura del Drs\'. Leclerc rimane giù dal podio in 4° posizione. I motivi della decisione di non punire l\'inglese sono legati al fatto che il dispositivo è rimasto aperto per soli 37 metri. Non solo: oltre aproblemi alla centralina, George ne aveva un altro sul posteriore della W16 e per risolverlo il muretto ha ssostituito il tasto radio con un altro comando. Quindi non c\'è stata volontarietà da parte del pilota inglese',
            image: 'imgs/Immagine_WhatsApp_2025-04-13_ore_21.13.15_3cdc8a72',
            tags: ['russell', 'barhein', 'f1']
        },
        {
            title: 'La stagione di Kimi Antonelli',
            content: 'È un inizio di Mondiale importante per Kimi Antonelli, che dopo l\'esordio con una gara capolavoro in Australia e le prime difficoltà affrontate in Cina, a Suzuka è autore di un\'altra ottima gara.In Bahrain AKA ha conquistato il 4° posto in qualifica, ma una penalità lo ha fatto partire dalla quinta piazza.In gara fa un fantastico sorpasso su Verstappen, ma la strategia lo penalizza e finisce fuori dalla top 10.',
            image: 'imgs/Kimi_Antonelli_F175_Londra',
            tags: ['mercedes', 'antonelli', 'stagione2025']
        },
        {
            title: 'Hamilton dopo il GP Bahrain: "Adattamento complicato, ma non mollo"',
            content: 'ewis Hamilton analizza il 5° posto in Bahrain: "Dai test a oggi non mi aspettavo che andasse così male l\'adattamento a questa Ferrari, pensavo fosse più costante e meno complicato. Va bene così, non mollerò e continuerò a spingere. Oggi ho dimostrato di avere ancora qualcosa dentro di me, devo attingere di più da questo potenziale".',
            image: 'imgs/3934.jpg',
            tags: ['hamilton', 'ferrari', 'f1-2025']
        },
        {
            title: 'Norris dopo le qualifiche del GP Bahrain: "Macchina è la migliore, io no...".',
            content: 'Lando Norris non nasconde la delusione al termine delle qualifiche di Sakhir, con il 6° posto: "Non c\'è nulla che non sia andato, non ero abbastanza veloce.La macchina è la migliore, il team sta facendo un grande lavoro, ma io no...Qui si può superare, ci sono speranze per la gara ma oggi sono deluso".',
            image: 'imgs/norris_barhein.jpg',
            tags: ['norris', 'mclaren', 'f12025']
        }
    ]
    res.json(posts)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})