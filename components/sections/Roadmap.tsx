import { useRef, useLayoutEffect } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


const Roadmap = () => {
//     const revealRefs  = useRef<HTMLHeadingElement[]>([]);
//   revealRefs.current = [];
//   gsap.registerPlugin(ScrollTrigger);

//   const addToRefs = (el: HTMLHeadingElement) => {
//     if (el && !revealRefs.current.includes(el)) {
//       revealRefs.current.push(el);
//     }
//   };

//   useLayoutEffect(() => {
//     let t1 = gsap.timeline();
//     revealRefs.current.forEach((el, index) => {
//       t1.fromTo(
//         el.childNodes[0],
//         {
//           y: "0",
//         },
//         {
//           y: "-30%",

//           scrollTrigger: {
//             id: `section-${index + 1}`,
//             trigger: el,
//             start: "top center+=200px",
//             end: "bottom center",
//             scrub: true,
//             // markers:true,
//           },
//         }
//       );
//     });

    // return () => {
    //     if (t1) t1.kill();
    //   };
    // }, []);

  return (
    <div className="min-h-screen w-screen relative inline-block overflow-hidden bg-slate-500">
        <h1>Roadmap</h1>

        <div className="w-[70%] height-[200vh] bg-slate-400 mx-0 my-auto flex justify-center items-center relative">
            <div className="flex justify-center items-center">
                {/* svg of middle line animation */}
            </div>

            <ul className="list-none w-full h-full flex flex-col justify-center items-center bg-slate-300 text-black">
                <li className="text-black w-full h-full flex">&nbsp;</li>
                {/* ref={() => addToRefs()} */}
                <li className="text-black w-full h-full flex" >
                    <div className="w-[40%] h-fit p-4 border-4">
                        <p className="h-fit bg-slate-600 p-4 relative border"><span className="block text-2xl">Grand Opening</span><span className="block text-sm weight-md mx-1 my-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto aperiam placeat harum magnam distinctio.</span></p>
                    </div>
                </li>
                <li className="text-black w-full h-full flex">
                    <div className="w-[40%] h-fit p-4 border-4">
                        <p className="h-fit bg-slate-600 p-4 relative border"><span className="block text-2xl">Great Benefits</span><span className="block text-sm weight-md mx-1 my-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto aperiam placeat harum magnam distinctio.</span></p>
                    </div>
                </li>
                <li className="text-black w-full h-full flex">
                    <div className="w-[40%] h-fit p-4 border-4">
                        <p className="h-fit bg-slate-600 p-4 relative border"><span className="block text-2xl">Early Access</span><span className="block text-sm weight-md mx-1 my-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto aperiam placeat harum magnam distinctio.</span></p>
                    </div>
                </li>
                <li className="text-black w-full h-full flex">
                    <div className="w-[40%] h-fit p-4 border-4">
                        <p className="h-fit bg-slate-600 p-4 relative border"><span className="block text-2xl">New Merch</span><span className="block text-sm weight-md mx-1 my-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto aperiam placeat harum magnam distinctio.</span></p>
                    </div>
                </li>
                <li className="text-black w-full h-full flex">
                    <div className="w-[40%] h-fit p-4 border-4">
                        <p className="h-fit bg-slate-600 p-4 relative border"><span className="block text-2xl">Holders Ranking</span><span className="block text-sm weight-md mx-1 my-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto aperiam placeat harum magnam distinctio.</span></p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Roadmap