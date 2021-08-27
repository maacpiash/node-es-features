# Node.js ✖ ECMAScript

Testing which features of different ES versions are supported by Node.js out-of-the-box.

## Concepts

- For any particular version of Node.js: `Support for all the features of any version of ES` + `Support for the new features in a newer version of ES` = `Support for all the features of the newer version of ES`.

- For any particular version of ES: If any version of Node.js supports one of its features, then it is also supported by a newer version of Node.js.

## Compatibilty matrix

<table>
  <thead>
    <tr>
      <th rowspan="2">ES versions</th>
      <th colspan="3">Node.js versions</th>
    </tr>
    <tr>
      <th>12.x</th>
      <th>14.x</th>
      <th>16.x</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ES2016</td>
      <td>
        <a href="https://github.com/maacpiash/node-es-features/actions/workflows/es2016-node.js-12.yml">
          <img
            src="https://img.shields.io/github/workflow/status/maacpiash/node-es-features/ES2016%20on%20Node.js%2012.x?style=flat-square"
            alt="ES2016 on Node.js v12.x"
          />
        </a>
      </td>
      <td>
        <a href="https://github.com/maacpiash/node-es-features/actions/workflows/es2016-node.js-14.yml">
          <img
            src="https://img.shields.io/github/workflow/status/maacpiash/node-es-features/ES2016%20on%20Node.js%2014.x?style=flat-square"
            alt="ES2016 on Node.js v14.x"
          />
        </a>
      </td>
      <td>
        <a href="https://github.com/maacpiash/node-es-features/actions/workflows/es2016-node.js-16.yml">
          <img
            src="https://img.shields.io/github/workflow/status/maacpiash/node-es-features/ES2016%20on%20Node.js%2016.x?style=flat-square"
            alt="ES2016 on Node.js v16.x"
          />
        </a>
      </td>
    </tr>
    <tr>
      <td>ES2017</td>
      <td>
        <a href="https://github.com/maacpiash/node-es-features/actions/workflows/es2017-node.js-12.yml">
          <img
            src="https://img.shields.io/github/workflow/status/maacpiash/node-es-features/ES2017%20on%20Node.js%2012.x?style=flat-square"
            alt="ES2017 on Node.js v12.x"
          />
        </a>
      </td>
      <td>
        <a href="https://github.com/maacpiash/node-es-features/actions/workflows/es2017-node.js-14.yml">
          <img
            src="https://img.shields.io/github/workflow/status/maacpiash/node-es-features/ES2017%20on%20Node.js%2014.x?style=flat-square"
            alt="ES2017 on Node.js v14.x"
          />
        </a>
      </td>
      <td>
        <a href="https://github.com/maacpiash/node-es-features/actions/workflows/es2017-node.js-16.yml">
          <img
            src="https://img.shields.io/github/workflow/status/maacpiash/node-es-features/ES2017%20on%20Node.js%2016.x?style=flat-square"
            alt="ES2017 on Node.js v16.x"
          />
        </a>
      </td>
    </tr>
    <tr>
      <td>ES2018</td>
      <td>
        <a href="https://github.com/maacpiash/node-es-features/actions/workflows/es2018-node.js-12.yml">
          <img
            src="https://img.shields.io/github/workflow/status/maacpiash/node-es-features/ES2018%20on%20Node.js%2012.x?style=flat-square"
            alt="ES2018 on Node.js v12.x"
          />
        </a>
      </td>
      <td>
        <a href="https://github.com/maacpiash/node-es-features/actions/workflows/es2018-node.js-14.yml">
          <img
            src="https://img.shields.io/github/workflow/status/maacpiash/node-es-features/ES2018%20on%20Node.js%2014.x?style=flat-square"
            alt="ES2018 on Node.js v14.x"
          />
        </a>
      </td>
      <td>
        <a href="https://github.com/maacpiash/node-es-features/actions/workflows/es2018-node.js-16.yml">
          <img
            src="https://img.shields.io/github/workflow/status/maacpiash/node-es-features/ES2018%20on%20Node.js%2016.x?style=flat-square"
            alt="ES2018 on Node.js v16.x"
          />
        </a>
      </td>
    </tr>
  </tbody>
</table>

## References

### ES2016, _aka_ ES7

- [1] https://www.freecodecamp.org/news/86903c5cab70
- [2] https://www.tutorialspoint.com/es6/es7_newfeatures.htm
- [3] https://betterprogramming.pub/a41b7aead589

### ES2017, _aka_ ES8

- [4] https://www.freecodecamp.org/news/7506210a1a22
- [5] https://www.tutorialspoint.com/es6/es8_newfeatures.htm
- [6] https://betterprogramming.pub/877f8406e770

### ES2018, _aka_ ES9

- [7] https://v8.dev/features/tags/es2018
- [8] https://hub.packtpub.com/whats-new-in-ecmascript-2018
- [9] https://www.tutorialspoint.com/es6/es9_newfeatures.htm
- [10] https://betterprogramming.pub/30fda8ac50fa
