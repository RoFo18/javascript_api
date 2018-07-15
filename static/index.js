Plotly.d3.json("/data", function(error, response) {
    if (error) return console.warn(error);
    console.log(response);
    // console.log(response.Behavior)
    var behavior = response.Behavior
    // console.log(behavior)



    // var trace1 = {
    //     x: dates,
    //     y: deaths,
    //     mode: 'markers',
    //     marker:{'color':'red'},
    //     text:'Number of Deaths',
    //     name:'Deaths',
    //     yaxis:'y1'
    // };

    // var trace2 = {
    //     x: dates,
    //     y: google_scores,
    //     mode:'lines+markers',
    //     marker:{'color':'blue'},
    //     text:'Google Score',
    //     name:'Google Score',
    //     yaxis:'y2'
    // }

    // var data = [trace1, trace2]
    
    // var layout = {
    //     legend: {
    //         x: 1.15,
    //         y: 1
    //     },
    //     title:'Weapons of Mass Distraction',
    //     xaxis: {
    //         rangeselector: {
    //             buttons:[
    //                 {
    //                     label:'All Years',
    //                     step:'all'
    //                 }
    //             ]
    //         },
    //         rangeslider:{},
    //         type:'date'
    //     },
    //     yaxis:{
    //         range:[0, 100],
    //         showgrid: true,
    //         title:'Number of Deaths'
    //     },
    //     yaxis2:{
    //         range:[0,100],
    //         overlaying: 'y',
    //         anchor:'x',
    //         side: 'right',
    //         showgrid: false,
    //         title: 'Google Score'
    //     }
        
    // }

    // Plotly.newPlot('plotly', data, layout)

})