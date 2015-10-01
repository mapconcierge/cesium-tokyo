var viewer = new Cesium.Viewer('cesiumContainer');

viewer.dataSources.add(Cesium.KmlDataSource.load('http://sagara1020.github.io/cesium-tokyo/cesium-starter-app-master/Source/test.kml'));
