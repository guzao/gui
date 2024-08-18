import Button from './Btton.vue'
import ButtonGroup from './ButtonGroup.vue'
import { withInstall } from '@gui/utils'

export const GButton = withInstall(Button)
export const GButtonGroup = withInstall(ButtonGroup)

export default GButton

export type GButtonInstance = InstanceType<typeof GButton>

export type GButtonGroupInstance = InstanceType<typeof GButtonGroup>


export * from "./type";