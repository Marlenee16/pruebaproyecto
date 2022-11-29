import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
            <p>Somos la mejor nutricion para cualquier salud <br/>
            </p>


          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/profile.php?id=100087945685184&sk=about'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link google'
              to='/'
              target='_blank'
              aria-label='Google'
            >
              <i class="fab fa-google"></i>
            </Link>
          </div>
          <small class='website-rights'>2022 © Healthy Life es una marca registrada de Nutricion. | Todos los derechos reservados</small>

        </div>

      </section>
    </div>
  );
}

export default Footer;
