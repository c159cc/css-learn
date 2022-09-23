
function readFiles() {
  const routes = []

  // 读取文件
  function walkSync(currentDirPath, callback) {
    var fs = require('fs'),
      path = require('path');
    fs.readdirSync(currentDirPath, { withFileTypes: true }).forEach(function (dirent) {
      var filePath = path.join(currentDirPath, dirent.name);
      if (dirent.isFile()) {
        callback(filePath, dirent);
      } else if (dirent.isDirectory()) {
        walkSync(filePath, callback);
      }
    });
  }
  walkSync('F:\\work\\SinscheWeb\\trunk\\CIM2\\reactDemo\\css-learn\\src\\pages', function (filePath, stat) {
    if (/.html$/.test(stat.name)) {
      var component = filePath.replace("F:\\work\\SinscheWeb\\trunk\\CIM2\\reactDemo\\css-learn\\src\\pages\\", "");
      var arr = component.split('\\');
      addMenuItem(arr)
    }
  });

  function addMenuItem(arr) {
    let curRoute = routes;
    let nextRoute;
    let route = "";
    for (let i = 0; i < arr.length; i++) {
      let key = arr[i];
      route += "/" + key
      nextRoute = curRoute.find(item => {
        return item.name === key
      })
      // debugger

      // 分为2种情况, 找到, 没有找到
      if (nextRoute) {
        curRoute = nextRoute.routes
      } else if (i === arr.length - 1) {
        curRoute.push({
          name: key,
          path: route,
          component: '@/config/template/cc',
          // component: arr.join('/'),
        })
      } else {
        // 添加一个元素, 下次遍历的时候使用新添加的元素
        nextRoute = []
        curRoute.push({
          name: key,
          path: route,
          routes: nextRoute,
        })
        curRoute = nextRoute;
      }
    }
  }

  return routes;
}


module.exports = readFiles

