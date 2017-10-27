const kata = {
  description: `<p>
                  This exercise is an adaptation of the exercise proposed by Sandro Mancuso for his <a href="http://www.meetup.com/Barcelona-Software-Craftsmanship/messages/boards/thread/48519810" target="_blank">Crafting Code course</a>.
                </p>

                <p>
                  WARNING! This is an imaginary case for the Katayuno of the Devscola.
                </p>

                <p>
                  Flywire is thinking of an exercise designed for the fellows who want to join the company. Each developer asks for conditions for that exercise. Just for participating, they will invite you to breakfast. The more conditions you meet, the greater your reward will be. Just think about the riches that await you.
                </p>

                <p>
                  This exercise is about managing a bank account in which several actions can be taken.
                </p>`,

  yellowBelt: `<p>
                <p>The bank account shows the income money.<p>
                <p>Example</p>
                <ul>
                  <li>The client makes a deposit of 1000.00 on 01/04/2014</li>
                  <li>The client makes a deposit of 500.00 on 02/04/2014</li>
                </ul>
                <p>
                  <div>Output:</div>
                  <div>date || credit || balance</div>
                  <div>02/04/2014 || 500.00 || 1500.00</div>
                  <div>01/04/2014 || 1000.00 || 1000.00</div>
                </p>
              </p>`,

    greenBelt: `<p>
                  <p>The bank account shows the deposits and withdrawals</p>
                  <p>Example</p>
                  <ul>
                    <li>The client makes a deposit of 1000.00 on 01/04/2014</li>
                    <li>The client makes withdrawal of 200 on 02/04/2014</li>
                    <li>The client makes a deposit of 500.00 on 03/04/2014</li>
                  </ul>
                  <p>
                    <div>Output:</div>
                    <div>date || credit || debit || balance</div>
                    <div>03/04/2014 || 500.00 || || 1300.00</div>
                    <div>02/04/2014 || || 200.00 || 800.00</div>
                    <div>01/04/2014 || 1000.00 || || 1000.00</div>
                  </p>
                </p>`,

    redBelt: `<p>
                <p>The bank account shows the deposits, withdrawals and transfer between accounts</p>
                  <p>Example</p>
                  <ul>
                    <li>The first client makes a deposit of 1000.00 on 01/04/2014</li>
                    <li>The first client makes withdrawal of 200 on 02/04/2014</li>
                    <li>The first client makes a deposit of 500.00 on 03/04/2014</li>
                    <li>The first client makes a transfer to the second client of 500.00 on 04/04/2014</li>
                  </ul>
                  <p>
                    <div>First client Output:</div>
                    <div>date || credit || debit || balance</div>
                    <div>04/04/2014 || || 500.00 || 800.00</div>
                    <div>03/04/2014 || 500.00 || || 1300.00</div>
                    <div>02/04/2014 || || 200.00 || 800.00</div>
                    <div>01/04/2014 || 1000.00 || || 1000.00</div>
                  </p>

                  <ul>
                    <li>The second client makes a deposit of 500.00 on 01/04/2014</li>
                    <li>The second client makes withdrawal of 100 on 02/04/2014</li>
                    <li>The second client receives a transfer from the first client of 500.00 on 04/04/2014</li>
                  </ul>
                  <p>
                    <div>Second client Output:</div>
                    <div>date || credit || debit || balance</div>
                    <div>04/04/2014 || 500.00 || || 900.00</div>
                    <div>02/04/2014 || || 100.00 || 400.00</div>
                    <div>01/04/2014 || 500.00 || || 500.00</div>
                  </p>
              </p>`,

    blackBelt: `<p>
                  It will ask you some conditions for your code.
                  <ul>
                    <li>Don't use the ELSE keyword</li>
                    <li>Wrap all primitives and Strings</li>
                    <li>No classes with more than two instance variables</li>
                    <li>No getters/setters</li>
                  </ul>
                </p>`
}
