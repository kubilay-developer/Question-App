import PropTypes from 'prop-types';
import './StartScreenStyles.css'

function StartScreen({ setCount }) {
    return (
        <div className='start-screen'>
            <h1>Hoş geldiniz!</h1>
            <ul>
                <li>Cevap şıklarından birini seçtikten sonra veya süre dolduğunda otomatik olarak bir sonraki soruya geçeceksiniz.</li>
                <li>Geçmiş sorulara geri dönme şansınız olmayacak, bu yüzden cevaplarınızı dikkatlice seçiniz.</li>
                <li>Testin sonunda, her soruya verdiğiniz yanıtlar ve doğru/yanlış sayılarınız sizinle paylaşılacaktır.</li>
            </ul>
            <h1>Bol şans!</h1>
            <button id="start" onClick={() => setCount(1)}>Teste Başla</button>
        </div>
    )
}

StartScreen.propTypes = {
    setCount: PropTypes.func.isRequired,
};

export default StartScreen