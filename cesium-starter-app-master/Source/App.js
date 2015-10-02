var viewer = new Cesium.Viewer('cesiumContainer');

// 1. Fly to a position with a top-down view
viewer.camera.flyTo({ destination : Cesium.Cartesian3.fromDegrees(-117.16, 32.71, 15000.0)});

viewer.dataSources.add(Cesium.KmlDataSource.load('http://sagara1020.github.io/cesium-tokyo/cesium-starter-app-master/Source/test.kml'));
