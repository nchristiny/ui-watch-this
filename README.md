# WATCH THIS! UI
### Jellyvision Developer Apprentice project
### Nick Christiny
---

`ui-watch-this` is a front-end only React app.
It consumes JSON API `watch-this`.

### TODO
* Testing!
* Make the questions 'human-sounding'; Jack Principles.
* Implement a spinner onSubmit
* Redirect user to the recommendation show page upon submit. 
* ~~Break up form questions.~~
* ~~Add film poster URL's and links to recommendation show page.~~

### Dependencies
* react
* redux
* axios
* react-router
* redux-form
* redux-promise
* Bootstrap

### Instructions
Ensure the backend `watch-this` is listening on default port `localhost:3000`

Please note: Program gives TypeError on `.src/index.js` if running latest version of `node v6` using OS X Yosemite; (it was originally developed on OS X El Cap with `node v5`). 

Using `node v5.12.0` on Yosemite appears to resolve this issue.

```
npm install
npm start
```
