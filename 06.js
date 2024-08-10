// Regular expression to match a valid LinkedIn profile URL pattern
const linkedinProfileRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]\/$/;

// Function to check if the input URL is a valid LinkedIn profile URL
function isValidLinkedInProfileURL(url) {
    return linkedinProfileRegex.test(url);
}

// Example LinkedIn profile URL to validate
let url = 'https://www.linkedin.com/in/mithun-s-83a8a3186/';

// Check the validity of the LinkedIn profile URL and print the result
if (isValidLinkedInProfileURL(url)) {
    console.log(`"${url}" is a valid LinkedIn profile URL.`);
} else {
    console.log(`"${url}" is not a valid LinkedIn profile URL.`);
}
