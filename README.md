# Front-End Web Devlopment

### Author: Mohammed Esmail

**`<warning>`Bootstrap is banned from this repository`</warning>`**

## 1. Introduction
This assignment is the final part of the module CTEC-3905. The task at hand has been to develop a website using HTML5, CSS and Javascript. This entailed creating wireframe sketches of the initial design, intelligently considering PARC principles, considering all angles of usability and accessibility. Mobile first design was a key area that was implemented from the onset of development. The following markdown file will detail all the stages of development and show how design considerations have been met and implemented.


##### 1.1. Rationale
The rationale for selecting a recipe website was due to the admiration for food and the love for cooking. Food is an every day part of life that requires an art in its own form. Cook books have have been transformed from hard copy books to users going on the World Wide Web to source information. However, the purist would say a hardback book is not as satisfying as using a wesbite.

## 2. Design Documentation
Wireframe sketches were outlined for the initial designs as shown using the linkes below. Within the wireframe sketches. PARC principles and usability has also been taken into consideration when initally designing the site, in which key areas are discussed below. These design decisions are also highlighted using notations within the sketches.

- [Mobile design wireframe sketches](https://github.com/mohammed-esmail/assignment2/tree/master/documentation:diagrams/wireframe_sketches_mobile_version)
- [Desktop design wireframe sketches](https://github.com/mohammed-esmail/assignment2/tree/master/documentation:diagrams/wireframe_sketches_desktop_version)

## 3. Site Features, Usability & Design Principles

This section outlines the features and considerations that have been made in regards to the final implementation. It also provides a detailed explanation of how PARC, usability and accessibility have been accounted for. Limitations will also be highlighted with justifications of such issues.

##### 3.1. Features & Usability
- **Fixed Navigation** - A fixed navigation bar accounts for usability as the user does not have to scroll back to the to of the site to access other areas. Therefore, the navigation bar is always at the users disposal.
- **Smooth Scrolling** - Smooth scrolling allows the user to select a button and be automatically referenced to the relevant section. This ensures the user does not have to find the section whilst looking at irrelevant information that the user does not need. JQuery was used to achive this technique.
- **Contrasting Images** - The navigation bar was designed to be a darker colour, whilst using a fixed image below to contrast this principle. CSS hover effects contrast the backgrouund of the website.
- **Multi-page Application** - As there is a lot of content on the site in terms of ingredients and methods for recipes, a multi-page application was more suitable. Whereas a single page application will entail having a cleaner feel and un-distractive with as less content as possible
- **No Bootsrap** - Although the bootstrap framework and any other framework likewise are very handy and powerful, this was ideally not the route to take as it would deter from the learning experience for the assignment.
- **Recipes** - As recipes take up a lot of content on the page, in terms of usability it was decided that the ingredients and methods will be displayed within modal boxes. The user is invited with a picture of a recipe that shows what the recipe is using CSS hover transitions. Once the picture is selected, only then is the detail outlined. Therefore, this ensures the site is not clogged with information that the user does not need.
- **Colour Co-ordination** - Pictures of recipes contain colour coded annotations such as the colour green for vegetarien. Once again, the user will not click on a meat dish if they are a vegetarian. Therefore, this aligned with usability. Social media icons are also colour co-ordinated on hover, such as Facebook having a purple theme, Google+ having a red theme etc. This also shows the creative aspect of implementation.
- **Mobile First Design** - Mobile first design was used to create the website at the onset, this was extremenly helpful in designing from bottom to top. It also ensured all devices were compatible.
- **Flexbox** - A responsive flexbox grid system has been used to create a grid of recipe images. This was the more challenging of techniques used within the website.
- **API's** - The Google API was used in the contact section to provide the user of the location in regards to masterclass cooking classes. The jQuery API was also implemented to create the smooth scrolling effect.
- **Validation** - Validation for the contact form has been implemented, this ensured the user fills out the necessary information in the correct context.

##### 3.2. Proximity, Allignment, Repetition & Contrast (PARC)
This section outlines how the PARC principles have been used in the implementation of the site.

- **Proximity** - In order to achive this design principle, the navigation bar was fixed at the users disposal within any scroll length of the page. All navigation menu items are grouped together, whilst also relating all recipes within the relevant section and grouped together. This ensures ease of legibility by grouping similar items of the same nature.
- **Allignment** - By creating a grid system on the recipe page, this ensured no tiems are placed out of alligment or context. A grid system is the ideal technique to achieve this whilst creating a hollistic feel to the environment.
- **Repetition** - In order to provide consistency, repeated themes have been implemented within the design of the website. Text sizes are proportionate and of the same size, the main page theme is repeated throughout all of the pages. Buttons are all classed to the same css styles. Therefore, this provides a pleasing and warming environment for the user.
- **Contrast** - Contrast provides the user with a pleasing atmosphere, the navigation bar is dark, contrasted with white text and orange hover over properties. The main body of the website is split up with a medium to dark image, whilst implementing the rest of the body with a lighter appearance.

## 4. W3 Validation
This section provides the links to all the W3 validated pages
[Homepage-Validation](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmohammed-esmail.github.io%2Fassignment2%2Findex.html)
[Recipes-Validation](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmohammed-esmail.github.io%2Fassignment2%2Frecipes.html)
[Gallery-Validation](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmohammed-esmail.github.io%2Fassignment2%2Fgallery.html)
[Contact-Us-Validation](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmohammed-esmail.github.io%2Fassignment2%2Fcontact.html)

## 5. Conclusion
I started the module with little knowledge of HTML, Javascript and CSS. By completing the first assignment and researching websites that are currently available with contrasting counterparts, I have improved my knowledge and understanding vastly. Therefore, using this research I aquired I have implemented a website using such techniques. I chose not to use a framework as this would deter my knowledge and understanding, rather it would be counter intuitive. The lectures/labs have been of great help and I will be aiming to take my knowledge further in my future career.

## 6. References
##### 6.1. Frameworks/Api's
- [jQuery](https://jquery.com/) - used to implement smooth scrolling effects.
- [Google Maps API](https://developers.google.com/maps/documentation/javascript/adding-a-google-map)- used to create the location map on the contact page.
- [Font Awesome](http://fontawesome.io/)- used for the navigation menu items and social media icons in footer.


##### 6.2. Images/Websites
- [BBC Good Food](http://www.bbc.co.uk/food/recipes/) - used to obtain all the recipe methods, ingredients and images for the wesbite.
- [W3Schools](https://www.w3schools.com/) - used to obtain all the information in regards to the modal box, contact form and flex-box grid.































