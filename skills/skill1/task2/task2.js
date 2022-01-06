const {getText} = require("/opt/nodejs/library2");

exports.handler = async ({body = "{}", headers = {}}) => {
    console.log(body);
    console.log(headers);
    return {
        statusCode: "200",
        body: JSON.stringify({
            text: getText()
        })
    };
}
