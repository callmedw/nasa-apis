# NASA APIS

API calls to a couple NASA apis in this web app.

### Setup/Installation Requirements
* Clone this repo by typing into the terminal:
```
$ git clone https://github.com/callmedw/nasa-apis.git
```

* run the following commands to download the necessary packages:
```
$ npm install
$ bower install
```

* create a top level file called .env
* add the following code:
```
exports.apiKey = "[YOURAPIKEYGOESHERE]";
```

* now you are ready to run the project with:
```
$ gulp build --production
$ gulp serve
```

### Known Bugs
The information returned back for the doctor results was limited to name, website, city, state, and phone. There was an issue in the way the data was being expected for other categories. Eg - if you were requesting the last name of the physician and it didn't exist, an error occurred on load. There were several key/value pairs not available for all entries. With lack of workaround, this author decided to limit what data was pulled to avoid not missing results.


### Technologies Used
* HTML / CSS
* jQuery
* Bootstrap
* NodeJS
* Gulp

### By Author
Dana Weiss

### Support and contact details
Send a message to the author via Github:
https://github.com/callmedw


### License
The MIT License (MIT)

Copyright © 2017 Dana Weiss


