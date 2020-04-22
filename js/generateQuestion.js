const generateQuestion = () => {
    const question = {};

    const operators = ['+', '-', 'x'];
    // const sOperator = operators[getRandomInt(0, 2)];
    const sOperator = operators[getRandomInt(0, operators.length - 1)];
    // console.log('sOperator', sOperator);
    const operands = [
        getRandomInt(1, 9),
        getRandomInt(1, 9)
    ];
    // console.log('operands', operands);

    
    question.title = `${operands[0]} ${sOperator} ${operands[1]}`;
    const answer = getAnswer(operands, sOperator);
    question.answer = answer;
    question.possibilities = getPossibilities(answer);

    console.table(question);

    return question;
};

const getPossibilities = (answer) => {
    const answers = [answer];
    for (let i = 0; answers.length < 4; i++) {
        const random = getRandomInt(-8, 81);
        if (answers.includes(random) === false) {
            answers.push(random);
        }
    }

    answers.sort((a, b) => {
        return a - b;
    });

    return answers;
};

const getAnswer = ([lOperator, rOperator], strOperator) => {
    let answer;
    switch (strOperator) {
        case 'x':
            answer = lOperator * rOperator;
            break;
        case '-':
            answer = lOperator - rOperator;
            break;
        case '+':
            answer = lOperator + rOperator;
    }
    return answer;
};

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}