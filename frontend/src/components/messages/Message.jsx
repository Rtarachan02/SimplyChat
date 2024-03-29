// import { useAuthContext } from "../../context/AuthContext";
// import { extractTime } from "../../utils/extractTime";
// import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
	return (
		<div className={`chat chat-end`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src="https://www.iconfinder.com/icons/1821265/conversation_head_speaking_speech_talking_icon"/>
				</div>
			</div>
			<div className={`chat-bubble text-white bg-blue-500`}>Hello Anna Whatsapp?</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:45</div>
		</div>
	);
};
export default Message;