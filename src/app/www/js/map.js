var map = L.map('map').setView([18.808402,-98.955371], 15);

 
var basemaps = 
  [
    //Basemap Open Street Map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),
    //Basemap ArgGis Satelite
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'),
    //Basemap ArgGis world street
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}')
  ];

  
map.addControl(L.control.basemaps({
    basemaps: basemaps,
    tileX: 0,  
    tileY: 0,  
    tileZ: 1   
  }));