// Our labels along the x-axis
//var years = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];
// For drawing the lines
//var africa = [886,114,106,106,107,111,133,221,783,2478];
//var asia = [282,350,411,502,635,809,947,1402,3700,5267];
//var europe = [168,170,178,190,203,276,408,547,675,734];
//var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
//var northAmerica = [6,3,2,2,7,26,82,172,312,433];

//import 'chartjs-plugin-datalabels'

var ctx = document.getElementById("myChart");

//Type, data, options

var chartGraph = new Chart (ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            backgroundColor: ["#FF00C9","#007CFF","#0BCD01","#F97900","#FAE108","#9408FA","#562C04"]
        }
    ]},
    plugins: [ChartDataSource],
    options: {
        tooltips: {
					enabled: true
				},
        hover: 	{
                animationDuration: 1
				},			
        animation: {
            duration: 1,
            onComplete: function () {
                var chartInstance = this.chart,
                    ctx = chartInstance.ctx;
                    ctx.textAlign = 'center';
                    ctx.fillStyle = "rgba(255, 255, 255, 1)";
					ctx.font = "14px Arial";
                    ctx.textBaseline = 'bottom';
                    // Loop through each data in the datasets
                    this.data.datasets.forEach(function (dataset, i) {
						for (var i = 0; i < dataset.data.length; i++) {
							var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
							total = dataset._meta[Object.keys(dataset._meta)[0]].total,
							mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius)/2,
							start_angle = model.startAngle,
							end_angle = model.endAngle,
							mid_angle = start_angle + (end_angle - start_angle)/2;
							var x = mid_radius * Math.cos(mid_angle);
							var y = mid_radius * Math.sin(mid_angle);
							ctx.fillStyle = '#fff';
							if (i == 3){ // Darker text color for lighter background
								ctx.fillStyle = '#444';
							}
							var percent = String(Math.round(dataset.data[i]/total*100)) + "%";      
							//Don't Display If Legend is hide or value is 0
							if(dataset.data[i] != 0 && dataset._meta[0].data[i].hidden != true) {
								ctx.fillText(dataset.data[i], model.x + x, model.y + y);
								// Display percent in another line, line break doesn't work for fillText
								ctx.fillText(percent, model.x + x, model.y + y + 15);
							}
						}
                    });
                }
            },			
        title: {
            display: true,
            fontSize: 30,
            text: 'Jumlah Tender Tiap Jenis Pengadaan',

        },

        plugins: {
            datasource: {
                url: 'data_all.xlsx',
				rowMapping: 'index',
				datasetLabels: "'Jumlah tender setiap jenis peng'!C3",
				indexLabels: "'Jumlah tender setiap jenis peng'!B4:B10",
				data: "'Jumlah tender setiap jenis peng'!C4:C10"
            }
        }
    }
});

var ctx2 = document.getElementById("myChart2");

//Type, data, options

var chartGraph2 = new Chart (ctx2, {
    type: 'line',
    data: {
        datasets: [{
            borderColor: "#FF00C9",
			pointBorderColor: "#940453",
			pointBackgroundColor: "#940453"
        }
    ]},
    plugins: [ChartDataSource],
    options: {
        tooltips: {
					enabled: true
				},
        hover: 	{
                animationDuration: 1
				},			
        animation: {
            duration: 1,
            onComplete: function () {
                var chartInstance = this.chart,
                    ctx = chartInstance.ctx;
                    ctx.textAlign = 'center';
                    ctx.fillStyle = "rgba(255, 255, 255, 1)";
					ctx.font = "14px Arial";
                    ctx.textBaseline = 'bottom';
                    // Loop through each data in the datasets
                    this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function (bar, index) {
                            var data = dataset.data[index];
                            ctx.fillText(data, bar._model.x, bar._model.y - 5);
                        });
                    });
                }
            },			
        title: {
            display: true,
            fontSize: 30,
            text: 'Jumlah Perusahaan Ikut Tender Per Tahun (2017-2021)',

        },
		
		scales: {
			xAxes: [{
				barPercentage: 0.4
			}]
		},		

        plugins: {
            datasource: {
                url: 'data_all.xlsx',
				rowMapping: 'index',
				datasetLabels: "'Jumlah Perusahaan Tender Per Ta'!B3",
				indexLabels: "'Jumlah Perusahaan Tender Per Ta'!A4:A8",
				data: "'Jumlah Perusahaan Tender Per Ta'!B4:B8"
            }
        }
    }
});


var ctx3 = document.getElementById("myChart3");

//Type, data, options

