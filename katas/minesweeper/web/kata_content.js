const kata = {
  description: `<p>Have you ever played Minesweeper? It's a cute little game which comes within a certain Operating System whose name we can't really remember. Well, the goal of the game is to find all the mines within an MxN field. To help you, the game shows a number in a square which tells you how many mines there are adjacent to that square.</p>`,

  yellowBelt: `<p>
                You should write a program that takes input as follows:

                The input will consist of an arbitrary number of fields. The first line of each field contains two integers n and m (0 < n,m <= 100) which stands for the number of lines and columns of the field respectively. The next n lines contains exactly m characters and represent the field. 
                Each safe square is represented by an '.' character and each mine square is represented by an '*' character, like here:

                <pre>
                  <code>
  *...
  ....
  .*..
  ....
                  </code>
                </pre>
                The first field line where n = m = 0 represents the end of input and should not be processed.
              </p>

              <p>
                Your program should produce output as follows:
              </p>

              <p>
                For each field, you must print the following message in a line alone:
              </p>

              <p>
                Field #x:
              </p>

              <p>
                Where x stands for the number of the field (starting from 1). The next n
                lines should contain the field with the '.' characters replaced by the
                number of adjacent mines to that square. There must be an empty line
                between field outputs.

                Sample:

                <pre>
                  <code>
  *100
  2210
  1*10
  1110
                  </code>
                </pre>
              </p>`,

  greenBelt: `<p>TBD...</p>`,

  redBelt: `<p>TBD...</p>`,

  blackBelt: `<p>TBD...</p>`
}
