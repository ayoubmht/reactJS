
let aujourdhui = new Date();
let heure = aujourdhui.getHours();
let minutes = aujourdhui.getMinutes();
let jour = aujourdhui.getDate();
let mois = aujourdhui.getMonth();
let annee = aujourdhui.getFullYear();


function App() {
  return (
    <div>
      Nous sommes le {jour}/{mois}/{annee} et il est {heure}:{minutes}.
    </div>
  );
}

export default App;
