import { Colors } from '@/index'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Accordion from '../Accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Accordion',
  component: (props) => {
    const [open, setOpen] = useState(false)
    return (
      <div style={{ width: '300px' }}>
        <Accordion {...props}>
          <div style={{ height: '100%' }} className="children">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui atque
            alias dignissimos distinctio placeat! Aliquid maiores, totam debitis
            dicta tempore officia? Nobis porro, architecto pariatur quas maiores
            quod ducimus alias!
          </div>
          {/* <div>
            <button onClick={() => setOpen((prev) => !prev)}>Click</button>
            {open && (
              <div className="children">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellendus amet, incidunt quo vitae totam dolore. Ab explicabo
                quas, magnam minus accusamus voluptatem incidunt soluta porro
                dolorum, ea harum unde vero!
              </div>
            )}
          </div> */}
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
