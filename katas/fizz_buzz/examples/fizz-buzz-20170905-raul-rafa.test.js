import test from 'tape';

// COMPONENT TO TEST ------------------------------------------------
const FizzBuzz = function () {
    let numbersList = [];
    const FIZZ = 3;
    const BUZZ = 5;
    const MIN = 1;
    const MAX = 100;

    const generateList = function () {
        for (let ii = MIN; ii <= MAX; ii++) {
            if (isFizz(ii) && isBuzz(ii)) {
                numbersList.push('FizzBuzz');
            } else if (isFizz(ii)) {
                numbersList.push('Fizz');
            } else if (isBuzz(ii)) {
                numbersList.push('Buzz');
            } else {
                numbersList.push(ii);
            }
        }
    };

    const isFizz = function (number) {
        return divisibleBy(number, FIZZ);
    };

    const isBuzz = function (number) {
        return divisibleBy(number, BUZZ);
    };

    const divisibleBy = function (number, divisible) {
        return 0 === number % divisible;
    };

    const print = function (index) {
        return numbersList[index];
    };

    const list = function (start, end) {
        return numbersList.slice(start, end + 1);
    };

    generateList();
    return {print, list};
};

// TESTS!!!! ------------------------------------------------------------------------
test('-------- Component: returning the first element...', (assert) => {
    const message = 'The first element must be 1 because is not divisible by 3 or 5.';
    const expected = 1;

    const fizzbuzz = FizzBuzz();
    const actual = fizzbuzz.print(0);

    assert.equal(actual, expected, message);

    assert.end();
});

test('-------- Component: returning the third element...', (assert) => {
    const message = 'The third element must be "Fizz" because 3 is divisible by 3.';
    const expected = 'Fizz';

    const fizzbuzz = FizzBuzz();
    const actual = fizzbuzz.print(2);

    assert.equal(actual, expected, message);

    assert.end();
});

test('-------- Component: returning the fifth element...', (assert) => {
    const message = 'The fifth element must be "Buzz" because 5 is divisible by 5.';
    const expected = 'Buzz';

    const fizzbuzz = FizzBuzz();
    const actual = fizzbuzz.print(4);

    assert.equal(actual, expected, message);

    assert.end();
});

test('-------- Component: returning the 15th element...', (assert) => {
    const message = 'The 15th element must be "FizzBuzz" because 15 is divisible by 3 and 5.';
    const expected = 'FizzBuzz';

    const fizzbuzz = FizzBuzz();
    const actual = fizzbuzz.print(14);

    assert.equal(actual, expected, message);

    assert.end();
});

test('-------- Component: returning a list of the first 15th values...', (assert) => {
    const message = 'Some value doesn\'t match';
    const expected = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz'];

    const fizzbuzz = FizzBuzz();
    const actual = fizzbuzz.list(0, 14);

    assert.deepEqual(actual, expected, message);

    assert.end();
});
