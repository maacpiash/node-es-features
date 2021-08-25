/*
 * Testing which features of different ES versions are supported
 * by Node.js out-of-the-box
 *
 * Copyright (c) 2021 Mohammad Abdul Ahad Chowdhury
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
// ES8, aka ES2017
// sources:
//   - [4] https://www.freecodecamp.org/news/7506210a1a22
//   - [5] https://www.tutorialspoint.com/es6/es8_newfeatures.htm
//   - [6] https://betterprogramming.pub/877f8406e770

const stateCapitals = {
  NSW: 'Sydney',
  ACT: 'Canberra',
  VIC: 'Melbourne',
  QLD: 'Brisbane',
  SA: 'Adelaide',
  WA: 'Perth',
  TAS: 'Hobart',
  NT: 'Darwin',
}

/* *** *** *** Object.values *** *** *** */

console.log('Object.values', Object.values(stateCapitals))

/* *** *** *** Object.entries *** *** *** */

console.log('Object.entries', Object.entries(stateCapitals))

/* *** *** *** string.padStart and string.padEnd *** *** *** */

console.log('string.padStart', 'abc'.padStart(10))
console.log('string.padEnd', 'abc'.padEnd(10))

/* *** *** *** Object.getOwnPropertyDescriptors *** *** *** */

console.log('Object.getOwnPropertyDescriptors', Object.getOwnPropertyDescriptors(stateCapitals))

/* *** *** *** Trailing commas in function arguments/parameters *** *** *** */

// prettier-ignore
function f(a, b, c, d, ) {
  console.log('Trailing commas in function arguments/parameters', a, b, c, d)
}

// prettier-ignore
f(1, 2, 3, 4, )

/* *** *** *** async-await and promise-chaining (`.then()`) *** *** *** */

const getStateCapitals = () => new Promise(resolve => setTimeout(() => resolve(stateCapitals), 1000))
const getStateCapitalsOnlyAsync = async () => {
  const stateCapitals = await getStateCapitals()
  return Object.values(stateCapitals)
}

getStateCapitalsOnlyAsync().then(capitals => console.log('async-await and promise-chaining', capitals))
