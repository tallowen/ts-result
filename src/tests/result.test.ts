import { Result, success, error } from '../index.js';

const divideByZeroError = 'You cannot divide by zero!!';

function divide(numerator: number, denominator: number): Result<number, string> {
  if (denominator === 0) {
    return error(divideByZeroError);
  }

  return success(numerator / denominator);
}

test('Results + helpers work correctly', () => {

  const errorCase = divide(5, 0);
  expect(errorCase.type).toEqual("error");
  if (errorCase.type === "error") {
    expect(errorCase.error).toEqual(divideByZeroError);
  } else {
    throw new Error('Should not reach this case');
  }

  const successCase = divide(4, 2);
  expect(successCase.type).toEqual("success");
  if (successCase.type === "success") {
    expect(successCase.value).toEqual(2);
  } else {
    throw new Error('Should not reach this case');
  }
});