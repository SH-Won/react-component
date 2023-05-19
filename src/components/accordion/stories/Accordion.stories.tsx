import { Colors } from '@/index'
import type { Meta, StoryObj } from '@storybook/react'
import Accordion from '../Accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Accordion',
  component: (props) => {
    return (
      <div style={{ width: '300px' }}>
        <Accordion {...props}>
          <div style={{ height: '100%' }} className="children">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui atque
            alias dignissimos distinctio placeat! Aliquid maiores, totam debitis
            dicta tempore officia? Nobis porro, architecto pariatur quas maiores
            quod ducimus alias!
          </div>
        </Accordion>
      </div>
    )
  },
}
export default meta
type Story = StoryObj<typeof Accordion>

export const BasicAccordion: Story = {
  args: {
    title: 'Basic Accordion',
  },
}
