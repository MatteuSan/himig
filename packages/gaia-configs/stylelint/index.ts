/*
 *  Copyright (c) 2024 MatteuSan
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 */

module.exports = {
  "plugins": ["stylelint-scss"],
  "customSyntax": "postcss-scss",
  "rules": {
    "at-rule-no-unknown": null,
    "color-hex-case": "lower",
    "color-hex-length": "long",
    "custom-property-pattern": "[_]?[gs-]?[a-z0-9-]+",
    "max-nesting-depth": 4,
    "shorthand-property-no-redundant-values": true,
    "scss/at-function-pattern": "[_]?[a-z0-9-]+",
    "scss/at-mixin-pattern": "[_]?[a-z0-9-]+",
    "scss/at-if-closing-brace-space-after": "always-intermediate",
    "scss/at-rule-no-unknown": true,
    "scss/at-mixin-argumentless-call-parentheses": "never",
    "scss/at-use-no-unnamespaced": true,
    "scss/comment-no-loud": true,
    "scss/dollar-variable-colon-space-after": "always",
    "scss/dollar-variable-pattern": "[_]?[a-z0-9-]+",
    "scss/double-slash-comment-whitespace-inside": "always",
    "scss/partial-no-import": true,
    "scss/no-duplicate-mixins": true,
    "scss/operator-no-unspaced": true,
    "scss/selector-no-redundant-nesting-selector": true
  }
}