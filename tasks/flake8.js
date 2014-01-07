/*
 * grunt-flake8
 * https://github.com/redditgifts/grunt-flake8
 *
 * Copyright (c) 2014 Brian Holt
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  function buildAdditionalArgs(options) {
    var additonalArgs = [];

    if (options.maxComplexity !== false) {
      additonalArgs.push('--max-complexity');
      additonalArgs.push(options.maxComplexity);
    }

    if(options.maxLineLength !== false) {
      additonalArgs.push('--max-line-length=' + options.maxLineLength);
    }

    if(options.format !== false) {
      additonalArgs.push('--format=' + options.format);
    }

    if(options.select !== false) {
      additonalArgs.push('--select=' + options.select.join(','));
    }

    if(options.ignore !== false) {
      additonalArgs.push('--ignore=' + options.ignore.join(','));
    }

    if(options.first !== false) {
      additonalArgs.push('--first');
    }

    if(options.verbose !== false) {
      additonalArgs.push('--verbose');
    }

    if(options.quiet !== false) {
      additonalArgs.push('--quiet');
    }

    if(options.statistics !== false) {
      additonalArgs.push('--statistics');
    }

    if(options.benchmark !== false) {
      additonalArgs.push('--benchmark');
    }

    if(options.hangClosing !== false) {
      additonalArgs.push('--hang-closing');
    }

    if(options.showSource !== false) {
      additonalArgs.push('--show-source');
    }

    if(options.showPep8 !== false) {
      additonalArgs.push('--show-pep8');
    }


    return additonalArgs;
  }

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('flake8', 'Lint your Python projects with flake8', function() {
    var done = this.async();
    var noFailures = true;
    grunt.log.writeln("Starting flake8");
    grunt.log.writeln();

    // flake8 only supports running against a single module or package at a time,
    // so we have to trigger it several times if we have several targets
    var runsRemaining = this.filesSrc.length;

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      'errorsOnly': false,
      'force': false,
      'maxComplexity': false,
      'maxLineLength': false,
      'select': false,
      'ignore': false,
      'format': false,
      'showSource': false,
      'showPep8': false,
      'first': false,
      'quiet': false,
      'verbose': false,
      'statistics': false,
      'benchmark': false,
      'hangClosing': false
    });

    // Build args
    var additonalArgs = buildAdditionalArgs(options);

    if (options.maxComplexity !== false) {
      additonalArgs.push('--max-complexity');
      additonalArgs.push(options.maxComplexity);
    }

    // Iterate over all specified files.
    this.filesSrc.forEach(function(filepath) {

      grunt.util.spawn({
        cmd: "flake8",
        args: [filepath].concat(additonalArgs)
      }, function(error, result, code) {
        if(result.stdout.length > 0) {
          noFailures = false;
          grunt.log.errorlns(filepath, '... fail');
          grunt.log.errorlns(result.stdout);
          if (options.force){
            grunt.log.warn("Linting errors found, but `force` was used, continuing...");
          }
        }
        else {
          if (!options.errorsOnly) {
            grunt.log.oklns(filepath, '... pass');
          }
        }
        runsRemaining -= 1;
        if (runsRemaining === 0) {
          done(noFailures || options.force);
        }
      });

    });

  });

};
