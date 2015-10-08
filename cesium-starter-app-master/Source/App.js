Cesium.BingMapsApi.defaultKey = "";
    var viewer = new Cesium.Viewer('cesiumContainer',{
      imageryProvider : new Cesium.ArcGisMapServerImageryProvider({
        url : '//server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
        enablePickFeatures : false
      }),
      baseLayerPicker: false
    });
