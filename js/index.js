function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
//  document.getElementById("supercontainer").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("supercontainer").style.marginLeft= "0";
}

function calendarReminder(){
// alert("buttonclicked");
    document.getElementById("show-confirmation").style.display = "block";
}

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawAnnotationsFederal);

function drawAnnotationsFederal() {
      var data = google.visualization.arrayToDataTable([
        ['Issue', 'Number Of Tweets'],
        ['Health Care', 3300000],
        ['The Economy', 1300000],
        ['Immigration', 1100000],
        ['Gun Policy', 900000],
        ["Women's Rights", 800000],
        ["Taxes", 500000],
        ["Foreign Affairs", 300000],
        ["Income Inequality", 90000],
        ["Supreme Court", 75000],
        ["U.S. Trade Policy", 45000],
        ["Climate Policy", 40000],
        ["Mueller Investigation", 22500],
        ["Partisanship", 20000]
        
      ]);

      var data = google.visualization.arrayToDataTable([
        ['Issue', 'Number of Tweets', {type: 'string', role: 'annotation'}],
        ['Health Care', 3300000, '3.3M'],
        ['The Economy', 1300000, '1.3M'],
        ['Immigration', 1100000, '1.1M'],
        ['Gun Policy', 900000, '.9M'],
        ["Women's Rights", 800000, '.8M'],
        ["Taxes", 500000, '.5M'],
        ["Foreign Affairs", 300000, '.3M'],
        ["Income Inequality", 90000, '90K'],
        ["Supreme Court", 75000, '75K'],
        ["U.S. Trade Policy", 45000, '45K'],
        ["Climate Policy", 40000, '40K'],
        ["Mueller Investigation", 22500, '22.5K'],
        ["Partisanship", 20000, '20K']
      ]);

      var options = {
        title: 'Most Talked About Issues',
        chartArea: {width: '70%'},
        annotations: {
          alwaysOutside: true,
          textStyle: {
            fontSize: 16,
            auraColor: 'none',
            color: '#555'
          },
          boxStyle: {
            stroke: '#ccc',
            strokeWidth: 1,
            gradient: {
              color1: '#f3e5f5',
              color2: '#f3e5f5',
              x1: '0%', y1: '0%',
              x2: '100%', y2: '100%'
            }
          }
        },
        hAxis: {
          title: 'Total Tweets',
          minValue: 10000,
        },
        vAxis: {
          title: 'Issue'
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('chart_div_federal'));
      chart.draw(data, options);
    }

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawAnnotationsState);

function drawAnnotationsState() {
      var data = google.visualization.arrayToDataTable([
        ['Issue', 'Number Of Tweets'],
        ['Justice Reform', 1200000],
        ['Education', 900000],
        ['Corruption', 800000],
        ['Debt Crisis', 600000],
        ["Women's Rights", 500000],
        ["Clean Energy", 350000],
        ["Right to Work", 200000],
        ["Drug Legalization", 90000],
        ["Infrastructure", 50000],
        ["Sanctuary Cities", 38000],
        ["Sales Tax", 22000],
        ["LGBT Rights", 18000],
        ["Minimum Wage", 14000]
        
      ]);

      var data = google.visualization.arrayToDataTable([
        ['Issue', 'Number of Tweets', {type: 'string', role: 'annotation'}],
        ['Justice Reform', 1200000, '1.2M'],
        ['Education', 900000, '.9M'],
        ['Corruption', 800000, '.8M'],
        ['Debt Crisis', 600000, '.6M'],
        ["Women's Rights", 500000, '.5M'],
        ["Clean Energy", 350000, '350K'],
        ["Right to Work", 200000, '200K'],
        ["Drug Legalization", 90000, '90K'],
        ["Infrastructure", 50000, '50K'],
        ["Sanctuary Cities", 38000, '38K'],
        ["Sales Tax", 22000, '22K'],
        ["LGBT Rights", 18000, '18K'],
        ["Minimum Wage", 14000, '14K']
      ]);

      var options = {
        title: 'Most Talked About Issues',
        chartArea: {width: '70%'},
        annotations: {
          alwaysOutside: true,
          textStyle: {
            fontSize: 16,
            auraColor: 'none',
            color: '#555'
          },
          boxStyle: {
            stroke: '#ccc',
            strokeWidth: 1,
            gradient: {
              color1: '#f3e5f5',
              color2: '#f3e5f5',
              x1: '0%', y1: '0%',
              x2: '100%', y2: '100%'
            }
          }
        },
        hAxis: {
          title: 'Total Tweets',
          minValue: 10000,
        },
        vAxis: {
          title: 'Issue'
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('chart_div_state'));
      chart.draw(data, options);
    }