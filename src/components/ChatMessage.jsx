import { USER_ICON } from "../../utils/constants"

const ChatMessage = ({name, message}) => {
  return (
    <div className="flex items-center space-x-2 shadow-md bg-gray-50 rounded-md my-1">
        <img src={USER_ICON} alt="user-icon" className="w-8 h-8 ml-0.5"/>
        <span className="font-bold">{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage