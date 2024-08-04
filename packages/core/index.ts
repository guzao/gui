import '@gui/theme/index.css'
import components from './components'
import { mackInsatller } from '@gui/utils'

console.log('=[]=');


const installer = mackInsatller(components)

// 按需引入
export * from '@gui/components'

// 全局注册
export default installer