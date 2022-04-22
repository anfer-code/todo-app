import { AiOutlineCheckCircle, AiFillDelete } from 'react-icons/ai'
import './style.css'

const typeOfIcon = {
  check: (color, handlerClick) => <AiOutlineCheckCircle color={color} onClick={handlerClick} />,
  delete: (color, handlerClick) => <AiFillDelete color={color} onClick={handlerClick} />
}

export default function TodoIcon ({ color, type, handlerClick }) {
  return (
    <span
      className={`Icon ${type} `}
    >
      {typeOfIcon[type](color, handlerClick)}
    </span>
  )
};
