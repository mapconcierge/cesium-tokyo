var viewer = new Cesium.Viewer('cesiumContainer');

viewer.dataSources.add(Cesium.kmlDataSource.load('/Source/test.kmz'));
