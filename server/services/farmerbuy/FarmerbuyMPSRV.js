const common = require('../../util/CommonUtil');
const GLBConfig = require('../../util/GLBConfig');
const Sequence = require('../../util/Sequence');
const logger = require('../../util/Logger').createLogger('FarmerbuyMPSRV');
const config = require('../../config');
const model = require('../../model');

exports.FarmerbuyMPResource = (req, res) => {
    let method = req.query.method
    if (method === 'getSwiper') {
        getSwiperAct(req, res)
    } else {
        common.sendError(res, 'common_01');
    }
}

async function getSwiperAct(req, res) {
    try {
        let returnData = [
          {url: 'tfs/TB1.Zy6OFXXXXbhXpXXXXXXXXXX-1280-520.jpg'},
          {url: 'tps/TB1YTkBOpXXXXbLaXXXXXXXXXXX-1280-520.jpg'},
          {url: 'tps/TB1TikAOpXXXXaWXFXXXXXXXXXX-1280-520.jpg'},
          {url: 'tps/TB1pre1OFXXXXaGXXXXXXXXXXXX-1280-520.jpg'}, 
        ]
        common.sendData(res, returnData);
    } catch (error) {
        common.sendFault(res, error);
    }
}
