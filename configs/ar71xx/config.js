

module.exports = function(util, hwInfo, callback) {

  if(u.chipsetType(hwInfo) != 'ar71xx') {
    return callback(null, null);
  }

  var conf = {

  };

        
  callback(null, conf);
};
