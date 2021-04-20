ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32719").setExtent([588409.962100, 8163469.570100, 604597.281300, 8183893.222500]);
var wms_layers = [];

var format_macrodistritos_0 = new ol.format.GeoJSON();
var features_macrodistritos_0 = format_macrodistritos_0.readFeatures(json_macrodistritos_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_macrodistritos_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_macrodistritos_0.addFeatures(features_macrodistritos_0);
var lyr_macrodistritos_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_macrodistritos_0, 
                style: style_macrodistritos_0,
                interactive: true,
                title: '<img src="styles/legend/macrodistritos_0.png" /> macrodistritos'
            });
var format_manzanas_1 = new ol.format.GeoJSON();
var features_manzanas_1 = format_manzanas_1.readFeatures(json_manzanas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_manzanas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_manzanas_1.addFeatures(features_manzanas_1);
var lyr_manzanas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_manzanas_1, 
                style: style_manzanas_1,
                interactive: true,
                title: '<img src="styles/legend/manzanas_1.png" /> manzanas'
            });
var format_distritos_2 = new ol.format.GeoJSON();
var features_distritos_2 = format_distritos_2.readFeatures(json_distritos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_distritos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_distritos_2.addFeatures(features_distritos_2);
var lyr_distritos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_distritos_2, 
                style: style_distritos_2,
                interactive: true,
                title: '<img src="styles/legend/distritos_2.png" /> distritos'
            });
var format_barrios_3 = new ol.format.GeoJSON();
var features_barrios_3 = format_barrios_3.readFeatures(json_barrios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_barrios_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_barrios_3.addFeatures(features_barrios_3);
var lyr_barrios_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_barrios_3, 
                style: style_barrios_3,
                interactive: true,
                title: '<img src="styles/legend/barrios_3.png" /> barrios'
            });

lyr_macrodistritos_0.setVisible(true);lyr_manzanas_1.setVisible(true);lyr_distritos_2.setVisible(true);lyr_barrios_3.setVisible(true);
var layersList = [lyr_macrodistritos_0,lyr_manzanas_1,lyr_distritos_2,lyr_barrios_3];
lyr_macrodistritos_0.set('fieldAliases', {'ha': 'ha', 'macro_ante': 'macro_ante', 'macro_vige': 'macro_vige', 'cod_macro': 'cod_macro', });
lyr_manzanas_1.set('fieldAliases', {'distritoma': 'distritoma', });
lyr_distritos_2.set('fieldAliases', {'tipo': 'tipo', 'macro_ante': 'macro_ante', 'macro_vige': 'macro_vige', 'distrito': 'distrito', 'cod_macro': 'cod_macro', });
lyr_barrios_3.set('fieldAliases', {'nom_otb': 'nom_otb', 'sub_alcald': 'sub_alcald', 'estado': 'estado', 'numero': 'numero', 'distrito': 'distrito', 'codigo': 'codigo', 'area_m2': 'area_m2', 'area_has': 'area_has', 'area_km2': 'area_km2', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_macrodistritos_0.set('fieldImages', {'ha': 'TextEdit', 'macro_ante': 'TextEdit', 'macro_vige': 'TextEdit', 'cod_macro': 'TextEdit', });
lyr_manzanas_1.set('fieldImages', {'distritoma': 'TextEdit', });
lyr_distritos_2.set('fieldImages', {'tipo': 'TextEdit', 'macro_ante': 'TextEdit', 'macro_vige': 'TextEdit', 'distrito': 'TextEdit', 'cod_macro': 'TextEdit', });
lyr_barrios_3.set('fieldImages', {'nom_otb': 'TextEdit', 'sub_alcald': 'TextEdit', 'estado': 'TextEdit', 'numero': 'TextEdit', 'distrito': 'TextEdit', 'codigo': 'TextEdit', 'area_m2': 'TextEdit', 'area_has': 'TextEdit', 'area_km2': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_macrodistritos_0.set('fieldLabels', {'ha': 'no label', 'macro_ante': 'no label', 'macro_vige': 'no label', 'cod_macro': 'no label', });
lyr_manzanas_1.set('fieldLabels', {'distritoma': 'no label', });
lyr_distritos_2.set('fieldLabels', {'tipo': 'no label', 'macro_ante': 'no label', 'macro_vige': 'no label', 'distrito': 'no label', 'cod_macro': 'no label', });
lyr_barrios_3.set('fieldLabels', {'nom_otb': 'no label', 'sub_alcald': 'no label', 'estado': 'no label', 'numero': 'no label', 'distrito': 'no label', 'codigo': 'no label', 'area_m2': 'no label', 'area_has': 'no label', 'area_km2': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_barrios_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});