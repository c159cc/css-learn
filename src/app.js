import { request } from 'umi';
import Template from '@/config/template/cc'
import '@/config/css/custom.css'
var extraRoutes

export function patchRoutes({ routes }) {
  routes[0].routes = extraRoutes
}

export function render(oldRender) {
  request('/api/routes').then((res) => {
    cvtComponent(res)
    extraRoutes = res;
    oldRender();
  })
}
function cvtComponent(newRoutes) {
  if (!newRoutes) {
    return
  }
  if (newRoutes instanceof Array) {
    newRoutes.forEach(item => {
      cvtComponent(item)
    })
  } else if (newRoutes.hasOwnProperty('component')) {
    newRoutes.component = Template
  } else if (newRoutes.hasOwnProperty('routes')) {
    cvtComponent(newRoutes['routes'])
  }
}
