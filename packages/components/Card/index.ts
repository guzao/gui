import Card from './Card.vue'
import { withInstall } from '@gui/utils'

export const GCard = withInstall(Card)

export type GCardInsTance = InstanceType<typeof Card>

export default GCard
