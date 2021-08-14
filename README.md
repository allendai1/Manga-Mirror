<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal starter123 hey
</h1>

## GitHub work flow


## to work on a new feature
1. ```git branch [new branch name]```
2. ```git checkout [new branch name]```
3. or ```git checkout -b [new branch name]```
any work you do on a branch will not be shown in the master branch until merge.

## a feature on a branch is complete and ready to be added to main project
1. ```git commit -a -m 'whatever commit message'```
2. ```git push origin [current branch name]```

This will commit all changes and create a new branch on the repo(if it wasnt created already), and you can manually merge the master and the branch together
## Check if i'm up to date with current project
1. ```git fetch```
2. ```git status```

This will tell you if you are behind/ahead. In which case you need to pull to update your project, or you can push, and submit a pull request to merge your project with the main project

## Update my local project to the main project
1. ```git pull origin master```
or ```git pull```
## Go back to previous commit
1. ```git restore [filename]```
