import { snakeBlock, snakeClose } from "./variables";

const canvas = document.querySelector("canvas");
const snakeDiv = document.querySelector(".snake");
const ctx = canvas.getContext("2d");

function snakeGame() {
  let speed = 600;
  let direction = "n";
  const grid = 40;
  var snake = [
    [9, 9],
    [8, 9],
    [7, 9],
  ];

  let apple = [5, 5];
  let score = 0;

  const drawMap = () => {
    ctx.fillStyle = "#cd3838";
    ctx.fillRect(0, 0, 800, 800);
  };

  const drawSnake = () => {
    ctx.fillStyle = "white";

    for (let body of snake) {
      ctx.fillRect(body[0] * grid, body[1] * grid, grid, grid);
    }
  };

  const drawApple = () => {
    ctx.fillStyle = "#1c1c1c";

    ctx.fillRect(apple[0] * grid, apple[1] * grid, grid, grid);
  };

  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowRight": {
        direction = "e";
        break;
      }
      case "ArrowLeft": {
        direction = "o";
        break;
      }
      case "ArrowUp": {
        direction = "n";
        break;
      }
      case "ArrowDown": {
        direction = "s";
        break;
      }
    }
  });

  drawMap();
  drawApple();
  drawSnake();

  const gameover = () => {
    if (
      snake[0][0] > 19 ||
      snake[0][0] < 0 ||
      snake[0][1] > 19 ||
      snake[0][1] < 0
    ) {
      return true;
    } else {
      const [head, ...body] = snake;
      for (let bodyElem of body) {
        if (bodyElem[0] === head[0] && bodyElem[1] === head[1]) {
          return true;
        }
      }
    }
    return false;
  };

  const generateApple = () => {
    score++;

    if (score % 2 === 0) {
      speed = speed + 50;
    }

    const [x, y] = [
      Math.trunc(Math.random() * 19),
      Math.trunc(Math.random() * 19),
    ];

    for (let body of snake) {
      if (body[0] === x && body[1] === y) {
        return generateApple();
      }
    }
    apple = [x, y];
  };

  const updateSnakePostion = () => {
    let head;
    switch (direction) {
      case "e": {
        head = [snake[0][0] + 1, snake[0][1]];
        break;
      }
      case "o": {
        head = [snake[0][0] - 1, snake[0][1]];
        break;
      }
      case "n": {
        head = [snake[0][0], snake[0][1] - 1];
        break;
      }

      case "s": {
        head = [snake[0][0], snake[0][1] + 1];
        break;
      }
    }

    snake.unshift(head);

    if (head[0] === apple[0] && head[1] === apple[1]) {
      generateApple();
    } else {
      snake.pop();
    }

    return gameover();
  };

  const drawScore = () => {
    ctx.fillStyle = "white";
    ctx.font = "40px sans-serif";
    ctx.textBaseline = "top";
    ctx.fillText(score, grid, grid);
  };

  const move = () => {
    if (!updateSnakePostion()) {
      drawMap();
      drawApple();
      drawSnake();
      drawScore();
      setTimeout(() => {
        requestAnimationFrame(move);
      }, 1000 - speed);
    } else {
      snakeDiv.innerHTML = `<div class='content-snake'><p>perdu, votre score est de : ${score}</p> <button class="buttonSnake">rejouer</button></div>`;
      snakeDiv.lastChild.addEventListener("click", (e) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snake = [
          [9, 9],
          [8, 9],
          [7, 9],
        ];
        score = 0;
        drawApple();
        drawSnake();
        requestAnimationFrame(move);
        snakeDiv.childNodes[0].remove();
      });
    }
  };

  requestAnimationFrame(move);
}

const play = document.querySelector("#play");

const contentSnake = document.querySelector(".content-snake");

play.addEventListener("click", (e) => {
  snakeBlock.classList.remove("display");
  snakeGame();
});

snakeClose.addEventListener("click", (e) => {
  snakeDiv.innerHTML = "";
  snakeBlock.classList.add("display");
});
