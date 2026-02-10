# Publishing to GitHub Packages

## Build and Publish

1. Update your version in package.json.
2. Commit and push your changes.
3. Create a tag matching `vX.Y.Z` (e.g., `v0.1.0`).
4. Push the tag to GitHub:
   
   ```sh
   git tag v0.1.0
   git push origin v0.1.0
   ```
5. GitHub Actions will build and publish the package to GitHub Packages.

## Install in Another Project

Add the following to your `.npmrc` in the consuming project:

```
@OWNER:registry=https://npm.pkg.github.com/
```

Then install:

```
npm install @OWNER/thelott-ui-research
```

Replace `OWNER` with your GitHub username or org.

## Usage

Import components in your project:

```js
import { Button, Header } from '@OWNER/thelott-ui-research';
```
