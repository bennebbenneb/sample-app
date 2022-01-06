const {getText} = require("/opt/nodejs/library1");
const conflictTest = require("/opt/nodejs/conflictTest");

exports.handler = async ({body = "{}", headers = {}}) => {
    console.log("conflictTest");
    console.log(conflictTest);
    console.log(body);
    console.log(headers);
    return {
        statusCode: "200",
        body: JSON.stringify({
            text: getText()
        })
    };
}
