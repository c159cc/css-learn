let Service = require('node-windows').Service;

let svc = new Service({
    name: 'ele4React',    //服务名称
    description: 'ele4React', //描述
    script: 'F:/work/node-server/getFileList.js'  //nodejs项目要启动的文件路径
});

svc.on('uninstall', function () {
    console.log('Uninstall complete.');
    console.log('The service exists: ', svc.exists);
});

svc.uninstall();