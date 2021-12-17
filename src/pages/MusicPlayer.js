import React from 'react'

const MusicPlayer = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1
        }}>
            <audio
            
                controls="controls"
                onLoadedMetadata={event => console.log(event.target)}
                src={"https://firebasestorage.googleapis.com/v0/b/file-storage-38b52.appspot.com/o/files%2FYou%20Can_t%20Sit%20With%20Us%20-%20Sunmi.mp3?alt=media&token=0fab7de3-9e8c-44f3-9eb0-fb51c5e52652"}
            />
        </div>
    )
}

export default MusicPlayer
