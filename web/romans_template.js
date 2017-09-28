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
      <img src="../../../web/img/romans/praetorian.gif" />
    </div>
    <fieldset>
      <legend class="epic-title">Praetorian</legend>
      <div id="praetorian"></div>
    </fieldset>
  </div>

  <div class="belt">
    <div class="karateka">
      <img src="../../../web/img/romans/centurion.gif" />
    </div>
    <fieldset>
      <legend class="epic-title">Centurion</legend>
      <div id="centurion"></div>
    </fieldset>
  </div>

  <div class="belt">
    <div class="karateka">
      <img src="../../../web/img/romans/prefectraetorian_prefect.gif" style="padding-left: 70px;" />
    </div>
    <fieldset>
      <legend class="epic-title">Praetorian prefect</legend>
      <div id="raetorianPrefect"></div>
    </fieldset>
  </div>

  <div class="belt">
    <div class="karateka">
      <img src="../../../web/img/romans/caesar.gif" />
    </div>
    <fieldset>
      <legend class="epic-title">Caesar</legend>
      <div id="caesar"></div>
    </fieldset>
  </div>`

function initialize() {
  document.getElementById('kata').innerHTML = template
  document.getElementById('descriptionContent').innerHTML = kata.description
  document.getElementById('praetorian').innerHTML = kata.yellowBelt
  document.getElementById('centurion').innerHTML = kata.greenBelt
  document.getElementById('raetorianPrefect').innerHTML = kata.redBelt
  document.getElementById('caesar').innerHTML = kata.blackBelt
}
