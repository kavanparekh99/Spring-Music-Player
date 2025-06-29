import { useState, useEffect } from 'react';
import pre from '../Images/preloader.json'
import Lottie from 'lottie-react';
import App from '../App';
import './Preloader.css'
function Preloader() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 1700)
    }, [])
    return (

        loading ?
            <div className='pre'>
                <Lottie className="preloader" animationData={pre} color="#83ce89" />
            </div>

            :
            //Rest Code
            <App />



    );
}
export default Preloader;