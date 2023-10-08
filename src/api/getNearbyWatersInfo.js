// Fake API call to get nearby waters info
function getNearbyWatersInfo(data) {
    const { location } = data;

    return new Promise((resolve) => {
        setTimeout(() => {
            const response = require('../../data/nearbyWatersInfo.json');
            const { data } = response.body;
            resolve(data);
        }, 2000);
    });
}

export default getNearbyWatersInfo;