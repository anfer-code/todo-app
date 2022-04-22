import TodoIcon from '../TodoIcon'

export default function IconDelete ({ handlerClick }) {
  return (
    <TodoIcon
      color='gray'
      handlerClick={handlerClick}
      type='delete'
    />
  )
};
