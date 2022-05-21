// Our labels along the x-axis
//var years = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];
// For drawing the lines
//var africa = [886,114,106,106,107,111,133,221,783,2478];
//var asia = [282,350,411,502,635,809,947,1402,3700,5267];
//var europe = [168,170,178,190,203,276,408,547,675,734];
//var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
//var northAmerica = [6,3,2,2,7,26,82,172,312,433];

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
        title: {
            display: true,
            fontSize: 30,
            text: 'Data Menang / Kalah'
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
            }
        }
    }
});

var ctx7 = document.getElementById("myChart7");

//Type, data, options

var chartGraph7 = new Chart (ctx7, {
    type: 'bar',
    data: {
        datasets: [{
            backgroundColor: "#FF00C9"
        }
    ]},
    plugins: [ChartDataSource],
    options: {
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
				data: "'Top 5 tender terbesar dan terke'!E20:E24"
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