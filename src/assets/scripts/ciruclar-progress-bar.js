export default function circular_loader() {
  let readyTask = document.getElementById("readyTask").innerText;
  let totalTask = document.getElementById("totalTask").innerText;
  let value = +readyTask * (100 / +totalTask);
  console.log(readyTask, totalTask, value);
  let can = document.getElementById("circular-canvas");
  let c = can.getContext("2d");

  let posX = can.width / 2,
    posY = can.height / 2,
    fps = 1000 / 200,
    oneProcent = 360 / 100,
    result = oneProcent * value;

  c.lineCap = "round";
  arcMove();

  function arcMove() {
    let deegres = 0;
    let acrInterval = setInterval(function () {
      deegres += 1;
      c.clearRect(0, 0, can.width, can.height);
      c.beginPath(); //riel
      c.arc(
        posX,
        posY,
        can.width / 2.5,
        (Math.PI / 180) * 270,
        (Math.PI / 180) * (270 + 360)
      );
      c.strokeStyle = "#f5f5f5";
      c.lineWidth = can.width / 15;
      c.stroke();

      c.beginPath(); //iniciador
      c.strokeStyle = "#008000";
      c.lineWidth = can.width / 15;
      c.arc(
        posX,
        posY,
        can.width / 2.5,
        (Math.PI / 180) * 270,
        (Math.PI / 180) * (270 + deegres)
      );
      c.stroke();
      if (deegres >= result) clearInterval(acrInterval);
    }, fps);
  }
}