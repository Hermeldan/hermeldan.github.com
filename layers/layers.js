var wms_layers = [];

        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });var lyr_Elevacin_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Elevación",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Elevacin_1.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8802171.286388, -326974.057839, -8781731.790995, -314527.657530]
                            })
                        });var format_BarriosCuenca_2 = new ol.format.GeoJSON();
var features_BarriosCuenca_2 = format_BarriosCuenca_2.readFeatures(json_BarriosCuenca_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BarriosCuenca_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_BarriosCuenca_2.addFeatures(features_BarriosCuenca_2);var lyr_BarriosCuenca_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BarriosCuenca_2, 
                style: style_BarriosCuenca_2,
                title: '<img src="styles/legend/BarriosCuenca_2.png" /> Barrios Cuenca'
            });var format_ContornoCuenca_3 = new ol.format.GeoJSON();
var features_ContornoCuenca_3 = format_ContornoCuenca_3.readFeatures(json_ContornoCuenca_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ContornoCuenca_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_ContornoCuenca_3.addFeatures(features_ContornoCuenca_3);var lyr_ContornoCuenca_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ContornoCuenca_3, 
                style: style_ContornoCuenca_3,
                title: '<img src="styles/legend/ContornoCuenca_3.png" /> Contorno Cuenca'
            });var format_Curvasdenivel_4 = new ol.format.GeoJSON();
var features_Curvasdenivel_4 = format_Curvasdenivel_4.readFeatures(json_Curvasdenivel_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Curvasdenivel_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Curvasdenivel_4.addFeatures(features_Curvasdenivel_4);var lyr_Curvasdenivel_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Curvasdenivel_4, 
                style: style_Curvasdenivel_4,
                title: '<img src="styles/legend/Curvasdenivel_4.png" /> Curvas de nivel'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Elevacin_1.setVisible(true);lyr_BarriosCuenca_2.setVisible(true);lyr_ContornoCuenca_3.setVisible(true);lyr_Curvasdenivel_4.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Elevacin_1,lyr_BarriosCuenca_2,lyr_ContornoCuenca_3,lyr_Curvasdenivel_4];
lyr_BarriosCuenca_2.set('fieldAliases', {'ID': 'ID', 'PARROQUIA': 'PARROQUIA', 'BARRIO___C': 'BARRIO___C', 'CODIGO_BAR': 'CODIGO_BAR', 'REPRESENTA': 'REPRESENTA', 'TELEFONO': 'TELEFONO', 'OBSERVACIO': 'OBSERVACIO', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'CO_PARURB': 'CO_PARURB', 'COD_BAR': 'COD_BAR', });
lyr_ContornoCuenca_3.set('fieldAliases', {'DPA_PARROQ': 'DPA_PARROQ', 'DPA_DESPAR': 'DPA_DESPAR', 'DPA_VALOR': 'DPA_VALOR', 'DPA_ANIO': 'DPA_ANIO', 'DPA_CANTON': 'DPA_CANTON', 'DPA_DESCAN': 'DPA_DESCAN', 'DPA_PROVIN': 'DPA_PROVIN', 'DPA_DESPRO': 'DPA_DESPRO', });
lyr_Curvasdenivel_4.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_BarriosCuenca_2.set('fieldImages', {'ID': 'Range', 'PARROQUIA': 'TextEdit', 'BARRIO___C': 'TextEdit', 'CODIGO_BAR': 'Range', 'REPRESENTA': 'TextEdit', 'TELEFONO': 'Range', 'OBSERVACIO': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', 'CO_PARURB': 'TextEdit', 'COD_BAR': 'TextEdit', });
lyr_ContornoCuenca_3.set('fieldImages', {'DPA_PARROQ': 'TextEdit', 'DPA_DESPAR': 'TextEdit', 'DPA_VALOR': 'TextEdit', 'DPA_ANIO': 'TextEdit', 'DPA_CANTON': 'TextEdit', 'DPA_DESCAN': 'TextEdit', 'DPA_PROVIN': 'TextEdit', 'DPA_DESPRO': 'TextEdit', });
lyr_Curvasdenivel_4.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_BarriosCuenca_2.set('fieldLabels', {'ID': 'no label', 'PARROQUIA': 'no label', 'BARRIO___C': 'no label', 'CODIGO_BAR': 'no label', 'REPRESENTA': 'no label', 'TELEFONO': 'no label', 'OBSERVACIO': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', 'CO_PARURB': 'no label', 'COD_BAR': 'no label', });
lyr_ContornoCuenca_3.set('fieldLabels', {'DPA_PARROQ': 'no label', 'DPA_DESPAR': 'no label', 'DPA_VALOR': 'no label', 'DPA_ANIO': 'no label', 'DPA_CANTON': 'no label', 'DPA_DESCAN': 'no label', 'DPA_PROVIN': 'no label', 'DPA_DESPRO': 'no label', });
lyr_Curvasdenivel_4.set('fieldLabels', {'ID': 'no label', 'ELEV': 'no label', });
lyr_Curvasdenivel_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});