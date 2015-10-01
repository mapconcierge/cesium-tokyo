var viewer = new Cesium.Viewer('cesiumContainer');

//add a kml file
viewer.dataSources.add(Cesium.kmlDataSource.load('/Source/test.kmz'));
