var axios = require("axios");
var https = require('https');

var jenkinsCred64 = Buffer("svc-mst-d2c-jenkins2:82c360ad8eb23882f5069ccc9847e00b").toString('base64');

var formatJenkinsPath = function(path) {
    path = path.replace(new RegExp(' ', 'g'), '%20');
    return path;
}


var getOptions = {
            method: 'GET',
            rejectUnauthorized: false,
            url: `https://esu2v073:8080/api/json?depth=1&pretty`,
            headers: {
                Authorization: `Basic ${jenkinsCred64}`
            },
            httpsAgent: new https.Agent({ rejectUnauthorized: false })
        };


var getCrumbOptions = {
            method: 'GET',
            rejectUnauthorized: false,
            url: `https://esu2v073:8080/crumbIssuer/api/json`,
            headers: {
                Authorization: `Basic ${jenkinsCred64}`
            },
            httpsAgent: new https.Agent({ rejectUnauthorized: false })
        };

axios(getCrumbOptions)
  .then(function (response) {
    //console.log(response.data);
    var responseData = response.data;
    var crumb = responseData.crumb;
    var crumbRequestField = responseData.crumbRequestField;
    console.log("crumb", crumb, "crumbRequestField", crumbRequestField);
  })
  .catch(function (error) {
    console.log(error);
  });



var deleteJobOptions = {
	        method: 'POST',
	        rejectUnauthorized: false,
	        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
	        url: `https://esu2v073:8080/job/WMS_MST/job/Hermes/job/HermesProjects/job/B005565/job/opsv2/doDelete`,
	        headers: {
	            Authorization: `Basic ${jenkinsCred64}`,
	            'Jenkins-Crumb': `9de2656c1a17945aa29d6008fe3f785d`
	        }
	    };

/*axios(deleteJobOptions)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });*/



