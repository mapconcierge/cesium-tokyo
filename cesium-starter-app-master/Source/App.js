//var viewer = new Cesium.Viewer('cesiumContainer');

var viewer = new Cesium.BingMapsImageryProvider({
    url : '//dev.virtualearth.net',
    key : 'get-yours-at-https://www.bingmapsportal.com/',
    mapStyle : Cesium.BingMapsStyle.AERIAL
});

// 1. Fly to a position with a top-down view
viewer.camera.flyTo({ destination : Cesium.Cartesian3.fromDegrees(139.76,35.67, 15000.0)});



viewer.dataSources.add(Cesium.KmlDataSource.load('http://sagara1020.github.io/cesium-tokyo/cesium-starter-app-master/Source/test.kml'));
