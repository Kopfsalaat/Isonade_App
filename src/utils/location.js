// Fake location service
export function getCurrentLocation (){
    return new Promise((resolve) => {
        setTimeout(() => {
            const location = {
                latitude: 60.93388263559193, 
                longitude: -117.05849658510526,
                latitudeDelta: 1.8,
                longitudeDelta: 1.8,
            }
            resolve(location);
        }, 1000);
    });
}