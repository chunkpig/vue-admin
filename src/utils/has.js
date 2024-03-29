import Vue from 'vue';

/**权限指令 */
const has = Vue.directive('has', {
  bind: function (el, binding, vnode) {
    //获取也没按钮权限
    let btnPermissionsArr = [];
    if (binding.value) {
      //如果指令传值，获取指令参数，根据指令参数和当前登录人按钮权限比较
      btnPermissionsArr = Array.of(binding.value);
    } else {
      // 否则获取路由中的参数，根据路由的btnPermissionsArr和当前登录人按钮权限做比较。
      btnPermissionsArr = vnode.context.$route.meta.btnPermissions;
    }
    if (!Vue.prototype.$_has(btnPermissionsArr)) {
      el.parentNode.removeChild(el);
    }
  }
});

Vue.prototype.$_has = function (value) {
  let isExist = false;
  // 获取用户按钮权限
  let btnPermissionsStr = sessionStorage.getItem('btnPermissions');
  if (btnPermissionsStr == undefined || btnPermissionsStr == null) {
    return false;
  }
  if (value.indexOf(btnPermissionsStr) > -1) {
    isExist = true;
  }
  return isExist;
};
export {
  has
};