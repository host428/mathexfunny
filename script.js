let zahl1 = Math.floor(Math.random() * 10) + 1;
let zahl2 = Math.floor(Math.random() * 10) + 1;
let richtigeAntwort = zahl1 + zahl2;

document.getElementById('aufgabe').innerText = `Was ist ${zahl1} + ${zahl2}?`;

function überprüfeAntwort() {
    let antwort = parseInt(document.getElementById('antwort').value);
    let meldung = document.getElementById('meldung');
    
    if (antwort === richtigeAntwort) {
        meldung.innerText = "Richtig!";
    } else {
        meldung.innerText = "Falsch! Versuche es erneut.";
    }
}

function kommentarAbschicken() {
    let kommentarText = document.getElementById('kommentarFeld').value;
    let kommentarDiv = document.getElementById('kommentare');
    
    if (kommentarText.trim() !== "") {
        let neuerKommentar = document.createElement('p');
        neuerKommentar.innerText = kommentarText;
        // Hier könnte man "lächerliche" Kommentare hinzufügen
        kommentarDiv.appendChild(neuerKommentar);
        document.getElementById('kommentarFeld').value = "";
    }
}
