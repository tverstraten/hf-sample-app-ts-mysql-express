#

# mono repo setup

referenced: https://javascript.plainenglish.io/monorepo-setup-with-npm-and-typescript-90b329ba7275

in packages create a new directory
create the package.json file
go to the monrepo root and run
npm init --scope=@hf -w ./packages/model

So after each time, a local package has been created (or really, a package.json has been created/modified)
then go to the monorepo root and run npm install (and optionally check node_modules for the updated link).
