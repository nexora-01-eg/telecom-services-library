const board = document.getElementById("board");
const statusEl = document.getElementById("status");
const cells = document.querySelectorAll(".cell");
const scoreXEl = document.getElementById("scoreX");
const scoreOEl = document.getElementById("scoreO");
const scoreDrawEl = document.getElementById("scoreDraw");
const newGameBtn = document.getElementById("newGame");
const resetScoresBtn = document.getElementById("resetScores");

const WIN_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

const STORAGE_KEY = "xo-scores";
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;
let scores = loadScores();

function loadScores() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { x: 0, o: 0, draw: 0 };
  } catch {
    return { x: 0, o: 0, draw: 0 };
  }
}

function saveScores() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(scores));
}

function renderScores() {
  scoreXEl.textContent = scores.x;
  scoreOEl.textContent = scores.o;
  scoreDrawEl.textContent = scores.draw;
}

function setStatus(msg) {
  statusEl.textContent = msg;
}

function handleCellClick(e) {
  const index = parseInt(e.target.dataset.i, 10);
  if (gameOver || gameState[index] !== "") return;

  gameState[index] = currentPlayer;
  e.target.textContent = currentPlayer;
  e.target.classList.add(currentPlayer.toLowerCase());

  if (checkWinner()) return;
  if (gameState.every((cell) => cell !== "")) {
    scores.draw++;
    saveScores();
    renderScores();
    gameOver = true;
    setStatus("🤝 تعادل! مفيش فايز");
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  setStatus(`دور اللاعب ${currentPlayer}`);
}

function checkWinner() {
  for (const line of WIN_LINES) {
    const [a, b, c] = line;
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      const winner = gameState[a];
      gameOver = true;
      scores[winner.toLowerCase()]++;
      saveScores();
      renderScores();
      line.forEach((i) => cells[i].classList.add("win"));
      setStatus(`🎉 اللاعب ${winner} كسب!`);
      return true;
    }
  }
  return false;
}

function resetBoard() {
  gameState = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameOver = false;
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("x", "o", "win");
  });
  setStatus("دور اللاعب X");
}

cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
newGameBtn.addEventListener("click", resetBoard);
resetScoresBtn.addEventListener("click", () => {
  scores = { x: 0, o: 0, draw: 0 };
  saveScores();
  renderScores();
  resetBoard();
});

renderScores();
