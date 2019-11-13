var margin = {
    top: 40,
    right: 80,
    bottom: 40,
    left: 60
};
var aspectRatio = 16 / 9;
var dimensions = getDimensions();
var svg = d3.select("#eg-svg")
    .attr("width", dimensions.width + margin.left + margin.right)
    .attr("height", dimensions.height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
var xScale = d3.scaleLinear()
    .domain([1864, 2018])
    .range([0, dimensions.width])
    .nice();
var yScale = d3.scaleLinear()
    .domain([0, 150])
    .range([dimensions.height, 0]);

// colors generated from http://vrl.cs.brown.edu/color
var executionMethodColors = {
    electrocution: "rgb(2,56,128)",
    gas: "rgb(0,121,97)",
    hanging: "rgb(178,75,41)",
    injection: "rgb(5,54,55)",
    shot: "rgb(231,23,97)"
}

function getExecutionMethodColor(execution_type) {
    if (execution_type == "Hanging") {
        return executionMethodColors.hanging;
    } else if (execution_type == "Lethal Injection") {
        return executionMethodColors.injection;
    } else if (execution_type == "Shot") {
        return executionMethodColors.shot;
    } else if (execution_type == "Gas") {
        return executionMethodColors.gas;
    } else if (execution_type == "Electrocution") {
        return executionMethodColors.electrocution;
    }
}

function getDimensions() {
    var totalWidth = $("#eg-svg-container").width();
    var totalHeight = totalWidth / aspectRatio;
    return {
        width: totalWidth - margin.left - margin.right,
        height: totalHeight - margin.top - margin.bottom
    };
}


function drawBase() {

    var xAxis = d3.axisBottom()
        .scale(xScale)
        .tickFormat(d3.format("d"));
    var yAxis = d3.axisLeft()
        .scale(yScale)
        .tickSize(-dimensions.width, 0, 0);
    svg.append("g")
        .attr("class", "eg-axis")
        .attr("transform", "translate(0," + dimensions.height + ")")
        .call(xAxis);
    svg.append("g")
        .attr("class", "eg-axis y-axis")
        .call(yAxis)
        // remove vertical axis bar
        .call(g => g.select(".domain").remove());
    // from https://bl.ocks.org/d3noob/23e42c8f67210ac6c678db2cd07a747e
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("class", "eg-label")
        .attr("x", -(dimensions.height / 2) - margin.top)
        .attr("y", 15 - margin.left)
        .text("Number of Executions");
    svg.append("text")
        .attr(
            "transform",
            "translate(" + dimensions.width / 2 + "," +
            (dimensions.height + margin.bottom) + ")")
        .attr("class", "eg-label")
        .text("Year");

    var legend = svg.append("g")
        .attr("transform", "translate(" + dimensions.width + "," + margin.top + ")")
        .attr("class", "eg-legend")
        .attr("id", "eg-legend-main");
    legend.append("text")
        .attr("class", "eg-label")
        .text("Execution Method")
        .attr("text-anchor", "end");

    svg.append("text")
        .attr("transform",
            "translate(" +
            (dimensions.width / 2) +
            "," + (25 - margin.top) + ")")
        .attr("class", "eg-label-title")
        .text("Number of executions over time, by execution method")
        .attr("text-anchor", "middle");
}


function updateGraphic(data) {
    Object.keys(data).forEach(function(d, i) {
        var execution_type = d;
        var line = d3.line()
            .x(function(item) {
                return xScale(item.year);
            })
            .y(function(item) {
                return yScale(item.num_executions);
            });

        Object.keys(data[d]).forEach(function(item, count) {
            svg.append("g")
                .attr("class", "eg-lines")
                .append("path")
                .datum(data[d][item])
                .attr("class", "eg-line " + item)
                .attr("d", line)
                .attr("stroke", getExecutionMethodColor(execution_type))
                .attr("stroke-width", 1.5);
        });

        

        var legend = d3.select("#eg-legend-main");
        var legendItem = legend.append("g")
            .attr("transform", "translate(" + -165 + "," + (margin.top - 10 - (-20 * i)) + ")")
            .attr("class", "eg-legend");
        legendItem.append("rect")
            .attr("width", 30)
            .attr("height", 3)
            .attr("fill", getExecutionMethodColor(execution_type));
        var textItem = legendItem.append("g")
            .attr("transform", "translate(40, 5)")
            .attr("class", "eg-legend-item");
        textItem.append("text")
            .text(execution_type)
            .attr("class", "eg-axis");
    });
}


function scrollStory(data) {
    var graphic = drawBase();
    updateGraphic(data);
    enterView({
        selector: ".step",
        offset: 0.7,
        enter: elem => {
            var index = parseInt(d3.select(elem).attr("data-index"));

            d3.selectAll(".eg-line").filter(".phase-" + index)
                .transition()
                .attr("stroke-width", 4)
                .duration(1000);

        },
        exit: elem => {
            var index = d3.select(elem).attr("data-index");
            d3.selectAll(".eg-line").filter(".phase-" + index)
                .transition()
                .attr("stroke-width", 1.5)
                .duration(1000);
        }
    });
}

d3.json("data/execution_method_count.json")
        .then(function(data) {
            scrollStory(data);
        })
        .catch(function(error) {
            console.error(error);
        })