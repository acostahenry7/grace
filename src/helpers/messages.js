const moment = require('moment')


function formatMessage(id,username, mail, text) {

   return {
     id,
     username,
     userIcon: `<img src='${mail}' style="height: 28px; border-radius: 50%">`,
     text,
     time: moment().format('h:mm a')
   }
}

module.exports = formatMessage
