const axios = require('axios')
const uniqid = require('uniqid')
const date = new Date()

let options = {
   partnerTxnUid: 'PT'+uniqid.process(),
   partnerId: 'PTR4494',    // partnerId
   partnerSecret: '47a06cf6ef3d426f84469e482', // partnerSecret
   requestDt: date.toISOString(),
   merchantId: 'KB142953995', // merchantId
   terminalId: 'term1',
   qrType: '3',
   txnAmount: 10.5,
   txnCurrencyCode: 'THB',
   reference1: 'INV001',
   reference2: null,
   reference3: null,
   reference4: null,
   metadata: 'ถุงผ้า 80.50, ดินสอ 20.00' 
};



async function main () {
    let result = await axios.post('https://APIPORTAL.kasikornbank.com:12002/pos/qr_request',options)
    return result
}


main().then((result)=>{
    console.log(result.data)
})
