var svg = d3.select("#svg"),
    width = 1000,
    height = 800;

var tooltip = d3.select("body").append("div")
    .attr("id", "tooltip")
    .style("opacity", 0);

const container = d3.select("#chart");

// Natural Earth projection  --> Center(0,0) and theres no rotation 
var gfg = d3.geoNaturalEarth()
    .scale(width / 1.5 / Math.PI)
    .rotate([0, 0])
    .center([0, 0])
    .translate([width / 2, height / 3]);

var data = d3.map();
var colorScale = d3.scaleThreshold()
    .domain([0, 2, 3.5, 4, 5, 6, 7, 7.5, 7.8])
    .range(d3.schemeBlues[9]);

let zoom = d3.zoom()
    .scaleExtent([1,10])
    .translateExtent([[-500, -300], [1500, 1000]])
    .on('zoom', () => {
        svg.attr('transform', d3.event.transform)
    });

container.call(zoom);

//Loadar data och csv filen
d3.queue()
    .defer(d3.json, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
    .defer(d3.csv, "./js/world-happiness-report-2021.csv", function(d) { data.set(d.code, +d.ladderscore); })
    .await(ready);

function ready(error, topo) {
    // Draw the map
    svg.append("g")
        .attr("class", "countries")
        .selectAll("path")
        .data(topo.features)
        .enter()
        .append("path")
        // draw each country
        .attr("d", d3.geoPath()
            .projection(gfg)
        )
        // set the color of each country
        .attr("fill", function(d) {
            d.total = data.get(d.id) || 0;
            return colorScale(d.total);
        })
        .on("mouseover", function(d) {
            tooltip.html("<b>Country:</b> " + d.properties.name + "<br><b>Score:</b> " + d.total)
                .style("opacity", 0.8)
                .style("left", (d3.event.pageX) + 10 + "px")
                .style("top", (d3.event.pageY) + 5 + "px");

            d3.select(this)
                .transition()
                .duration(200)
                .style("opacity", 1)
                .style("stroke", "black")
                .style("stroke-width", "1.5px")
        })
        .on("mouseout", function(d, i) {
            tooltip.style("opacity", 0);
            d3.select(this)
                .transition()
                .duration(200)
                .style("stroke", "transparent")
        })

}

