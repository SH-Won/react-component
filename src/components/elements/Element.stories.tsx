import { Colors } from '@/index'
import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import Element from '../elements/Element'
import { bigElements, mediumElements, smallElements } from '@/const/IconElement'
const meta: Meta<typeof Element> = {
  title: 'icon',
  component: Element,
}
export default meta
type Story = StoryObj<typeof Element>

export const big_size_icon: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        gap: '20px',
        // height: '100vh',
      }}
    >
      {bigElements.map((element) => (
        <Element
          key={element.name}
          name={element.name}
          size={element.size}
          color={element.color}
        />
      ))}
    </div>
  ),
  args: {
    color: '',
  },
}
export const medium_size_icon: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        gap: '20px',
      }}
    >
      {mediumElements.map((element) => (
        <Element
          key={element.name}
          name={element.name}
          size={element.size}
          color={element.color}
        />
      ))}
    </div>
  ),
  args: {
    color: '',
  },
}
export const small_size_icon: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        gap: '20px',
        height: '100vh',
      }}
    >
      {smallElements.map((element) => (
        <Element
          key={element.name}
          name={element.name}
          size={element.size}
          color={element.color}
        />
      ))}
    </div>
  ),
  args: {
    color: '',
  },
}
