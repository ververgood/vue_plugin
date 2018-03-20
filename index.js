import popup from './packages/popup/index.js'

function install(Vue){
    if (install.installed) {
        return
      }
      install.installed = true
      popup.install(Vue)
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(install)
  }
  
  export default popup