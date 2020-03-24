# CU Crowdfunding Site
A Nuxt.js site
### Installation
    npm install 

### Scripts
To build:

    npm run generate
    
To test on localhost:3000: 

    npm run dev

### Community Funded
This site uses the the Community Funded platform to show the projects. In order to get the projects to appear, there is a script called cf-global.js that runs and adds the projects. Also, there is a css file calles cf-style.css that formats the added divs. These files are in the **static** directory

### For Future Nuxt sites
This site taks advantage of the web style guide detailed on [the styleguide](https://styleguide.colorado.edu/). However, these components must implemented slightly different for Nuxt to render them properly. The **nuxt.config.js file**, is where the links to the CDNs and static CSS/JS files are added. In the **default.vue file**, the markup for the header and footer is how it needs to appear for the external CSS/JS to work correctly.

### The Static Directory
  - branding.css
  - grid.css
  - ucb-styles.css

<br/>
These files can be copied into future projects. This is the CSS for the components which can also be found on the styleguide site. 
