jQuery(document).ready(function() {
    var mapInstance = jQuery("#mapsvg").mapSvg({
        markerLastID: 7,
        disableAll: true,
        width: 593.3779761904764,
        height: 318.2870370370371,
        colors: {
            baseDefault: "#000000",
            selected: 40,
            hover: 20,
            directory: "#fafafa",
            status: {},
            base: "#fff",
            stroke: "#6DAA52"
        },
        viewBox: [477, 421, 593.3779761904764, 318.2870370370371],
        tooltips: {
            mode: "off",
            on: false,
            priority: "local",
            position: "left"
        },
        popovers: {
            mode: "off",
            on: false,
            priority: "local",
            position: "top",
            centerOn: true,
            width: 230,
            maxWidth: 50,
            maxHeight: 120,
            resetViewboxOnClose: true,
            mobileFullscreen: "1"
        },
        menuMarkers: {
            on: true,
            containerId: "mapsvg-menu-markers",
            template: function(marker) {
                return '<li><a href="#' + marker.id + '">' + marker.tooltip + '</a><br />' + marker.id + '</li>';
            }
        },
        source: "assets/img/map-svg/usa.svg",
        title: "Site Location Map",
        markers: [{
            id: "San Francisco VA Health Care System",
            attached: true,
            isLink: false,
            tooltip: "<strong>San Francisco VA Health Care System</strong>",
            popover: "<strong>San Francisco VA Health Care System<</strong>",
            data: { stateId: "US-CA" },
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [37.7, -122.5]
        }, {
            id: "VA Greater Los Angeles Healthcare System",
            attached: true,
            isLink: false,
            tooltip: "<strong>VA Greater Los Angeles Healthcare System</strong>",
            popover: "<strong>VA Greater Los Angeles Healthcare System</strong>",
            data: { stateId: "US-CA" },
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [34.05, -118.45]
        }, {
            id: "VA Long Beach Healthcare System",
            attached: true,
            isLink: false,
            tooltip: "<strong>VA Long Beach Healthcare System</strong>",
            popover: "<strong>VA Long Beach Healthcare System</strong>",
            data: { stateId: "US-CA" },
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [33.77, -118.118]
        }, {
            id: "VA Sierra Nevada Health Care Systemm",
            attached: true,
            isLink: false,
            tooltip: "<strong>VA Sierra Nevada Health Care System</strong>",
            popover: "<strong>VA Sierra Nevada Health Care System</strong>",
            data: { stateId: "US-NV" },
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [39.51, -119.798]
        }, {
            id: "New Mexico VA Health Care System",
            attached: true,
            isLink: false,
            tooltip: "<strong>New Mexico VA Health Care System</strong>",
            popover: "<strong>New Mexico VA Health Care System</strong>",
            data: { stateId: "US-NM" },
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [35.055, -106.58]
        }, {
            id: "VA Salt Lake City Healthcare System",
            attached: true,
            isLink: false,
            tooltip: "<strong>VA Salt Lake City Healthcare System</strong>",
            popover: "<strong>VA Salt Lake City Healthcare System</strong>",
            data: { stateId: "US-UT" },
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [40.757, -111.840]
        }, {
            id: "Sheridan VA Medical Center",
            attached: true,
            isLink: false,
            tooltip: "<strong>Sheridan VA Medical Center</strong>",
            popover: "<strong>Sheridan VA Medical Center</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [44.827, -106.985]
        }, {
            id: "VA Western Colorado Health Care System",
            attached: true,
            isLink: false,
            tooltip: "<strong>VA Western Colorado Health Care System</strong>",
            popover: "<strong>VA Western Colorado Health Care System</strong>",
            data: { stateId: "US-CO" },
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [39.076, -108.540]
        }, {
            id: "VA Eastern Colorado Health Care System",
            attached: true,
            isLink: false,
            tooltip: "<strong>VA Eastern Colorado Health Care System</strong>",
            popover: "<strong>VA Eastern Colorado Health Care System</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [39.698, -104.833]
        }, {
            id: "VA Alexandria Healthcare System",
            attached: true,
            isLink: false,
            tooltip: "<strong>VA Alexandria Healthcare System</strong>",
            popover: "<strong>VA Alexandria Healthcare System</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [31.786, -92.437]
        }, {
            id: "G.V. (Sonny) Montgomery VA Medical Center",
            attached: true,
            isLink: false,
            tooltip: "<strong>G.V. (Sonny) Montgomery VA Medical Center</strong>",
            popover: "<strong>G.V. (Sonny) Montgomery VA Medical Center</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [32.328, -90.166]
        }, {
            id: "Gulf Coast Veterans Healthcare System",
            attached: true,
            isLink: false,
            tooltip: "<strong>Gulf Coast Veterans Healthcare System</strong>",
            popover: "<strong>Gulf Coast Veterans Healthcare System</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [30.414, -88.940]
        }, {
            id: "Central Arkansas VA Healthcare System",
            attached: true,
            isLink: false,
            tooltip: "<strong>Central Arkansas VA Healthcare System</strong>",
            popover: "<strong>Central Arkansas VA Healthcare System</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [34.842, -92.265]
        }, {
            id: "Tomah VA Medical Center",
            attached: true,
            isLink: false,
            tooltip: "<strong>Tomah VA Medical Center</strong>",
            popover: "<strong>Tomah VA Medical Center</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [44.003, -90.491]
        }, {
            id: "Clement J. Zablocki (Milwaukee) VA Medical Center",
            attached: true,
            isLink: false,
            tooltip: "<strong>Clement J. Zablocki (Milwaukee) VA Medical Center</strong>",
            popover: "<strong>Clement J. Zablocki (Milwaukee) VA Medical Center</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [43.020, -87.975]
        }, {
            id: "VA Bedford Health Care",
            attached: true,
            isLink: false,
            tooltip: "<strong>VA Bedford Health Care</strong>",
            popover: "<strong>VA Bedford Health Care</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [42.504, -71.273]
        }, {
            id: "VA Boston Healthcare System",
            attached: true,
            isLink: false,
            tooltip: "<strong>VA Boston Healthcare System</strong>",
            popover: "<strong>VA Boston Healthcare System</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [42.327, -71.109]
        }, {
            id: "VA Pittsburgh Healthcare System",
            attached: true,
            isLink: false,
            tooltip: "<strong>VA Pittsburgh Healthcare System</strong>",
            popover: "<strong>VA Pittsburgh Healthcare System</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [40.447, -79.961]
        }, {
            id: "VA Richmond Health Care System",
            attached: true,
            isLink: false,
            tooltip: "<strong>VA Richmond Health Care System</strong>",
            popover: "<strong>VA Richmond Health Care System</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [37.541, -77.425]
        }, {
            id: "Charles George VA Medical Center",
            attached: true,
            isLink: false,
            tooltip: "<strong>Charles George VA Medical Center</strong>",
            popover: "<strong>Charles George VA Medical Center</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [35.588, -82.483]
        }, {
            id: "Durham VA Health Care System",
            attached: true,
            isLink: false,
            tooltip: "<strong>Durham VA Health Care System</strong>",
            popover: "<strong>Durham VA Health Care System</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [36.010, -78.937]
        }, {
            id: "VA Augusta Health Care System",
            attached: true,
            isLink: false,
            tooltip: "<strong>VA Augusta Health Care System</strong>",
            popover: "<strong>VA Augusta Health Care System</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [33.464, -82.086]
        }, {
            id: "Ralph H. Johnson VA Health Care System",
            attached: true,
            isLink: false,
            tooltip: "<strong>Ralph H. Johnson VA Health Care System</strong>",
            popover: "<strong>Ralph H. Johnson VA Health Care System</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [32.784, -79.952]
        }, {
            id: "Tuscaloosa VA Medical Center",
            attached: true,
            isLink: false,
            tooltip: "<strong>Tuscaloosa VA Medical Center</strong>",
            popover: "<strong>Tuscaloosa VA Medical Center</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [33.189, -87.487]
        }, {
            id: "North Florida/South Georgia Veterans Health System",
            attached: true,
            isLink: false,
            tooltip: "<strong>North Florida/South Georgia Veterans Health System</strong>",
            popover: "<strong>North Florida/South Georgia Veterans Health System</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [29.636, -82.343]
        }, {
            id: "James A. Haley Veterans' Hospital",
            attached: true,
            isLink: false,
            tooltip: "<strong>James A. Haley Veterans' Hospital</strong>",
            popover: "<strong>James A. Haley Veterans' Hospital</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [28.165, -82.348]
        }, {
            id: "Orlando VA Healthcare System",
            attached: true,
            isLink: false,
            tooltip: "<strong>Orlando VA Healthcare System</strong>",
            popover: "<strong>Orlando VA Healthcare System</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [28.366, -81.274]
        }, {
            id: "West Palm Beach VA Medical Center",
            attached: true,
            isLink: false,
            tooltip: "<strong>West Palm Beach VA Medical Center</strong>",
            popover: "<strong>West Palm Beach VA Medical Center</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [26.785, -80.111]
        }, {
            id: "VA Northeast Ohio Healthcare System",
            attached: true,
            isLink: false,
            tooltip: "<strong>VA Northeast Ohio Healthcare System</strong>",
            popover: "<strong>VA Northeast Ohio Healthcare System</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [41.514, -81.611]
        }, {
            id: "Dayton VA Medical Center",
            attached: true,
            isLink: false,
            tooltip: "<strong>Dayton VA Medical Center</strong>",
            popover: "<strong>Dayton VA Medical Center</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [39.742, -84.264]
        }, {
            id: "Central Ohio VA Healthcare System",
            attached: true,
            isLink: false,
            tooltip: "<strong>Central Ohio VA Healthcare System</strong>",
            popover: "<strong>Central Ohio VA Healthcare System</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [39.980, -82.909]
        }, {
            id: "Cincinnati VA Medical Center",
            attached: true,
            isLink: false,
            tooltip: "<strong>Cincinnati VA Medical Center</strong>",
            popover: "<strong>Cincinnati VA Medical Center</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [39.139, -84.507]
        }, {
            id: "John D. Dingell VA Medical Center",
            attached: true,
            isLink: false,
            tooltip: "<strong>John D. Dingell VA Medical Center</strong>",
            popover: "<strong>John D. Dingell VA Medical Center</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [42.355, -83.058]
        }, {
            id: "LTC Charles S. Kettles VA Medical Center",
            attached: true,
            isLink: false,
            tooltip: "<strong>LTC Charles S. Kettles VA Medical Center</strong>",
            popover: "<strong>LTC Charles S. Kettles VA Medical Center</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [42.286, -83.715]
        }, {
            id: "Edward Hines, Jr. VA Hospital",
            attached: true,
            isLink: false,
            tooltip: "<strong>Edward Hines, Jr. VA Hospital</strong>",
            popover: "<strong>Edward Hines, Jr. VA Hospital</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [41.857, -87.838]
        }, {
            id: "VA Illiana Healthcare System",
            attached: true,
            isLink: false,
            tooltip: "<strong>VA Illiana Healthcare System</strong>",
            popover: "<strong>VA Illiana Healthcare System</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            geoCoords: [40.124, -87.585]
        }],
        responsive: true
    });

    var map = jQuery("#mapsvg").mapSvg();

    $('#mapsvg').css('background','');

  $(document).on("click", ".mapsvg-marker", function () {

    var marker = $(this);
    var markerId = marker.attr("id"); 
    var markerData = map.getMarker(markerId);

    if (!markerData || !markerData.data || !markerData.data.stateId) {
        console.warn("No state linked for marker:", markerId);
        return;
    }

    var stateId = markerData.data.stateId; 

    $(".mapsvg-region").css("fill", "#ffffff");

    var stateElement = $("#" + stateId);
    if (stateElement.length) {
        stateElement.css("fill", "#EAF4DD"); 
    } else {
        console.warn("State element not found for ID:", stateId);
    }
});
});