var chartGraph3 = new Chart (ctx3, {
    type: 'bar',
    data: {
        datasets: [{
            backgroundColor: "#0BCD01"
        }
    ]},
    plugins: [ChartDataSource],
    options: {
        tooltips: {
					enabled: true
				},
        hover: 	{
                animationDuration: 1
				},			
        animation: {
            duration: 1,
            onComplete: function () {
                var chartInstance = this.chart,
                    ctx = chartInstance.ctx;
                    ctx.textAlign = 'center';
                    ctx.fillStyle = "rgba(255, 255, 255, 1)";
					ctx.font = "14px Arial";
                    ctx.textBaseline = 'bottom';
                    // Loop through each data in the datasets
                    this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function (bar, index) {
                            var data = dataset.data[index];
                            ctx.fillText(data, bar._model.x, bar._model.y - 5);
                        });
                    });
                }
            },	
		
        title: {
            display: true,
            fontSize: 30,
            text: 'Jumlah Tender Per Tahun (2017-2021)',

        },
		
		scales: {
			xAxes: [{
				barPercentage: 0.4
			}]
		},		

        plugins: {
            datasource: {
                url: 'data_all.xlsx',
				rowMapping: 'index',
				datasetLabels: "'Jumlah Perusahaan Tender Per Ta'!B12",
				indexLabels: "'Jumlah Perusahaan Tender Per Ta'!A13:A17",
				data: "'Jumlah Perusahaan Tender Per Ta'!B13:B17"
            }
        }
    }
});

var ctx4 = document.getElementById("myChart4");

//Type, data, options

var chartGraph4 = new Chart (ctx4, {
    type: 'line',
    data: {
        datasets: [{
            borderColor: "#007CFF",
			pointBorderColor: "#043094",
			pointBackgroundColor: "#043094"
        }
    ]},
    plugins: [ChartDataSource],
    options: {
        tooltips: {
					enabled: true
				},
        hover: 	{
                animationDuration: 1
				},			
        animation: {
            duration: 1,
            onComplete: function () {
                var chartInstance = this.chart,
                    ctx = chartInstance.ctx;
                    ctx.textAlign = 'center';
                    ctx.fillStyle = "rgba(255, 255, 255, 1)";
					ctx.font = "14px Arial";
                    ctx.textBaseline = 'bottom';
                    // Loop through each data in the datasets
                    this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
							var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
							total = dataset._meta[Object.keys(dataset._meta)[0]].total,
							mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius)/2,
							start_angle = model.startAngle,
							end_angle = model.endAngle,
							mid_angle = start_angle + (end_angle - start_angle)/2;
							var x = mid_radius * Math.cos(mid_angle);
							var y = mid_radius * Math.sin(mid_angle);						
                        meta.data.forEach(function (bar, index) {
                            var data = dataset.data[index];
                            ctx.fillText(data, bar._model.x, bar._model.y - 5);
                        });
                    });
                }
            },	
			
        title: {
            display: true,
            fontSize: 30,
            text: '10 Tender Dengan Peserta Terbanyak'
        },
		
		scales: {
			xAxes: [{
				barPercentage: 0.4
			}]
		},		

        plugins: {
            datasource: {
                url: 'data_all.xlsx',
				rowMapping: 'index',
				datasetLabels: "'Jumlah Peserta Terbanyak Tiap T'!C3",
				indexLabels: "'Jumlah Peserta Terbanyak Tiap T'!A4:A13",
				data: "'Jumlah Peserta Terbanyak Tiap T'!C4:C13"
            }
        }
    }
});

var ctx5 = document.getElementById("myChart5");

//Type, data, options

var chartGraph5 = new Chart (ctx5, {
    type: 'bar',
    data: {
        datasets: [{
            backgroundColor: "#F97900"
        }
    ]},
    plugins: [ChartDataSource],
    options: {
        tooltips: {
					enabled: true
				},
        hover: 	{
                animationDuration: 1
				},			
        animation: {
            duration: 1,
            onComplete: function () {
                var chartInstance = this.chart,
                    ctx = chartInstance.ctx;
                    ctx.textAlign = 'center';
                    ctx.fillStyle = "rgba(255, 255, 255, 1)";
					ctx.font = "14px Arial";
                    ctx.textBaseline = 'bottom';
                    // Loop through each data in the datasets
                    this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function (bar, index) {
                            var data = dataset.data[index];
                            ctx.fillText(data, bar._model.x, bar._model.y - 5);
                        });
                    });
                }
            },			
		
        title: {
            display: true,
            fontSize: 30,
            text: 'Data Perusahaan Menang / Kalah'
        },
		
		scales: {
			xAxes: [{
				barPercentage: 0.5
			}]
		},		

        plugins: {
            datasource: {
                url: 'data_all.xlsx',
				rowMapping: 'index',
				datasetLabels: "'Perusahaan yang sering menang d'!F6",
				indexLabels: "'Perusahaan yang sering menang d'!E7:E8",
				data: "'Perusahaan yang sering menang d'!F7:F8"
            }
        }
    }
});

