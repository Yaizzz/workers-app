
//propsChildren ile Card ile sarmaladığımızı aldık
const Card = (props) => {
  return (
    <div className={`bg-white p-5 rounded-xl ${props.className}`}>
        {props.children}
    </div>
  )
}

export default Card