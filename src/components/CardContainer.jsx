import Card from "./Card"


const CardContainer = ({users}) => {
  return (
    <div className="row m-auto d-flex justify-content-center gap-3 ">
      {users.map((card,index)=>{
        return(
          <Card key={index} card={card} />
        )
      })}
    </div>
  )
}

export default CardContainer