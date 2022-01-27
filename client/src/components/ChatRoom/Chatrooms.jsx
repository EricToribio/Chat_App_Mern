
import React from 'react';


export const Chatrooms = ({ msg, username }) => {


	return (
		<div className='card col-4 mx-auto p-4 overflow-auto chat_window'>
    		{msg.map((messageContent) => {
				let classStyle = ''
				{
					messageContent.author === username ?
						classStyle += "justify-content-end "
						: classStyle += "justify-content-start "
        }
				return (
					<div
						id={username === messageContent.author ? "you" : "other"}
					>
						<div>
							<div className={`d-flex ${classStyle} `}>
							{
							messageContent.author === username ?
								<p className=' bg-success rounded-pill px-3 py-2'> {messageContent.msg}</p>
								: <div >
									<p>{messageContent.author} </p>
									<p className='bg-info rounded-pill px-3 py-2 mt-2'>{messageContent.msg}</p>
								</div>
							}
							</div>
							
						</div>
					</div>
				);
			})}
		</div>
	)
}
