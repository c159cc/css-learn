

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

let base = 1;
let min = 1;
let max = 1100;
let interval = 2;
let data = genData(1000);
let data2 = genData(1000);



option = {
  tooltip: {
    trigger: 'axis',
    position: function (pt) {
      return [pt[0], '10%'];
    }
  },
  title: {
    left: 'center',
    text: 'Large Ara Chart'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    interval: interval,
    min: min,
    max:max,
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '100%']
  },
  // series: [
  //   {
  //     name: 'Fake Data',
  //     type: 'line',
  //     smooth:false,
  //     symbol: 'none',
  //     data: data
  //   }
  // ]
};
function genData(num) {
  let data = [[base, Math.random() * 300]];
  for (let i = 1; i <= num; i++) {
    data.push([i, Math.random() * 300]);
  }
  return data;
}

function genSeries(arr, count) {

  let chartItem = {
    name: 'Fake Data',
    type: 'line',
    smooth: false,
    symbol: 'none',
    data: arr
  }

  let series = []
  for (let i = 0; i < count; i++) {
    let item = Object.assign({}, chartItem)
    let tData = []
    for (let j = 0; j < arr.length; j++) {
      tData[j] = Object.assign([], arr[j])
      tData[j][1] += 5 * (i + 1);
    }
    item.data = tData;
    series.push(item)
  }

  return series;
}

option.series = genSeries(data, 1)

option && myChart.setOption(option);


var toggle = false;
setInterval(() => {
  option.series = genSeries(toggle ? data : data2, 10)
  myChart.setOption(option);
  toggle = !toggle;
}, 1000)

// window.onresize = function () {
//   myChart.resize({
//     width: 800,
//     height: 400
//   });
// };
