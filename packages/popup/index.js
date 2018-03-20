import Popup from './index.vue'

let $component
Popup.install=function(Vue,options){
        Vue.component(Popup.name,Popup)
        if(!$component){
            var popComponent =Vue.extend(Popup) 
            $component = new popComponent({
            }).$mount()
            //console.log(methodOptions)
            document.querySelector('body').appendChild($component.$el)
        }
        $component.isVisible = false
        let p ={
            show(text,btnarr,fn){
                $component.isVisible = true
                $component.txt=text
                $component.btnArr=btnarr
                $component.$on('ok',function(){
                    fn()
                })
            },
            hide(){
                $component.isVisible = false
            }
        }
        if (!Vue.$pop) {
            Vue.$pop = p;
        }
        Vue.mixin({
            created() {
                this.$pop = Vue.$pop;
            }
        })
            
}
export default Popup