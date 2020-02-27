# HTML-CSS-JS-Portfolio

<img width="1440" alt="Screen Shot 2020-02-24 at 9 21 23 PM" src="https://user-images.githubusercontent.com/55222951/75209345-e7b84b80-574b-11ea-9787-b71f62835992.png">

🚧 It's mostly RESPONSIVE! 👩🏻‍💻

🤦🏻‍♀️ My plan was creating a simple HTML project to practice Sass and CSS - that's how and why this thing is here. There was so much fun during this process, while at the same time it kept growing and looks more and more like my NEXT porfolio...I know there are a lot of duplicated codes inside ( of course pure HTML 🙄), but it's so cute that I can't give it up half way. So just hard code it for now and will re-do it into React later. 🙋🏻‍♀️

## Notes
* Javascript for animations on landing page:
  Get TweenMax and TimelineMax Animation JS on (https://cdnjs.com/libraries/gsap/2.1.3) 

* Formspree `name="name"/ name="replyto"`

## How to install SASS locally?
* `npm init` 
* `npm install node-sass --save-dev`
*  "scripts": {
    "compile:sass": "node-sass sass/main.scss css/style.css -w"
  } in package.json
* `npm run compile:sass`

## About Meida Queries (@mixin, @include, @content and @if)

  For more information: https://sass-lang.com/documentation/at-rules/mixin

  ### 1. Set 1rem = 10px in the root 

  ### 2. About $breakpoint arguement choices: 
  * 0 - 600px:    phone
  * 600- 900px:   tablet portrait
  * 900 -1200px:  tablet landscape
  * [1200 - 1800] is where normal styles apply
  * 1800px + :    big desktop

  ### 3. Change px into em:
  * 1em = 1rem = 16px 
  * rems and ems in media query are not effected by root font setting, like in this proj html font size is set to 62.5%
  * em is the best choice for media queries cuz rem stops working in some browsers




