// ANATOMY QUEST — MÚSCULOS DEL TREN SUPERIOR

const M = [
["Esternocleidomastoideo","Cuello","Manubrio del esternón y tercio medial de la clavícula","Apófisis mastoides","Flexiona el cuello e inclina la cabeza; rota la cara al lado contrario",1],
["Escalenos (anterior, medio y posterior)","Cuello","Apófisis transversas cervicales","Primera y segunda costillas","Elevan las costillas y ayudan a inclinar el cuello",2],
["Platisma","Cuello","Fascia superficial del tórax","Mandíbula y piel de la parte inferior de la cara","Tensa la piel del cuello y ayuda a descender la mandíbula",2],
["Suprahioideos","Cuello","Mandíbula y base del cráneo","Hueso hioides","Elevan el hioides y la laringe durante la deglución",2],
["Infrahioideos","Cuello","Esternón, clavícula y escápula","Hioides y cartílago tiroides","Descienden el hioides y la laringe",2],

["Trapecio","Hombro","Hueso occipital, ligamento nucal y apófisis espinosas C7-T12","Clavícula, acromion y espina de la escápula","Eleva, retrae y rota superiormente la escápula",1],
["Deltoides","Hombro","Tercio lateral de la clavícula, acromion y espina escapular","Tuberosidad deltoidea del húmero","Abduce el brazo; fibras anteriores flexionan y mediales extienden",1],
["Supraespinoso","Hombro","Fosa supraespinosa de la escápula","Tubérculo mayor del húmero","Inicia la abducción del brazo y estabiliza el hombro",2],
["Infraespinoso","Hombro","Fosa infraespinosa de la escápula","Tubérculo mayor del húmero","Rota lateralmente el brazo",2],
["Redondo menor","Hombro","Borde lateral de la escápula","Tubérculo mayor del húmero","Rota lateralmente el brazo y estabiliza el hombro",2],
["Redondo mayor","Hombro","Ángulo inferior de la escápula","Labio medial del surco intertubercular del húmero","Extiende, aduce y rota medialmente el brazo",2],
["Subescapular","Hombro","Fosa subescapular","Tubérculo menor del húmero","Rota medialmente el brazo",2],
["Coracobraquial","Hombro","Apófisis coracoides de la escápula","Cara medial del húmero","Flexiona y aduce el brazo",2],

["Pectoral mayor","Tórax","Clavícula, esternón y cartílagos costales","Labio lateral del surco intertubercular del húmero","Aduce y rota medialmente el brazo; ayuda a flexionarlo",1],
["Pectoral menor","Tórax","Costillas 3 a 5","Apófisis coracoides de la escápula","Estabiliza, desciende y protrae la escápula",2],
["Serrato anterior","Tórax","Caras externas de las costillas 1 a 8/9","Borde medial anterior de la escápula","Protrae y fija la escápula contra la pared torácica",2],
["Intercostales externos","Tórax","Borde inferior de cada costilla","Borde superior de la costilla inferior","Elevan las costillas durante la inspiración",2],
["Intercostales internos","Tórax","Surco costal","Borde superior de la costilla inferior","Ayudan a deprimir las costillas en espiración forzada",2],
["Transverso del tórax","Tórax","Cara posterior del esternón y apófisis xifoides","Cartílagos costales 2 a 6","Ayuda a deprimir los cartílagos costales",3],

["Trapecio (porción posterior)","Espalda","Occipital, ligamento nucal y apófisis espinosas C7-T12","Clavícula, acromion y espina escapular","Eleva, retrae y rota la escápula",1],
["Dorsal ancho","Espalda","Apófisis T7-T12, fascia toracolumbar, cresta ilíaca y costillas inferiores","Surco intertubercular del húmero","Extiende, aduce y rota medialmente el brazo",1],
["Romboides mayor","Espalda","Apófisis espinosas T2-T5","Borde medial de la escápula","Retrae y fija la escápula",2],
["Romboides menor","Espalda","Ligamento nucal y apófisis espinosas C7-T1","Borde medial de la escápula, raíz de la espina","Retrae y estabiliza la escápula",2],
["Elevador de la escápula","Espalda","Apófisis transversas C1-C4","Borde medial superior de la escápula","Eleva la escápula",2],
["Serrato posterior superior","Espalda","Ligamento nucal y apófisis espinosas C7-T3","Costillas 2 a 5","Eleva las costillas superiores",3],
["Serrato posterior inferior","Espalda","Apófisis espinosas T11-L2 y fascia toracolumbar","Costillas 9 a 12","Desciende y estabiliza las costillas inferiores",3],
["Esplenio de la cabeza","Espalda","Ligamento nucal y apófisis espinosas C7-T3/T4","Apófisis mastoides y línea nucal superior","Extiende la cabeza; rota e inclina hacia el mismo lado",3],
["Longísimo de la cabeza y cuello","Espalda","Apófisis transversas torácicas y cervicales inferiores","Apófisis mastoides y vértebras cervicales","Extiende e inclina la cabeza y el cuello",3],
["Iliocostal","Espalda","Tendón común erector de la columna y fascia toracolumbar","Ángulos de las costillas y apófisis transversas cervicales","Extiende e inclina lateralmente la columna",3],
["Multífidos","Espalda","Sacro y apófisis transversas vertebrales","Apófisis espinosas de vértebras superiores","Estabilizan y ayudan a extender/rotar la columna",3],
["Dorsal corto (rotadores y músculos profundos)","Espalda","Apófisis transversas vertebrales","Apófisis espinosas de vértebras cercanas","Estabilizan y participan en la rotación vertebral",3],

["Bíceps braquial","Brazo","Tubérculo supraglenoideo y apófisis coracoides","Tuberosidad del radio","Flexiona el codo y supina el antebrazo",1],
["Braquial","Brazo","Cara anterior distal del húmero","Apófisis coronoides y tuberosidad de la ulna","Flexiona el codo",1],
["Braquiorradial","Brazo","Cresta supracondílea lateral del húmero","Extremo distal del radio","Flexiona el codo, especialmente en posición neutra",2],
["Tríceps braquial","Brazo","Tubérculo infraglenoideo y caras posterior y lateral del húmero","Olécranon de la ulna","Extiende el codo",1],
["Ancóneo","Brazo","Epicóndilo lateral del húmero","Olécranon y ulna proximal","Ayuda a extender y estabilizar el codo",3],

["Flexor radial del carpo","Antebrazo","Epicóndilo medial del húmero","Base del segundo metacarpiano (a veces tercero)","Flexiona y abduce la muñeca",2],
["Palmar largo","Antebrazo","Epicóndilo medial del húmero","Aponeurosis palmar","Flexiona la muñeca y tensa la aponeurosis palmar",3],
["Flexor ulnar del carpo","Antebrazo","Epicóndilo medial y olécranon","Pisiforme, gancho del ganchoso y base del quinto metacarpiano","Flexiona y aduce la muñeca",2],
["Flexor superficial de los dedos","Antebrazo","Epicóndilo medial, apófisis coronoides y radio","Falanges medias de los dedos 2 a 5","Flexiona las articulaciones interfalángicas proximales",2],
["Flexor profundo de los dedos","Antebrazo","Ulna anterior y membrana interósea","Falanges distales de los dedos 2 a 5","Flexiona las articulaciones interfalángicas distales",3],
["Pronador redondo","Antebrazo","Epicóndilo medial y apófisis coronoides","Cara lateral del radio","Prona el antebrazo y ayuda a flexionar el codo",2],
["Pronador cuadrado","Antebrazo","Cuarto distal anterior de la ulna","Cuarto distal anterior del radio","Prona el antebrazo",3],
["Extensor radial largo del carpo","Antebrazo","Cresta supracondílea lateral del húmero","Base del segundo metacarpiano","Extiende y abduce la muñeca",2],
["Extensor radial corto del carpo","Antebrazo","Epicóndilo lateral del húmero","Base del tercer metacarpiano","Extiende y abduce la muñeca",2],
["Extensor de los dedos","Antebrazo","Epicóndilo lateral del húmero","Expansiones extensoras de los dedos 2 a 5","Extiende los dedos y ayuda a extender la muñeca",2],
["Extensor del meñique","Antebrazo","Epicóndilo lateral del húmero","Expansión extensora del quinto dedo","Extiende el meñique",3],
["Extensor ulnar del carpo","Antebrazo","Epicóndilo lateral y ulna posterior","Base del quinto metacarpiano","Extiende y aduce la muñeca",2]
].map((a,i)=>({
  id:i,
  name:a[0],
  region:a[1],
  origin:a[2],
  insertion:a[3],
  action:a[4],
  level:a[5]
}));

