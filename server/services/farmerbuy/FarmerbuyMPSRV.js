const rp = require('request-promise');

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
  } else if (method === 'getGoodsList') {
    getGoodsListAct(req, res)
  } else if (method === 'wxLogin') {
    wxLoginAct(req, res)
  } else {
    common.sendError(res, 'common_01');
  }
}

async function getSwiperAct(req, res) {
  try {
    let returnData = {
      data: [{
          url: 'tfs/TB1.Zy6OFXXXXbhXpXXXXXXXXXX-1280-520.jpg'
        },
        {
          url: 'tps/TB1YTkBOpXXXXbLaXXXXXXXXXXX-1280-520.jpg'
        },
        {
          url: 'tps/TB1TikAOpXXXXaWXFXXXXXXXXXX-1280-520.jpg'
        },
        {
          url: 'tps/TB1pre1OFXXXXaGXXXXXXXXXXXX-1280-520.jpg'
        },
      ]
    }
    common.sendData(res, returnData);
  } catch (error) {
    common.sendFault(res, error);
  }
}

async function getGoodsListAct(req, res) {
  try {
    let returnData = {
      data: [{
          url: 'i4/TB1onyyOXXXXXcrapXXXXXXXXXX_.jpg',
          showName: '苹果',
          desc: 'aaaaa',
          price: '14.00',
          sales: '0'
        },
        {
          url: 'i4/TB18r0eOpXXXXa9apXXXXXXXXXX_.jpg',
          showName: '地瓜',
          desc: 'bbbbb',
          price: '19.00',
          sales: '2'
        },
        {
          url: 'i4/TB1FCxZOXXXXXXcaXXXXXXXXXXX_.jpg',
          showName: '土豆',
          desc: 'ccccccc',
          price: '27.00',
          sales: '4'
        },
        {
          url: 'i3/TB1wwcCOpXXXXaCXXXXXXXXXXXX_.jpg',
          showName: '茄子',
          desc: 'ddddddddddddd',
          price: '32.00',
          sales: '100'
        },
      ]
    }
    common.sendData(res, returnData);
  } catch (error) {
    common.sendFault(res, error);
  }
}

async function wxLoginAct(req, res) {
  try {
    let doc = common.docTrim(req.body),
      returnData = {};
    console.log(doc)
    let appid = 'wx1bf0976923162a6b'
    let secret = 'f03e63ca1aca1c007b5915b54b6ec8c7'

    let url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&js_code=' + doc.code + '&grant_type=authorization_code'
    let wxAuth = await rp(url)
    console.log(wxAuth)

    common.sendData(res, returnData);
  } catch (error) {
    common.sendFault(res, error);
  }
}
