

var chartDom = document.getElementById('main');

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;


const xCnt = 100;
const yCnt = 20;
const numCnt = xCnt * yCnt;

// prettier-ignore
const seconds = [
];
for (let i = 1; i <= xCnt; i++) {
  seconds.push(i)
}
// prettier-ignore
const minutes = [];
for (let i = 1; i <= yCnt; i++) {
  minutes.push(i)
}


const data = []
const data2 = []
for (let i = 1; i <= yCnt; i++) {
  for (let j = 1; j <= xCnt; j++) {
    data.push([j - 1, i - 1, [1, 5, 10][Math.floor(Math.random() * 3)] || '-'])
    data2.push([j - 1, i - 1, [1, 5, 10][Math.floor(Math.random() * 3)] || '-'])
  }
}
// console.log(data)

option = {
  tooltip: {
    position: 'top'
  },
  grid: {
    height: '50%',
    top: '10%'
  },
  xAxis: {
    type: 'category',
    data: seconds,
    splitArea: {
      show: true
    }
  },
  yAxis: {
    type: 'category',
    data: minutes,
    splitArea: {
      show: true
    },
    inverse: true
  },
  visualMap: {
    min: 0,
    max: 10,
    calculable: true,
    orient: 'horizontal',
    left: 'center',
    bottom: '15%'
  },
  series: [
    {
      name: 'Punch Card',
      type: 'heatmap',
      data: data,
      label: {
        // show: true
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

option && myChart.setOption(option);


var toggle = false
setInterval(() => {

  myChart.setOption({
    series: [
      {
        name: 'Punch Card',
        type: 'heatmap',
        data: toggle ? data : data2,
        label: {
          // show: true
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  });
  toggle = !toggle;
}, 1000)
