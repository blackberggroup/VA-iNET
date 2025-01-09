jQuery(document).ready(function() {
    jQuery("#mapsvg").mapSvg({
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
            id: "VA Palo Alto Health Care System<br />\nPalo Alto, CA",
            attached: true,
            isLink: false,
            tooltip: "<strong>National Center for Collaborative Healthcare Innovation</strong>",
            popover: "<strong>National Center for Collaborative Healthcare Innovation</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            x: 846.9330272495802,
            y: 520.3999876124325,
            geoCoords: [37.426471, -122.275474]
        }, {
            id: "Office of Connected Care, Veteran Integrated Service Network (VISN) 10<br />\nCincinnati, OH",
            attached: true,
            isLink: false,
            tooltip: "<strong>Digital and Remote Health Center for Innovation</strong>",
            popover: "<strong>Digital and Remote Health Center for Innovation</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            x: 881.2815928922919,
            y: 573.6668890049117,
            geoCoords: [39.2, -84.5]
        }, {
            id: "Veterans Integrated Service Network (VISN) 1<br />\nManchester, NH",
            attached: true,
            isLink: false,
            tooltip: "<strong>New England Center for Innovation Excellence</strong>",
            popover: "<strong>New England Center for Innovation Excellence</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            x: 927.2651992253102,
            y: 556.8532421224277,
            geoCoords: [43, -71.241815]
        }, {
            id: "Central Virginia VA Health Care System<br />\nRichmond, VA",
            attached: true,
            isLink: false,
            tooltip: "<strong>Innovation, Development, Education, Advanced Implementation, Solutions (IDEAS) Center</strong>",
            popover: "<strong>Innovation, Development, Education, Advanced Implementation, Solutions (IDEAS) Center</strong>",
            data: {},
            src: "assets/img/map-svg/default-pin.svg",
            width: 26,
            height: 30,
            x: 940.7664045993826,
            y: 592.6314363637191,
            geoCoords: [37.633674, -78.311069]
        }],
        responsive: true
    });

    $('#mapsvg').css('background','');
});