const regions = ["Cuello","Hombro","Tórax","Espalda","Brazo","Antebrazo"];
const $ = id => document.getElementById(id);

let xp = +(localStorage.aqXP || 0);
let mastered = JSON.parse(localStorage.aqMaster || "[]");
let currentRegion = "Todas";
let pool = [];
let round = [];
let index = 0;
let score = 0;
let lives = 3;
let answered = false;
let filter = "Todas";
let flashIndex = 0;
let flashList = [...M];

function save() {
  localStorage.aqXP = xp;
  localStorage.aqMaster = JSON.stringify(mastered);
  $("xpTop").textContent = xp;
  $("mastered").textContent = mastered.length;
  $("progress").style.width = (mastered.length / M.length * 100) + "%";
  $("percent").textContent = Math.round(mastered.length / M.length * 100) + "% completado";
}

function show(id) {
  document.querySelectorAll(".screen").forEach(s => {
    s.classList.toggle("active", s.id === id);
  });
  window.scrollTo(0,0);
}

function start(region = "Todas", difficulty = "all") {
  currentRegion = region;

  pool = M.filter(m =>
    (region === "Todas" || m.region === region) &&
    (
      difficulty === "all" ||
      (difficulty === "easy" && m.level === 1) ||
      (difficulty === "medium" && m.level === 2) ||
      (difficulty === "hard" && m.level === 3)
    )
  );

  if (pool.length < 4) {
    pool = M.filter(m => region === "Todas" || m.region === region);
  }

  round = [];
  let copy = [...pool];

  while (copy.length && round.length < 10) {
    round.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0]);
  }

  index = 0;
  score = 0;
  lives = 3;
  show("quiz");
  renderQ();
}

