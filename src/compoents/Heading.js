import React from 'react';
import parvin from '../images/etesami.jpg'
import saadi from '../images/saadi.jpg'
import moulavi from '../images/moulavi.jpg'
import attar from '../images/attar.jpg'
const Heading = () => {
    return (
        <section id='heading' className='mt-3 position-relative overflow-hidden '>
             <img id='img-head1' className='position-absolute opacity-50'  data-aos="fade-up" data-duration="1000" src={parvin} alt='پروین اعتصامی' />
             <img id='img-head2' className='position-absolute opacity-50'  data-aos="fade-up" data-duration="1000" src={saadi} alt='سعدی' />
             <img id='img-head3' className='position-absolute opacity-50'  data-aos="fade-up" data-duration="1000" src={moulavi} alt='مولوی' />
             <img id='img-head4' className='position-absolute opacity-50'  data-aos="fade-up" data-duration="1000" src={attar} alt='عطار' />"
        
             <div className='text-center position-absolute div-heading'  data-aos="fade-up" data-duration="1000">
             <h1 className='color_yellow heading p-0 m-0'>ققنوس</h1>
             <h2  className='color_yellow heading p-0 m-0'>دردانه های ادب پارسی</h2>
           </div>
        </section>
    );
};

export default Heading;