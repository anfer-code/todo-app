import TodoIcon from '../TodoIcon'

export default function IconCheck ({ completed, handlerClick }) {
  return (
    <TodoIcon
      color={completed ? '#00CECB' : 'gray'}
      handlerClick={handlerClick}
      type='check'
    />
  )
};
