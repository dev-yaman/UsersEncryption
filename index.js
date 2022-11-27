const CryptoJS = require("crypto-js");
const createCsvWriter = require('csv-writer').createObjectCsvWriter;


const secretKey = "";

const csvWriter = createCsvWriter({
    path: 'users_encrypted.csv',
    header: [
        {id: 'phoneNumber', title: 'PHONE NUMBER'},
        {id: 'password', title: 'PASSWORD'}
    ]
});

encrypt = (value) => {
    const secretKey = "839#$&^b_yhyD$$6";
    if (!value)
        return;
    var key = CryptoJS.enc.Utf8.parse(secretKey);
    var iv = CryptoJS.enc.Utf8.parse(secretKey);
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key,
        {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });

    return encrypted.toString();
}

let users = [   
    ["055749102", "uKVQ(D28"],
    ["050226862", "pM%W7I8E"],
    ["056165516", "o6B=Fh8Q"],
    ["055777639", "xeo@4R9E"],
    ["050612499", "AnA2H4G"],
    ["050779700", "9fYt6D%I"],
    ["056948585", "Kt64Mzf"],
    ["055365531", "s$Y86vur"],
    ["055398505", "T-8IjDE2"],
    ["056508007", "pMT5h6J"],
    ["055559414", "QNI6LV-4"],
    ["050970996", "8dZM5NH"],
    ["055292344", "5xK8ahJ)"],
    ["055610406", "6e6y+hnf"],
    ["056927479", "92tvyjd%"],
    ["055153392", "7P*ffdw8"],
    ["050269386", "3x%7yUJM"],
    ["050456791", "Fv8D5Lu"],
    ["055589114", "QIXXM+25"],
    ["056863579", "7%vbha8K"],
    ["055298112", "AeD@L26U"],
    ["055926534", "uF8t@5DU"],
    ["050652093", "-E9biBy8"],
    ["055337566", "4j=UEPH8"],
    ["050528878", "5a6)XFVm"],
    ["055751618", "cJEN3T6="],
    ["050784044", "i9eNt9C*"],
    ["056104843", "3PxTw5:F"],
    ["056608275", "GB+W5M4S"],
    ["056805259", "B9DI5kJ"],
    ["050882426", "3KF2c@Ko"],
    ["055726142", "4Q4jp+Wu"],
    ["050518371", "7B6EcXb("],
    ["056531491", "4P4H?fZG"],
    ["055258591", "XvK4X5v"],
    ["050586174", "svPs46Y"],
    ["055888948", "4rXsde#4"],
    ["055346862", "CJHAv35"],
    ["056291710", "wef96bG%"],
    ["055177123", "5=JaMP3r"],
    ["056290800", "x$5bYh4f"],
    ["056472142", "47Prbbm)"],
    ["055601008", "7tu-M4hH"],
    ["055161260", "9TV%fcI8"],
    ["050406938", "2A9QoEx+"]
    
    ]

getPhonePasswordEncrypted = (phone, password) => {
return {phoneNumber: encrypt(phone),  password: encrypt(password)}}

let records = []

users.forEach(user => records.push(getPhonePasswordEncrypted(user[0], user[1])))
 
csvWriter.writeRecords(records)       
    .then(() => {
        console.log('...Done');
    });



