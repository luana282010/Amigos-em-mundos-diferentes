
// Amigos de mundos diferentes
// A historia começa com Lia que mora no campo e decide ir para um festival, lá ela conhece Theu que mora na cidade, eles ficam amigos, Theu foi conhecer o campo e Lia a cidade,eles decidem unir campo e cidade em um festival, cada um levou um pouco do seu conhecimento do local onde moram.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}let cena = 0;
let tempo = 0;

function setup() {// criar aonde vai acontecer a historia o fundo
  createCanvas(700, 400);//
  frameRate(30);
  textAlign(CENTER, CENTER); //
  textSize(20);
}

function draw() {
  background(255);
  switch (cena) {
    case 0: cena0(); break;
    case 1: cena1(); break;
    case 2: cena2(); break;
    case 3: cena3(); break;
    case 4: cena4(); break;
    case 5: cena5(); break;
    case 6: cena6(); break;
    case 7: cena7(); break;
  }

  // Troca automática de cenas
  tempo++;
  if (tempo > 400 && cena < 7) {
    cena++;
    tempo = 0;
  }
}

// Cena 0: Introdução no campo
function cena0() {
  background(135, 206, 235);
  fill(34, 139, 34);
  rect(0, 300, width, 100);

  // Lia
  fill(255, 200, 200);
  ellipse(150, 250, 40); // cabeça
  rect(135, 270, 30, 50); // corpo

  fill(0);
  text("Lia vivia no campo, entre flores, árvores e animais...", width / 2, 50);
}

// Cena 1: Theo na cidade
function cena1() {
  background(80);
  fill(169);
  rect(200, 100, 60, 300);
  rect(300, 150, 70, 250);

  // Theo
  fill(200, 200, 255);
  ellipse(400, 300, 40); // cabeça
  rect(385, 320, 30, 50); // corpo

  fill(255);
  text("Theo morava na cidade, onde tudo era rápido e iluminado.", width / 2, 50);
}

// Cena 2: Encontro no festival
function cena2() {
  background(220);
  fill(0);
  text("Em um festival regional, Lia e Theo se encontraram pela primeira vez!", width / 2, 50);

  // Bandeirinhas
  for (let i = 0; i < width; i += 40) {
    fill(random(255), random(255), random(255));// dar cor as bandeirinhas
    triangle(i, 80, i + 20, 100, i + 40, 80);
  }

  // Lia e Theo
  fill(255, 200, 200);
  ellipse(250, 250, 40);
  rect(235, 270, 30, 50);
  fill(200, 200, 255);
  ellipse(450, 250, 40);
  rect(435, 270, 30, 50);
}

// Cena 3: Explorando o campo
function cena3() {
  background(135, 206, 235);
  fill(34, 139, 34);
  rect(0, 300, width, 100);

  fill(0);
  text("Theo visitou o campo. Aprendeu sobre a terra, os animais e as plantas.", width / 2, 50);
}

// Cena 4: Visitando a cidade
function cena4() {
  background(100);
  fill(169);
  rect(200, 100, 60, 300);
  rect(300, 150, 70, 250);

  fill(0);
  text("Lia foi à cidade. Conheceu os museus, a tecnologia e os metrôs.", width / 2, 50);
}

// Cena 5: Plano de união
function cena5() {
  background(245);
  fill(0);
  text("Eles decidiram unir os dois mundos com um projeto: Cidade + Campo!", width / 2, 50);

  // Mapa
  fill(0, 100, 0);
  ellipse(200, 250, 80);
  fill(100);
  rect(400, 220, 60, 60);

  stroke(0);
  line(240, 250, 400, 250); // linha para unir a cidade e o campo
  noStroke();
}

// Cena 6: Festa de união
function cena6() {
  background(255, 228, 196);
  fill(0);
  text("No dia da festa, todos trouxeram um pouco do seu mundo para compartilhar!", width / 2, 50);

  // Bandeirinhas
  for (let i = 0; i < width; i += 40) {
    fill(random(255), random(255), random(255));
    triangle(i, 90, i + 20, 110, i + 40, 90); // fazer as bandeirinhas serem triangulares
  }

  // Pessoas
  for (let i = 0; i < 8; i++) {
    fill(150 + i * 10, 100, 255 - i * 10);
    ellipse(70 + i * 80, 250, 30);
    rect(60 + i * 80, 270, 20, 40);
  }
}

// Cena 7: Final
function cena7() {
  background(200, 255, 200);
  fill(0);
  textSize(18);
  text("Agora, campo e cidade caminham juntos, conectados pelo respeito e amizade!", width / 2, 180);

  textSize(16);
  text("FIM", width / 2, 300);
}
