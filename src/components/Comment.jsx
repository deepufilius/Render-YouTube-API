import {USER_ICON} from "../../utils/constants";

const Comment = ({data}) => {
    const {name,text} = data;
  return (
    <div className="flex items-center bg-gray-100 p-1 rounded-lg my-1">
        <img className="w-10 h-10" src={USER_ICON} alt="user-pic" />
        <div className="px-3">
            <p className="font-bold">{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Comment