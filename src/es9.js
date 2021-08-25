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
// ES9, aka ES2018
// sources:
//   - [7] https://hub.packtpub.com/whats-new-in-ecmascript-2018
//   - [8] https://www.tutorialspoint.com/es6/es9_newfeatures.htm
//   - [9] https://betterprogramming.pub/30fda8ac50fa

/* *** *** *** asynchronous generators and iteration *** *** *** */

async function* load() {
  yield await Promise.resolve(1)
  yield await Promise.resolve(2)
  yield await Promise.resolve(3)
}

let l = load()
console.log('asynchronous generators and iteration')
l.next().then(console.log)
l.next().then(console.log)
l.next().then(console.log)
l.next().then(console.log)

/* *** *** *** for-await-of loop *** *** *** */

async function test() {
  for await (const val of load()) {
    console.log(val)
  }
}

console.log('for-await-of loop')
test()

/* *** *** *** rest/spread operator *** *** *** */

const array = [1, 2, 3, 4, 5]
const [first, ...rest] = array
console.log('rest/spread operator', first, rest)

/* *** *** *** promise.finally *** *** *** */

const getSqrt = x =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (x < 0) reject('Failure: must be a non-negative number!')
      else resolve(`Success: ${Math.sqrt(x)}`)
    }, 1000)
  })

getSqrt(2)
  .then(console.log)
  .catch(console.error)
  .finally(() => console.log('Promise.finally'))

getSqrt(-2)
  .then(console.log)
  .catch(console.error)
  .finally(() => console.log('Promise.finally'))

/* *** *** *** template literal revision *** *** *** */

// TODO

/* *** *** *** raw strings *** *** *** */

// TODO