function renderQ() {
  answered = false;
  let m = round[index];

  $("regionName").textContent = currentRegion.toUpperCase();
  $("lives").textContent = "♥ ".repeat(lives) + "♡ ".repeat(3-lives);
  $("qcount").textContent = `Pregunta ${index+1} de ${round.length}`;
  $("qbar").style.width = (index / round.length * 100) + "%";
  $("qtitle").textContent = "Pon a prueba tu memoria";

  let type = Math.floor(Math.random() * 3);
  let opts;

  if (type === 0) {
    $("qtype").textContent = "IDENTIFICA EL MÚSCULO";
    $("question").textContent = m.action;
    $("hint").textContent = "¿Qué músculo realiza principalmente esta acción?";
    opts = [m, ...shuffle(pool.filter(x => x.id !== m.id)).slice(0,3)]
      .map(x => x.name);
  } else if (type === 1) {
    $("qtype").textContent = "ORIGEN E INSERCIÓN";
    $("question").textContent = `¿Cuál es el origen del ${m.name}?`;
    $("hint").textContent = "Selecciona la descripción anatómica correcta.";
    opts = [m.origin, ...shuffle(pool.filter(x => x.id !== m.id))
      .slice(0,3).map(x => x.origin)];
  } else {
    $("qtype").textContent = "ACCIÓN MUSCULAR";
    $("question").textContent = `¿Cuál es la acción del ${m.name}?`;
    $("hint").textContent = "Piensa en el movimiento que produce.";
    opts = [m.action, ...shuffle(pool.filter(x => x.id !== m.id))
      .slice(0,3).map(x => x.action)];
  }

  opts = shuffle([...new Set(opts)]);
  $("answers").innerHTML = "";

  opts.forEach(o => {
    let b = document.createElement("button");
    b.className = "option";
    b.textContent = o;
    b.onclick = () => answer(b,o,m,type);
    $("answers").append(b);
  });

  $("feedback").textContent = "";
  $("next").disabled = true;
  $("next").textContent = index === round.length-1 ? "Ver resultado" : "Siguiente →";
}

function answer(btn,o,m,type) {
  if (answered) return;
  answered = true;

  let correct = type === 0 ? m.name : type === 1 ? m.origin : m.action;
  let ok = o === correct;

  document.querySelectorAll(".option").forEach(b => {
    b.disabled = true;
    if (b.textContent === correct) b.classList.add("correct");
  });

  if (ok) {
    score++;
    xp += 10;
    mastered = [...new Set([...mastered,m.id])];
    $("feedback").textContent = "¡Correcto! +10 XP. " + m.name + " — " + m.action;
  } else {
    lives--;
    btn.classList.add("wrong");
    $("feedback").textContent =
      "La respuesta era: " + correct +
      ". " + m.name + " se origina en " + m.origin +
      " y se inserta en " + m.insertion + ".";
  }

  save();

  $("lives").textContent = "♥ ".repeat(lives) + "♡ ".repeat(3-lives);
  $("next").disabled = false;

  if (lives === 0) {
    $("next").textContent = "Terminar ronda";
  }
}

