// CONFIGURATION BF1 - Modifiable depuis l'admin
const BF1_CONFIG = {
    // Lien du direct (à remplacer par le vrai flux BF1)
    directUrl: "",
    
    // Liste des émissions officielles BF1
    emissions: [
        { nom: "JT 13h", type: "Journal", heure: "13h" },
        { nom: "JT 19h30", type: "Journal", heure: "19h30" },
        { nom: "Kibaye Wakto", type: "Journal en mooré", heure: "20h10" },
        { nom: "Ligne de Mire", type: "Magazine politique", heure: "" },
        { nom: "Pépites d'Entreprise", type: "Téléréalité", heure: "" },
        { nom: "La Télé s'Amuz", type: "Divertissement", heure: "" }
    ],
    
    // Dernière mise à jour
    lastUpdate: new Date().toLocaleString()
};
