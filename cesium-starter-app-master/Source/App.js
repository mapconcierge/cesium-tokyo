//var viewer = new Cesium.Viewer('cesiumContainer');


var viewer = new Cesium.Viewer('cesiumContainer', {
imageryProvider: new Cesium.OpenStreetMapImageryProvider({
url: 'http://cyberjapandata.gsi.go.jp/xyz/std/',
credit: new Cesium.Credit('地理院タイル', '', 'http://maps.gsi.go.jp/development/ichiran.html')
}),
baseLayerPicker: false
});


// 1. Fly to a position with a top-down view
viewer.camera.flyTo({ destination : Cesium.Cartesian3.fromDegrees(139.75,35.67, 15000.0)});


//viewer.dataSources.add(Cesium.KmlDataSource.load('http://sagara1020.github.io/cesium-tokyo/cesium-starter-app-master/Source/test.kml'));
