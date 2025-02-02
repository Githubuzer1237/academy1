
import { useRef } from 'react';
import s from './Hero.module.scss';

const Hero = () => {
  const buttonRef = useRef(null);
  const handleButtonClick = () => {
    const button = buttonRef.current;
    if (button) {
      button.classList.add(s.transformed);
      
    
      setTimeout(() => {
        button.style.display = 'none';
      }, 2000); 
    }
  };

  return (
 


    <div className={s.container}>

      <div className={s.wrapper}>
        <img className={s.anal} src="/itacademylogo.svg" alt="" />
        
        <div className={s.text}>
          <p>
            IT курсы в Ташкенте, нам доверяют уже больше 5 лет, тут вас ждет 
            <button
              className={s.playful_btn}
              onClick={handleButtonClick}
              ref={buttonRef}
            >
              ВЕСЕЛЫЙ
            </button> <br />
            коллектив, а также лучшие курсы программирования в Ташкенте.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Hero;
