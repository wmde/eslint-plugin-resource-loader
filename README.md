# Eslint Plugin Resource Loader
This eslint plugin contains rules specific to MediaWiki's [ResourceLoader](https://www.mediawiki.org/wiki/ResourceLoader).

## Rules
* `valid-package-file-require` - ensures `require`d files are in the format that is expected within [ResourceLoader package modules](https://www.mediawiki.org/wiki/ResourceLoader/Package_modules), i.e. contain the file extension and are proper relative paths, e.g. `./foo.js` instead of `./foo` or `foo.js`.
