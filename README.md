# grunt-flake8

Lint your Python projects with flake8. [flake8] is a linting tool for project that combines PyFlakes, PEP8, and McCabe's Cyclomatic Complexity script.

## Important

flake8 has its own global and project-level configurations. Any values set in your Gruntfile will override those configurations. If a value is not set in your Gruntfile configuration, flake8 will then use the available project and global level configurations.

Make sure you are running Grunt from within whatever Python virtual environment that flake8 is installed.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-flake8 --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-flake8');
```

## The "flake8" task

### Overview
In your project's Gruntfile, add a section named `flake8` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  flake8: {
    options: {
      // Task-specific options go here.
    },
    src: [
      // Files to line go here.
    ],
  },
});
```

### Options

#### options.errorsOnly
Type: `Boolean`
Default value: `false`

If true, the files passing flake8 will not be shown.

#### options.spawnLimit
Type: `Integer`
Default value: `10`

The maximum amount of parallel files that `async` will allow to be accessed at once.

#### options.force
Type: `Boolean`
Default value: `false`

If true, flake8 will not fail even if there are errors.

#### options.maxComplexity
Type: `Integer`
Default value: `unset`

If set, flake8 will enforce a maximum [cyclomatic complexity](http://en.wikipedia.org/wiki/Cyclomatic_complexity).

#### options.maxLineLength
Type: `Integer`
Default value: `79`

The maximum characters in a line. If you want to disable this check, add `E501` to `ignore`.

#### options.select
Type: `Array` of `String`
Default value: `[]`

PEP8 rules to enforce. Use the codes given in the [PEP8 documentation](http://pep8.readthedocs.org/en/1.4.6/intro.html#error-codes).

#### options.ignore
Type: `Array` of `String`
Default value: `[]`

PEP8 rules to ignore. Use the codes given in the [PEP8 documentation](http://pep8.readthedocs.org/en/1.4.6/intro.html#error-codes).

#### options.hangClosing.
Type: `Boolean`
Default value: `false`

Hang closing bracket instead of matching indentation of opening bracket's line.

#### options.format
Type: `String`
Default value: `default`

The output style. `'default'` and `'pylint'` styles are built in by default but flake8 can accept custom output styles. [See documenation.](http://flake8.readthedocs.org/en/2.0/)

#### options.showSource
Type: `Boolean`
Default value: `false`

Show the source of the linting error.

#### options.first
Type: `Boolean`
Default value: `false`

Show only the first instance of a linting error.

#### options.showPep8
Type: `Boolean`
Default value: `false`

Show the PEP8 rule of the linting error. Overrides `first` configuration.

#### options.quiet
Type: `Boolean`
Default value: `false`

Show the quiet output from flake8.

#### options.verbose
Type: `Boolean`
Default value: `false`

Show the verbose output from flake8.

#### options.statistics
Type: `Boolean`
Default value: `false`

Show statistics from the linting.

#### options.benchmark
Type: `Boolean`
Default value: `false`

Show the performance information from flake8.

### Usage Examples

#### Default Options
These options will simply flake8 all of your python files in your Grunt project.

```js
grunt.initConfig({
  flake8: {},
    src: ['**/*.py']
  },
});
```

#### Custom Options
These options will enforce these specific rules. Note that these options will overwrite global- and project-level settings for flake8.

```js
grunt.initConfig({
  flake8: {
    options: {
      maxLineLength: 120,
      maxComplexity: 10,
      format: 'pylint',
      hangClosing: true,
      ignore: ['W292', 'C901', 'F401']
    },
    src: ['apps/**/*.py', 'tests/test.py']
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Contributors

- [btholt](https://github.com/btholt)

## Credit

- [tarek's](https://bitbucket.org/tarek) wonderful [flake8](https://bitbucket.org/tarek/flake8/wiki/Home) tool.
- Inspired by [thusoy's](https://github.com/thusoy) [grunt-pylint](https://github.com/thusoy/grunt-pylint) tool.
- [jcrocholl's](https://github.com/jcrocholl) great [pep8](https://github.com/jcrocholl/pep8) too.
- [florent's](https://launchpad.net/~florent.x) amazing [PyFlakes](https://launchpad.net/pyflakes) tool.
- [caolan](https://github.com/caolan) for his grand [async](https://github.com/caolan/async) tool. So rad.
- So much love for [Grunt.js](http://gruntjs.com/) and the devs who work on it.

## Release History
v0.1.3 - Added back in the error output.
v0.1.2 - Fixed a critical bug with me not understanding async.
v0.1.1 - Used async to be able to handle larger projects.
v0.1.0 - Initial release.
