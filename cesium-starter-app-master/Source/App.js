Cesium.BingMapsApi.defaultKey = "";
    var viewer = new Cesium.Viewer('cesiumContainer',{
      imageryProvider : new Cesium.ArcGisMapServerImageryProvider({
        url : '//server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
        enablePickFeatures : false
      }),
      baseLayerPicker: false
    });

//視点の変更
viewer.camera.flyTo({ destination : Cesium.Cartesian3.fromDegrees(139.76,35.67, 15000.0)});

//kml読み込み
viewer.dataSources.add(Cesium.KmlDataSource.load('http://sagara1020.github.io/cesium-tokyo/cesium-starter-app-master/Source/test.kml'));