function finish() {
  show("result");
  $("correct").textContent = score + "/" + round.length;
  $("earned").textContent = score * 10;
  $("accuracy").textContent = Math.round(score / round.length * 100) + "%";

  $("resultTitle").textContent =
    score >= 8 ? "¡Excelente dominio!" :
    score >= 5 ? "¡Vas por buen camino!" :
    "¡A seguir practicando!";
}

function shuffle(a) {
  return a.sort(() => Math.random() - .5);
}

function regionCards() {
  $("regions").innerHTML = "";
  let icons = ["🧠","💪","🫁","🔙","🏋️","✋"];

  regions.forEach((r,i) => {
    let count = M.filter(m => m.region === r).length;
    let b = document.createElement("button");

    b.className = "region";
    b.innerHTML =
      `<span style="font-size:25px">${icons[i]}</span>
       <b>${r}</b>
       <small>${count} fichas · Nivel ${i===0||i===2 ? "básico" : "mixto"}</small>`;

    b.onclick = () => start(r,$("difficulty").value);
    $("regions").append(b);
  });
}

function renderLibrary() {
  let q = $("search").value.toLowerCase();
  $("muscles").innerHTML = "";

  M.filter(m =>
    (filter === "Todas" || m.region === filter) &&
    [m.name,m.region,m.origin,m.insertion,m.action]
      .join(" ").toLowerCase().includes(q)
  ).forEach(m => {
    let d = document.createElement("article");
    d.className = "muscle";

    d.innerHTML =
      `<small>${m.region.toUpperCase()} · ${m.level===1 ? "FÁCIL" : m.level===2 ? "MEDIO" : "DIFÍCIL"}</small>
       <h3>${m.name}</h3>
       <p><b>Origen:</b> ${m.origin}</p>
       <p><b>Inserción:</b> ${m.insertion}</p>
       <p><b>Acción:</b> ${m.action}</p>`;

    $("muscles").append(d);
  });
}

function renderFilters() {
  $("filters").innerHTML = "";

  ["Todas",...regions].forEach(r => {
    let b = document.createElement("button");
    b.textContent = r;
    b.className = filter === r ? "selected" : "";

    b.onclick = () => {
      filter = r;
      renderFilters();
      renderLibrary();
    };

    $("filters").append(b);
  });
}

function renderFlash() {
  let m = flashList[flashIndex];

  $("flashCount").textContent =
    `Tarjeta ${flashIndex+1} de ${flashList.length}`;

  $("front").textContent = m.name;
  $("back").hidden = true;

  $("back").innerHTML =
    `<b>Región:</b> ${m.region}<br>
     <b>Origen:</b> ${m.origin}<br>
     <b>Inserción:</b> ${m.insertion}<br>
     <b>Acción:</b> ${m.action}`;
}

// NAVEGACIÓN
document.querySelectorAll("[data-go]").forEach(b => {
  b.onclick = () => {
    show(b.dataset.go);

    if (b.dataset.go === "library") {
      renderFilters();
      renderLibrary();
    }

    if (b.dataset.go === "flash") {
      renderFlash();
    }
  };
});

// BOTONES DEL JUEGO
$("playAll").onclick = () =>
  start("Todas",$("difficulty").value);

$("navPlay").onclick = () =>
  start("Todas",$("difficulty").value);

$("next").onclick = () => {
  if (!answered) return;

  if (index === round.length-1 || lives === 0) {
    finish();
  } else {
    index++;
    renderQ();
  }
};

$("retry").onclick = () => start(currentRegion);
$("search").oninput = renderLibrary;

$("card").onclick = () => {
  $("back").hidden = !$("back").hidden;
};

$("prev").onclick = () => {
  flashIndex = (flashIndex - 1 + flashList.length) % flashList.length;
  renderFlash();
};

$("nextCard").onclick = () => {
  flashIndex = (flashIndex + 1) % flashList.length;
  renderFlash();
};

$("shuffle").onclick = () => {
  flashList = shuffle([...M]);
  flashIndex = 0;
  renderFlash();
};

// INICIALIZACIÓN
save();
regionCards();
