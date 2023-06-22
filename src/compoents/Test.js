// import React , {useRef } from 'react';
// import audio from '../audio/hafezRobaee.mp3'


// const Test = () => {
   

//      const timings=[
//         {start:0,stop:0},
//         {start:0,stop:3000},
//         {start:3000,stop:8000},
//         {start:8000,stop:12000},
//         {start:12000,stop:16000}
//      ];

//      const durations=timings.map(t=>t.stop-t.start);

//      const divElement = useRef();
// console.log(divElement.classList)


//      const childArray=[...divElement.current.children];
//      console.log(childArray)

//      childArray.forEach((el,i)=>{
//         const nextWord=childArray[i+1]
//         setTimeout(() => {
//             el.classList.toggle("highlight")
//         }, durations[i]);
//      })


//     return (
//         <section className='text-center m-5 container'>
//             <audio controls>
//                 <source src={audio} />
//             </audio>
//             <div className='row justify-content-center'>
//                 <div className='col-md-8 co-sm-11 col-11'>
//                     <div className="paper paper-dark ">
//                         <div className="tape-section"></div>
//                         <div class="color_white mt-3 w-100 container-poem" ref={divElement}>
//                             <div class="b" id="bn1">
//                                 <div class="m1"><p>جز نقش تو در نظر نیامد ما را</p>
//                                 </div>
//                             <div class="m2">
//                                 <p>جز کوی تو رهگذر نیامد ما را</p></div>
//                                 </div>
//                             <div class="b" id="bn2">
//                                 <div class="m1"><p>خواب ار چه خوش آمد همه را در عهدت</p></div>
//                                 <div class="m2"><p>حقّا که به چشم دَر نیامد ما را</p></div></div>
//                                 </div>
//                         <div className="tape-section"></div>
//                     </div>
//                 </div>
//             </div>


//         </section>
//     );
// };
// export default Test;