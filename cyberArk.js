var axios = require('axios');
const https = require('https');
var parseString = require('xml2js').parseString;

const postData='<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:tem="https://tempuri.org/"><soap:Header/><soap:Body><tem:GetPassword><tem:passwordWSRequest><tem:AppID>WMSOpsPortal_Prod</tem:AppID><tem:Safe>PSV-FS-WMS-OPSPORTAL-P</tem:Safe><tem:Object>Operating System-UnixSSH-wmsprod-wmsadmin</tem:Object></tem:passwordWSRequest></tem:GetPassword></soap:Body></soap:Envelope>'
const options = {
    method: 'POST',
    url: 'https://ma000xscya1001.federated.fds/AIMWebService/V1.1/aim.asmx?wsdl',
    headers: {'content-type': 'text/xml'},
    httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    //httpsAgent: new https.Agent({ keepAlive: true }),
    data:postData
};

axios(options)
.then(response => {
	//console.log("response", response);
	parseString(response.data, function (err, result) {
	    console.log("username: ",result['soap:Envelope']['soap:Body'][0]['GetPasswordResponse'][0]['GetPasswordResult'][0]['UserName'][0]);
		  console.log("password: ",result['soap:Envelope']['soap:Body'][0]['GetPasswordResponse'][0]['GetPasswordResult'][0]['Content'][0]);

	});

    return true;
})
.catch((error)=> {
  console.log('error',error);
});