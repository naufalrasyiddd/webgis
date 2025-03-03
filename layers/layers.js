var wms_layers = [];

var format_gadm41_IDN_shpgadm41_IDN_1shp_0 = new ol.format.GeoJSON();
var features_gadm41_IDN_shpgadm41_IDN_1shp_0 = format_gadm41_IDN_shpgadm41_IDN_1shp_0.readFeatures(json_gadm41_IDN_shpgadm41_IDN_1shp_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm41_IDN_shpgadm41_IDN_1shp_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm41_IDN_shpgadm41_IDN_1shp_0.addFeatures(features_gadm41_IDN_shpgadm41_IDN_1shp_0);
var lyr_gadm41_IDN_shpgadm41_IDN_1shp_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gadm41_IDN_shpgadm41_IDN_1shp_0, 
                style: style_gadm41_IDN_shpgadm41_IDN_1shp_0,
                popuplayertitle: 'gadm41_IDN_shp — gadm41_IDN_1.shp',
                interactive: false,
                title: '<img src="styles/legend/gadm41_IDN_shpgadm41_IDN_1shp_0.png" /> gadm41_IDN_shp — gadm41_IDN_1.shp'
            });
var format_RiwayatProyekGeoarta_1 = new ol.format.GeoJSON();
var features_RiwayatProyekGeoarta_1 = format_RiwayatProyekGeoarta_1.readFeatures(json_RiwayatProyekGeoarta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiwayatProyekGeoarta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiwayatProyekGeoarta_1.addFeatures(features_RiwayatProyekGeoarta_1);
var lyr_RiwayatProyekGeoarta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiwayatProyekGeoarta_1, 
                style: style_RiwayatProyekGeoarta_1,
                popuplayertitle: 'Riwayat Proyek Geoarta',
                interactive: true,
                title: '<img src="styles/legend/RiwayatProyekGeoarta_1.png" /> Riwayat Proyek Geoarta'
            });

lyr_gadm41_IDN_shpgadm41_IDN_1shp_0.setVisible(true);lyr_RiwayatProyekGeoarta_1.setVisible(true);
var layersList = [lyr_gadm41_IDN_shpgadm41_IDN_1shp_0,lyr_RiwayatProyekGeoarta_1];
lyr_gadm41_IDN_shpgadm41_IDN_1shp_0.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_RiwayatProyekGeoarta_1.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'PopupInfo': 'PopupInfo', 'Photo': 'Photo', });
lyr_gadm41_IDN_shpgadm41_IDN_1shp_0.set('fieldImages', {'GID_1': '', 'GID_0': '', 'COUNTRY': '', 'NAME_1': '', 'VARNAME_1': '', 'NL_NAME_1': '', 'TYPE_1': '', 'ENGTYPE_1': '', 'CC_1': '', 'HASC_1': '', 'ISO_1': '', });
lyr_RiwayatProyekGeoarta_1.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'PopupInfo': 'TextEdit', 'Photo': 'ExternalResource', });
lyr_gadm41_IDN_shpgadm41_IDN_1shp_0.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_RiwayatProyekGeoarta_1.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'PopupInfo': 'no label', 'Photo': 'no label', });
lyr_RiwayatProyekGeoarta_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});