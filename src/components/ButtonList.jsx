import Button from "./Button";
import { TAGS } from "../../utils/constants";

const ButtonList = () => {
  return (
    <div className="flex">
      {TAGS.map((tag,index)=>(
          <Button key={index} tag={tag}/>
      ))}
    </div>
  )
}

export default ButtonList