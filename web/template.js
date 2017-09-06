const template = `
  <div class="description">
    <fieldset>
      <legend class="epic-title">Description</legend>
      <div id="descriptionContent"></div>
      <p>
        <a href="./examples.html">Solution examples >></a>
      </p>
    </fieldset>
  </div>

  <div class="belt">
    <div class="karateka">
      <img src="../../../web/img/yellow_belt.png" />
    </div>
    <fieldset>
      <legend class="epic-title">Yellow belt</legend>
      <div id="yellowBeltContent"></div>
    </fieldset>
  </div>

  <div class="belt">
    <div class="karateka">
      <img src="../../../web/img/green_belt.jpg" />
    </div>
    <fieldset>
      <legend class="epic-title">Green belt</legend>
      <div id="greenBeltContent"></div>
    </fieldset>
  </div>

  <div class="belt">
    <div class="karateka">
      <img src="../../../web/img/red_belt.png" style="padding-left: 70px;" />
    </div>
    <fieldset>
      <legend class="epic-title">Red belt</legend>
      <div id="redBeltContent"></div>
    </fieldset>
  </div>

  <div class="belt">
    <div class="karateka">
      <img src="../../../web/img/black_belt.png" />
    </div>
    <fieldset>
      <legend class="epic-title">Black belt</legend>
      <div id="blackBeltContent"></div>
    </fieldset>
  </div>`

function initialize() {
  document.getElementById('kata').innerHTML = template
  document.getElementById('descriptionContent').innerHTML = kata.description
  document.getElementById('yellowBeltContent').innerHTML = kata.yellowBelt
  document.getElementById('greenBeltContent').innerHTML = kata.greenBelt
  document.getElementById('redBeltContent').innerHTML = kata.redBelt
  document.getElementById('blackBeltContent').innerHTML = kata.blackBelt
}
