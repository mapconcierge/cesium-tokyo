var cesiumWidget = new Cesium.Viewer('cesiumContainer');

//add a line
var line = viewer.entities;

line.add({
    name : 'Red line on the surface',
    polyline : {
        positions : Cesium.Cartesian3.fromDegreesArray([-75, 35,
                                                        -125, 35]),
        width : 5,
        material : Cesium.Color.RED
    }
});
