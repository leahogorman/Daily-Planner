# Daily_Planner
# Description
    For this project we were asked to create a daily planner that worked with Moments.js. The goals were to have the background of each timeblock change based on if it was in the past, present, or future. We also had to get it to save the inputted information to Local Storage and pull that same information on reload.
# HTML and CSS
    For this project some HTML and CSS were given to us from the start, These were then added to/adjusted to work for my needs for the project.
# Javascript/jQuery
    START PROMPT
    For this project onload the information had to appear for each timeblock and pull from localStorage. In order to do this I had to create an onload function that would run and get information that was saved into local storage.
    UPDATE
    In order to insure that the current time was updating and adjusting the timeblocks I had to create a function that would set intervals for refreshing. My "current time" counts seconds so I did this x1000 (by the second) to insure the page was never behind.
    COLOR CHANGE
    To get the blocks to change based on current time I created a for each loop that compared the current time to the id of each block which was set to be the same as that hour. Then I used if else statements to put these in the categories of past, present, or future.
    SAVE
    To save the information to Local Storage I created a function that would onclick of the save button store the information from that text area to local storage. So I created a for each loop that would run through each of the text areas to save the information on click.
# Aids
    This project was done with research via jQuery website, W3Schools and MDN WebDocs
    https://www.w3schools.com/jsref/prop_win_localstorage.asp
    https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
    https://jquery.com/
# Collaborators
    While this was done individually it was done with instruction from Fil and Daniel.
    https://github.com/c0dehot
    https://github.com/shibeknight
# Links
The Links to the GITHUB site and the Live site are
https://github.com/leahogorman/Daily-Planner
https://leahogorman.github.io/Daily-Planner/