var ctx6 = document.getElementById("myChart6");

//Type, data, options

var chartGraph6 = new Chart (ctx6, {
    type: 'pie',
    data: {
        datasets: [{
            backgroundColor: ["#9408FA","#562C04"]
        }
    ]},
    plugins: [ChartDataSource],
    options: {
		tooltips: {
					enabled: true
				},
        hover: 	{
                animationDuration: 1
				},			
        animation: {
            duration: 1,
            onComplete: function () {
                var chartInstance = this.chart,
                    ctx = chartInstance.ctx;
                    ctx.textAlign = 'center';
                    ctx.fillStyle = "rgba(255, 255, 255, 1)";
					ctx.font = "18px Arial";
                    ctx.textBaseline = 'bottom';
                    // Loop through each data in the datasets
                    this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
						var incrementX = 30;
						var incrementY = 30;
						var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
						total = dataset._meta[Object.keys(dataset._meta)[0]].total,
						mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius)/2,
						start_angle = model.startAngle,
						end_angle = model.endAngle,
						mid_angle = start_angle + (end_angle - start_angle)/2;
						var x = mid_radius * Math.cos(mid_angle);
						var y = mid_radius * Math.sin(mid_angle);
						ctx.fillStyle = '#fff';
						if (i == 3){ // Darker text color for lighter background
							ctx.fillStyle = '#444';
						}							
                        meta.data.forEach(function (pie, index) {
                            var data = dataset.data[index];
							var percent = String(Math.round(data/total*100)) + "%";  
                            ctx.fillText(data, pie._model.x + incrementX, pie._model.y - incrementY - incrementY);
							ctx.fillText(percent, pie._model.x + incrementX, pie._model.y - incrementY);
							incrementX = incrementX - 60;
                        });
                    });
                }
            },	
        title: {
            display: true,
            fontSize: 30,
            text: 'Data Tender Selesai Dan Tender Batal'
        },

        plugins: {
            datasource: {
                url: 'data_all.xlsx',
				rowMapping: 'index',
				datasetLabels: "'Jumlah tender selesai dan batal'!C3",
				indexLabels: "'Jumlah tender selesai dan batal'!B4:B5",
				data: "'Jumlah tender selesai dan batal'!C4:C5"
            },
	        labels: {
				render: 'percentage',
				fontColor: ['green', 'white', 'red'],
				precision: 2
			}
//			datalabels:{
//				formatter:(value, ctx)=>{
//					return value + '%';
//				}, 
//				display: true,
//				align: 'bottom',
//				backgroundColor: '#ccc',
//				borderRadius: 3,
//				font: {
//					size: 18
//				}	
//			datalabels: {
//				formatter: (value, ctx6) => {
//					let datasets = ctx6.chart.data.datasets;
//					if (datasets.indexOf(ctx6.dataset) === datasets.length - 1) {
//						let sum = datasets[0].data.reduce((a, b) => a + b, 0);
//						let percentage = Math.round((value / sum) * 100) + '%';
//						return percentage;
//					} else {
//						return percentage;
//					}
//				},
//				color: '#fff',
//			}
        }
    }
});

var ctx7 = document.getElementById("myChart7");

//Type, data, options

var chartGraph7 = new Chart (ctx7, {
    type: 'bar',
	
    data: {
        datasets: [{
            backgroundColor: "#FF00C9",
        }
    ]},
    plugins: [ChartDataSource],
    options: {
        tooltips: {
					enabled: true
				},
        hover: 	{
                animationDuration: 1
				},			
        animation: {
            duration: 1,
            onComplete: function () {
                var chartInstance = this.chart,
                    ctx = chartInstance.ctx;
                    ctx.textAlign = 'center';
                    ctx.fillStyle = "rgba(255, 255, 255, 1)";
					ctx.font = "14px Arial";
                    ctx.textBaseline = 'bottom';
                    // Loop through each data in the datasets
                    this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function (bar, index) {
                            var data = dataset.data[index];
                            ctx.fillText(data, bar._model.x, bar._model.y - 5);
                        });
                    });
                }
            },		
		
        title: {
            display: true,
            fontSize: 30,
            text: '5 Tender Dengan HPS Terbesar'
        },	

		scales: {
			xAxes: [{
				barPercentage: 0.6
			}]
		},
        plugins: {
            datasource: {
                url: 'data_all.xlsx',
				rowMapping: 'index',
				datasetLabels: "'Top 5 tender terbesar dan terke'!E19",
				indexLabels: "'Top 5 tender terbesar dan terke'!B20:B24",
				data: "'Top 5 tender terbesar dan terke'!E20:E24",
            }
        }
    }
});

