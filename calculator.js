/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

var calculatorModule = function () {
  
  var memory = 0;
  var total = 0;

  return {
    load: _load,
    getTotal: _getTotal,
    add: _add,
    subtract: _subtract,
    multiply: _multiply,
    divide: _divide,
    recallMemory: _recallMemory,
    saveMemory: _saveMemory,
    clearMemory: _clearMemory
  };


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
  function _load(num) {
    _validateInput(num);
    total = num;
    return total;
  }

  /**
   * Return the value of `total`
   * @return { Number }
   */
  function _getTotal() {
    return total;
  }

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
  function _add(num) {
    _validateInput(num);
    total += num;
  }


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
  function _subtract(num) {
    _validateInput(num);
    total -= num;
  }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
  function _multiply(num) {
    _validateInput(num);
    total *= num;
  }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
  function _divide(num) {
    _validateInput(num);
    total /= num;
  }

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
  function _recallMemory() {
    return memory;
  }

  /**
   * Stores the value of `total` to `memory`
   */

  function _saveMemory() {
    memory = total;
  }

  /**
   * Clear the value stored at `memory`
   */
  function _clearMemory() {
    memory = 0;
  }

  /**
   * Validation
   */
  function _validateInput(num) {
    if (typeof num !== 'number') {
      throw new Error('Operation requires valid input: ', num);
    }
  }

};
