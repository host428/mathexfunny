// Laden der Kommentare beim Seitenaufruf
window.onload = function() {
    ladeKommentare();
};

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
        
        kommentarDiv.appendChild(neuerKommentar);

        // Kommentar im localStorage speichern
        speichereKommentar(kommentarText);

        document.getElementById('kommentarFeld').value = "";
    }
}

function speichereKommentar(kommentar) {
    // Alle vorhandenen Kommentare laden
    let kommentare = JSON.parse(localStorage.getItem('kommentare')) || [];
    
    // Neuen Kommentar hinzufügen
    kommentare.push(kommentar);
    
    // Kommentare zurück in den localStorage speichern
    localStorage.setItem('kommentare', JSON.stringify(kommentare));
}

function ladeKommentare() {
    let kommentare = JSON.parse(localStorage.getItem('kommentare')) || [];
    let kommentarDiv = document.getElementById('kommentare');
    
    // Vorhandene Kommentare anzeigen
    kommentare.forEach(kommentar => {
        let kommentarElement = document.createElement('p');
        kommentarElement.innerText = kommentar;
        kommentarDiv.appendChild(kommentarElement);
    });
}

