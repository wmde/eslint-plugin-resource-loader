# Eslint Plugin Resource Loader
This eslint plugin contains rules specific to MediaWiki's [ResourceLoader](https://www.mediawiki.org/wiki/ResourceLoader).

## Rules
* `valid-package-file-require` - ensures `require`d files contain the file extension and are proper relative paths, i.e. `./foo.js` instead of `foo.js`.
