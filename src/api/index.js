export const downloadAvatar = async () => {
    try {
        const request = await fetch(
            'https://thumb.cloud.mail.ru/weblink/thumb/xw1/6DCj/GR9vTYDLg/crop-avatar-web-card.jpg', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Postman-Token': '9901db6d-bd84-4c0c-b777-26f5de787428',
                'Host': 'thumb.cloud.mail.ru',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection': 'keep-alive',
                'User-Agent': 'PostmanRuntime/7.30.0',
                'Access-Control-Allow-Origin': '*',
            },
        }
        );
        console.log('request', request);
        return await request.blob();
    } catch (error) {
        console.error('error occurred when uploading a photo', error);
    }
}