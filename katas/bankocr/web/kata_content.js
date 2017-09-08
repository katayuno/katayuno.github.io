const kata = {
  description: `<p>This Kata was presented at XP2006 by EmmanuelGaillot and ChristopheThibaut.</p>`,

  yellowBelt: `<p>
                You work for a bank, which has recently purchased an ingenious machine to assist in reading letters and faxes sent in by branch offices. The machine scans the paper documents, and produces a file with a number of entries which each look like this:

                <pre>
                  <code>
    _  _     _  _  _  _  _
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|
                  </code>
                </pre>
              </p>
              <p>
                Each entry is 4 lines long, and each line has 27 characters. The first 3 lines of each entry contain an account number written using pipes and underscores, and the fourth line is blank. Each account number should have 9 digits, all of which should be in the range 0-9. A normal file contains around 500 entries.
              </p>
              <p>
                Your first task is to write a program that can take this file and parse it into actual account numbers.
              </p>
              `,

  greenBelt: `<p>
                Having done that, you quickly realize that the ingenious machine is not in fact infallible. Sometimes it goes wrong in its scanning. The next step therefore is to validate that the numbers you read are in fact valid account numbers. A valid account number has a valid checksum. This can be calculated as follows:

              <pre>
                <code>
  account number:  3  4  5  8  8  2  8  6  5
  position names:  d9 d8 d7 d6 d5 d4 d3 d2 d1

  checksum calculation:
  (d1+2*d2+3*d3 +..+9*d9) mod 11 = 0
                </code>
              </pre>
              </p>

              <p>
                So now you should also write some code that calculates the checksum for
                a given number, and identifies if it is a valid account number.
              </p>`,

  redBelt: `<p>
              Your boss is keen to see your results. He asks you to write out a file
              of your findings, one for each input file, in this format:
            <pre>
              <code>
  457508000
  664371495 ERR
  86110??36 ILL
              </code>
            </pre>
            </p>

            <p>
              ie the file has one account number per row. If some characters are
              illegible, they are replaced by a ?. In the case of a wrong checksum, or
              illegible number, this is noted in a second column indicating status.
            </p>`,

  blackBelt: `<p>
                It turns out that often when a number comes back as ERR or ILL it is
                because the scanner has failed to pick up on one pipe or underscore for
                one of the figures. For example

                <pre>
                  <code>
      _  _  _  _  _  _     _
  |_||_|| || ||_   |  |  ||_
    | _||_||_||_|  |  |  | _|
                  </code>
                </pre>
              </p>

              <p>
                The 9 could be an 8 if the scanner had missed one |. Or the 0 could be
                an 8. Or the 1 could be a 7. The 5 could be a 9 or 6. So your next task
                is to look at numbers that have come back as ERR or ILL, and try to
                guess what they should be, by adding or removing just one pipe or
                underscore. If there is only one possible number with a valid checksum,
                then use that. If there are several options, the status should be AMB.
                If you still can’t work out what it should be, the status should be
                reported ILL.
              </p>
              `
}
