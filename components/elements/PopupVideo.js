import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/css/modal-video.css"

export default function VideoPopup({ style }) {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            {style === 1 &&
                <a onClick={() => setOpen(true)} className="play-btn popup-video" data-aos="fade-left" data-aos-delay={400}><i className="fas fa-play" /> <span>App  Video</span></a>
            }
            {style === 2 &&
                <a onClick={() => setOpen(true)} className="play-btn popup-video"><i className="fas fa-play" />Watch Video</a>
            }
            {style === 3 &&
                <a onClick={() => setOpen(true)} className="play-btn popup-video"><i className="fas fa-play" /></a>
            }
          <ModalVideo
                isOpen={isOpen}
                onClose={() => setOpen(false)}
                ariaHideApp={false}
                channel="custom"
            >
                <video width="100%" height="auto" autoPlay  controls onEnded={() => setOpen(false)}>
                    <source src="VASCO-VIDEO.mp4" type="video/mp4" />
                    Tu navegador no soporta la etiqueta de video.
                </video>
            </ModalVideo>
        </>
    )
}