// 鼠标hover带省略号的文本时,弹出popover显示完整内容
// 使用方法 
/*
1. 依赖npm i element-ui
2. 自定义指令：v-abbreviation
*/
import ElementUI from "element-ui"
export default {
    install(Vue) {
        let mt = null; //弹框实例
        Vue.directive('abbreviation', {
            inserted(element, binding) {
                const Popover1 = Vue.extend(ElementUI.Popover)

                if (!mt) { //没有实例就创建
                    const vmtest = new Popover1()
                    mt = vmtest
                    mt.trigger = "hover"
                    mt.placement = 'bottom'
                }
                element.addEventListener('mouseover', function () {
                    console.log('listen hover', element);
                    if (element && element.scrollWidth > element.offsetWidth) {
                        mt.reference = element
                        mt.referenceElm = element
                        mt.content = element.innerText
                        mt.$mount()
                        document.body.appendChild(mt.$el)
                    }
                })

            }
        })
    }
}