var ctx8 = document.getElementById("myChart8");

//Type, data, options

var chartGraph8 = new Chart (ctx8, {
    type: 'bar',
    data: {
        datasets: [{
            backgroundColor: "#0BCD01"
        }
    ]},
    plugins: [ChartDataSource],
    options: {
        tooltips: {
					enabled: true
				},
        hover: 	{
                animationDuration: 1
				},			
        animation: {
            duration: 1,
            onComplete: function () {
                var chartInstance = this.chart,
                    ctx = chartInstance.ctx;
                    ctx.textAlign = 'center';
                    ctx.fillStyle = "rgba(255, 255, 255, 1)";
					ctx.font = "14px Arial";
                    ctx.textBaseline = 'bottom';
                    // Loop through each data in the datasets
                    this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function (bar, index) {
                            var data = dataset.data[index];
                            ctx.fillText(data, bar._model.x, bar._model.y - 5);
                        });
                    });
                }
            },			
		
        title: {
            display: true,
            fontSize: 30,
            text: '5 Tender Dengan HPS Terkecil'
        },	
		scales: {
			xAxes: [{
				barPercentage: 0.6
			}]
		},
        plugins: {
            datasource: {
                url: 'data_all.xlsx',
				rowMapping: 'index',
				datasetLabels: "'Top 5 tender terbesar dan terke'!E27",
				indexLabels: "'Top 5 tender terbesar dan terke'!B28:B32",
				data: "'Top 5 tender terbesar dan terke'!E28:E32"
            }
        }
    }
});

var ctx9 = document.getElementById("myChart9");

//Type, data, options

var chartGraph9 = new Chart (ctx9, {
    type: 'bar',
    data: {
        datasets: [{
            backgroundColor: "#007CFF"
        }
    ]},
    plugins: [ChartDataSource],
    options: {
        tooltips: {
					enabled: true
				},
        hover: 	{
                animationDuration: 1
				},			
        animation: {
            duration: 1,
            onComplete: function () {
                var chartInstance = this.chart,
                    ctx = chartInstance.ctx;
                    ctx.textAlign = 'center';
                    ctx.fillStyle = "rgba(255, 255, 255, 1)";
					ctx.font = "14px Arial";
                    ctx.textBaseline = 'bottom';
                    // Loop through each data in the datasets
                    this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function (bar, index) {
                            var data = dataset.data[index];
                            ctx.fillText(data, bar._model.x, bar._model.y - 5);
                        });
                    });
                }
            },			
		
        title: {
            display: true,
            fontSize: 30,
            text: '5 Tender Dengan Pagu Terbesar'
        },	
		scales: {
			xAxes: [{
				barPercentage: 0.6
			}]
		},
        plugins: {
            datasource: {
                url: 'data_all.xlsx',
				rowMapping: 'index',
				datasetLabels: "'Top 5 tender terbesar dan terke'!E2",
				indexLabels: "'Top 5 tender terbesar dan terke'!B3:B7",
				data: "'Top 5 tender terbesar dan terke'!E3:E7"
            }
        }
    }
});


var ctx10 = document.getElementById("myChart10");

//Type, data, options

var chartGraph10 = new Chart (ctx10, {
    type: 'bar',
    data: {
        datasets: [{
            backgroundColor: "#FAE108"
        }
    ]},
    plugins: [ChartDataSource],
    options: {
        tooltips: {
					enabled: true
				},
        hover: 	{
                animationDuration: 1
				},			
        animation: {
            duration: 1,
            onComplete: function () {
                var chartInstance = this.chart,
                    ctx = chartInstance.ctx;
                    ctx.textAlign = 'center';
                    ctx.fillStyle = "rgba(255, 255, 255, 1)";
					ctx.font = "14px Arial";
                    ctx.textBaseline = 'bottom';
                    // Loop through each data in the datasets
                    this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function (bar, index) {
                            var data = dataset.data[index];
                            ctx.fillText(data, bar._model.x, bar._model.y - 5);
                        });
                    });
                }
            },			
		
        title: {
            display: true,
            fontSize: 30,
            text: '5 Tender Dengan Pagu Terkecil'
        },	
		scales: {
			xAxes: [{
				barPercentage: 0.6
			}]
		},
        plugins: {
            datasource: {
                url: 'data_all.xlsx',
				rowMapping: 'index',
				datasetLabels: "'Top 5 tender terbesar dan terke'!E11",
				indexLabels: "'Top 5 tender terbesar dan terke'!B12:B16",
				data: "'Top 5 tender terbesar dan terke'!E12:E16"
            }
        }
    }
});

Chart.defaults.global.defaultFontColor = "#fff";