
type Shadow = 'always' | 'never' | 'hover'

export interface CardProps {
  header?: string;
  footer?: string;
  shadow?: Shadow;
}
