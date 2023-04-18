export interface Element {
  color : string
  size : 'small' | 'medium' | 'big' | 'custom'
  name : ElementName
}

export type ElementName = 
 | 'Adult'
 | 'ArrowLeft'
 | 'Caution'
 | 'Check'
 | 'Close'
 | 'Depth'
 | 'Gear'
 | 'Hamburger'
 | 'Plus'
 | 'Right'
 | 'Search'
 | 'Setting'