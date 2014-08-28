var DOMAIN_URL = "http://rajesh-babu.github.io/";
var AVAIL_ENV = [{id:0, ENV: 'Dev', URL:''}, 
				  {id:1, ENV: 'QA', URL:''}, 
				  {id:2, ENV: 'PROD', URL: 'PROD', URL:DOMAIN_URL + '/Webapp-helloworld/index.html'}];
				  
exports.available_ENV = function(){	
	return AVAIL_ENV;
}
exports.domainURL = function(){	
	return DOMAIN_URL;
}