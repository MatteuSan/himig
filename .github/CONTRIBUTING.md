# Contributing to Himig

## Workflow Digest
1. Create a fork of this repository and clone it locally.
2. Do `npm install` or `yarn install` to install all dependencies.
    - If you're working on the documentation, be sure to `cd` into the `/docs` directory.
    - Or, if you're working on the tests, be sure to `cd` into the `/tests` directory.
    - Additionally, there are details you need to know about installing dependencies [here](#installing-dependencies).

3. Open a new branch from main with the following format:

```text
[username]-[issue-number]_[issue-title]
```

4. Code code code.
5. Create a pull request.
6. Wait for the pull request to be reviewed.
    - If the pull request is approved, the pull request will be merged into the main branch.
7. 🎉 Congratulations! You've successfully contributed to himig

## Details on Contributing
### Contributing Scopes
When contributing to Himig, it is important to keep in mind what a contributor can code and cannot code.

- Authoring new components are almost always left up to the internal team working on the design system.
- Code deviating from the specifications is NOT allowed. Follow the specifications in the design docs or in the `/specs` directory.

### Installing Dependencies
The current dependency list will always be compatible with the latest version of himig However, the root directory, the tests and dev versions of the docs require the current in-development version of Himig (aka the version you're working on). Which is why we're going to be using the `npm link` feature to easily link the dev version of Himig to the tests and docs.

First `cd` into the source folder.
```sh
$ cd src
```

And execute the `link` command.
```sh
$ npm link

# or

$ yarn link
```

`cd` back into the root directory (or the tests, or docs directory).
```sh
$ cd ..
$ cd ../docs
$ cd ../tests
```

And finally, execute the linking command.
> NOTE: the `current-dev-version` is usually spat out in the terminal after running the first `npm link` command in the source directory. When using yarn, you usually don't have to worry about this.

```sh
$ npm link @matteusan/himig@[current-dev-version]

# or

$ yarn link @matteusan/himig
```

### Code Style
If you're worried about code style, we've provided an `.editorconfig` file for you to consume.
