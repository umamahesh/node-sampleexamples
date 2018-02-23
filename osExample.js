var os = require('os');

var ifaces = os.networkInterfaces();
console.log(ifaces);
  for(let dev in ifaces) {
    //ifaces[dev].filter((details) => details.family === 'IPv4' && details.internal === false ? address = details.address: undefined);
    console.log(dev);
  }



  // { lo: 
  //  [ { address: '127.0.0.1',
  //      netmask: '255.0.0.0',
  //      family: 'IPv4',
  //      mac: '00:00:00:00:00:00',
  //      internal: true },
  //    { address: '::1',
  //      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
  //      family: 'IPv6',
  //      mac: '00:00:00:00:00:00',
  //      scopeid: 0,
  //      internal: true } ],
  // enp0s3: 
  //  [ { address: '10.0.2.15',
  //      netmask: '255.255.255.0',
  //      family: 'IPv4',
  //      mac: '08:00:27:77:56:af',
  //      internal: false },
  //    { address: 'fe80::6307:9383:4333:d592',
  //      netmask: 'ffff:ffff:ffff:ffff::',
  //      family: 'IPv6',
  //      mac: '08:00:27:77:56:af',
  //      scopeid: 2,
  //      internal: false } ] }
