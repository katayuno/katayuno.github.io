const kata = {
  description: `<p>
                  A Mars rover is an automated motor vehicle that propels itself across the surface of the planet Mars upon arrival. Rovers have several advantages over stationary landers: they examine more territory, and they can be directed to interesting features, they can place themselves in sunny positions to weather winter months, and they can advance the knowledge of how to perform very remote robotic vehicle control.
                </p>
                <p>
                  There have been four successful robotically operated Mars rovers. The Jet Propulsion Laboratory managed the Mars Pathfinder mission and its now inactive Sojourner rover. It currently manages the Mars Exploration Rover mission's active Opportunity rover and inactive Spirit, and, as part of the Mars Science Laboratory mission, the Curiosity rover. On January 24, 2016 NASA reported that current studies on the Mars by the Curiosity and Opportunity rovers will now be searching for evidence of ancient life, including a biosphere based on autotrophic, chemotrophic, and/or chemolithoautotrophic microorganisms, as well as ancient water, including fluvio-lacustrine environments (plains related to ancient rivers or lakes) that may have been habitable. The search for evidence of habitability, taphonomy (related to fossils), and organic carbon on Mars is now a primary NASA objective.
                </p>`,

  yellowBelt: `<p>
                <ul>
                  <li>The rover knows its landing zone.</li>
                </ul>
              </p>

              <p>
                <h3>Sample code:</h3>
                <code>
                  <p>
                    Landing position: 5, 5, N
                  </p>

                  <p>
                    Command: ""
                  </p>

                  <p>
                    Final position: 5, 5, N
                  </p>
                </code>
              </p>`,

    greenBelt: `<p>
                  <ul>
                    <li>The rover knows its final position.</li>
                    <li>The rover receives a list of letters as command.</li>
                    <li>When the rover recives the command "M" it moves forward.</li>
                    <li>When the rover recives the command "R" it turns 90 degrees right.</li>
                    <li>When the rover recives the command "L" it turns 90 degrees left.</li>
                  </ul>
                </p>

                <p>
                  <h3>Sample code:</h3>
                  <code>
                    <p>
                      Landing position: 1, 2, N
                    </p>

                    <p>
                      Command: "MMM"
                    </p>

                    <p>
                      Final position: 1, 5, N
                    </p>
                  </code>
                </p>`,

    redBelt: `<p>
                <ul>
                 <li>Now the rover has to know the world dimensions.</li>
                 <li>If the rover passes the world's edge, it appears in the opposite world position (Planets are spherical).</li>
                </ul>
              </p>

              <p>
                <h3>Sample code:</h3>
                <code>
                  <p>
                    World dimensions: 5, 5
                  </p>

                  <p>
                    Landing position: 1, 1, N
                  </p>

                  <p>
                    Command: "MMMMM"
                  </p>

                  <p>
                    Final position: 1, 1, N
                  </p>
                </code>
              </p>`,

    blackBelt: `<p>
                  <ul>
                    <li>Do not use conditionals.</li>
                    <li>Use methods (no returns).</li>
                    <li>Apply solid to dead.</li>
                  </ul>
                </p>`
}
