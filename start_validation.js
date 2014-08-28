 /**
 * Script to check the code present in given 
 * @name Hello World
 * @description
 * # Deployment Validation
 *
 * Main module of the application.
 */
 var webdriverjs = require('webdriverjs'),
	 utils = require('./custom_modules/utils');
	 config = require('./settings/config');
	 colors = require('colors'),
	 
     options = { desiredCapabilities: { browserName: 'chrome' } },
	 //enter 0 for DEV, 1 for QA and 2 for production
 	 TEST_ENV = config.available_ENV()[2],
	 domain_URL = config.domainURL();
	 URL = TEST_ENV.URL,
     start = new Date().getTime();
	 console.log('');
	 console.log(utils.getTimeStamp()+'-> Validation starting for '.green+TEST_ENV.ENV+' environment...'.green);
	 console.log(utils.getTimeStamp()+'-> Initializing and opening the browser...'.green);
	 
	 /* Open the browser and navigate the given URL */
	 webdriverjs
      .remote(options)
      .init(function(err){		
		console.log(utils.getTimeStamp()+'-> Opening the '.green+URL);
	  })
      .url(URL)
		.waitFor('#accLink', 3000)
		.click('#accLink', function(err){		
			console.log(utils.getTimeStamp()+'-> Waiting for page to be loaded completely...'.green);
		})
	  .url(domain_URL + 'Webapp-helloworld/scripts/app.js')
	  // wait for main content to be loaded completely
		.getSource(function(err, sourceCode){
			console.log(utils.getTimeStamp()+'-> Validating the code...'.green);
			var result='not found',
				word = 'deployment validation';
				
			 if (sourceCode.toLowerCase().indexOf(word.toLowerCase()) != -1){
				result = 'found';
			 }
			 var elapsedTime = (new Date().getTime() - start)/1000;
			 console.log(utils.getTimeStamp()+'-> Validation Completed...Time taken: '.green+''+elapsedTime+'sec');
			 console.log("                                                            ");
			 console.log("************************************************************".yellow);			
			 console.log("      Result of Deployment          ");
			 console.log("************************************************************".yellow);
			 console.log("                                                            ");
			 if(result === 'found'){
			 console.log("The Fix has been deployed successfully in ".green+TEST_ENV.ENV+" environment.".green);
			 }else{
			 console.log("The Fix is not found in ".red+TEST_ENV.ENV+" environment.".red);
			 }
			 console.log("                                                            ");
			 console.log("************************************************************".yellow);				
	  })
	 


