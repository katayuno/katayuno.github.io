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
      <img src="../../../web/img/bank_account/sizar.png" />
    </div>
    <fieldset>
      <legend class="epic-title">The sizar</legend>
      <div id="sizar"></div>
    </fieldset>
  </div>

  <div class="belt">
    <div class="karateka">
      <img src="../../../web/img/bank_account/software_developer.png" />
    </div>
    <fieldset>
      <legend class="epic-title">The software developer</legend>
      <div id="software-developer"></div>
    </fieldset>
  </div>

  <div class="belt">
    <div class="karateka">
      <img src="../../../web/img/bank_account/veteran.png"/>
    </div>
    <fieldset>
      <legend class="epic-title">The veteran</legend>
      <div id="veteran"></div>
    </fieldset>
  </div>

  <div class="belt">
    <div class="karateka">
      <img src="../../../web/img/bank_account/most_veteran.png" />
    </div>
    <fieldset>
      <legend class="epic-title">The most veteran</legend>
      <div id="most-veteran"></div>
    </fieldset>
  </div>`

function initialize() {
  document.getElementById('kata').innerHTML = template
  document.getElementById('descriptionContent').innerHTML = kata.description
  document.getElementById('sizar').innerHTML = kata.yellowBelt
  document.getElementById('software-developer').innerHTML = kata.greenBelt
  document.getElementById('veteran').innerHTML = kata.redBelt
  document.getElementById('most-veteran').innerHTML = kata.blackBelt
}
