import React from 'react'

const MyMessage = ({ message }) => {
    if (message?.attachments?.length > 0) {       //To check whether message is a txt or image file
        console.log('image')
        return (
            <img
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{ float: 'right' }}
            />
        )
    }
    console.log('text')
    return (
        <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor:'#3B2A50'}}>
            {message.text}
        </div>
    )
}

export default MyMessage