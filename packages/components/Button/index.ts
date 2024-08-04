import Button from './Btton.vue'
import ButtonGroup from './ButtonGroup.vue'
import { withInstall } from '@gui/utils'

export const GButton = withInstall(Button)
export const GButtonGroup = withInstall(ButtonGroup)

export default GButton


export * from "./type";