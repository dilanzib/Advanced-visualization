
function updateMap(){
    var option = document.getElementById("state").value;

    if(option == "life"){ 
    var colorScale = d3.scaleThreshold()
        .domain([0, 10, 30, 50, 55, 60, 70, 72, 75])
        .range(d3.schemeReds[9]);
        
            d3.queue()
        .defer(d3.json, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
        .defer(d3.csv, "./js/world-happiness-report-2021.csv", function(d) { data.set(d.code, +d.life); })
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
    } else if (option == "happiness"){
    var colorScale = d3.scaleThreshold()
    .domain([0, 2, 3.5, 4, 5, 6, 7, 7.5, 7.8])
    .range(d3.schemeBlues[9]);
        
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
    } else if (option == "freedom"){
    var colorScale = d3.scaleThreshold()
    .domain([0, 0.5, 0.6, 0.65, 0.7, 0.8, 0.85, 0.9, 0.95])
    .range(d3.schemeGreens[9]);
        
    d3.queue()
        .defer(d3.json, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
        .defer(d3.csv, "./js/world-happiness-report-2021.csv", function(d) { data.set(d.code, +d.freedom); })
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
    } else if (option == "socialsupport"){
        var colorScale = d3.scaleThreshold()
        .domain([0, 0.5, 0.6, 0.65, 0.7, 0.8, 0.85, 0.9, 0.95])
        .range(d3.schemeOranges[9]);
            
        d3.queue()
            .defer(d3.json, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
            .defer(d3.csv, "./js/world-happiness-report-2021.csv", function(d) { data.set(d.code, +d.freedom); })
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

 }
}