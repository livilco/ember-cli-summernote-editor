/* eslint-env node */
'use strict';

const fastbootTransform = require('fastboot-transform');

module.exports = {
    name: 'ember-cli-summernote-editor',
    options: {
      nodeAssets: {
        'popper.js': {
          srcDir: 'dist/umd',
          import: ['popper.js'],
          vendor: ['popper.js.map'],
          processTree(input) {
            return fastbootTransform(input);
          }
        },
        summernote: {
          srcDir: 'dist',
          destDir: 'assets',
          import: [
            'summernote.css',
            'summernote.js',
            'summernote.js.map',
            'font/summernote.eot',
            'font/summernote.ttf',
            'font/summernote.woff'
          ],
          processTree(input) {
           return fastbootTransform(input);
          }
        }
      }
    }
  };
