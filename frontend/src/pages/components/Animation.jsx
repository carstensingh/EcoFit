import { motion } from "framer-motion"
import { useEffect } from 'react' 
import "../../index.css"

// using svg text animation generator from https://akashraj9828.github.io/svg-text-animation-generator/
function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor, repeat) {
    let paths = document.querySelectorAll("path")
    let mode = repeat ? 'infinite' : 'forwards'
    for (let i = 0; i < paths.length; i++) {
        const path = paths[i]
        const length = path.getTotalLength();
        path.style["stroke-dashoffset"] = `${length}px`
        path.style["stroke-dasharray"] = `${length}px`
        path.style["stroke"] = `${strokeColor}`;
        path.style["animation-name"] = `toWhite, toGreen`
        path.style["animation-delay"] = `0.1s,3.2s`
        path.style["animation-duration"] = `3s,0.1s`
        path.style["animation-iteration-count"] = `1, infinite`
    }
}

const Animation = () => {
  useEffect(() => {
    setTextAnimation(0.1, 3.5, 1, 'linear', '#f3f3f3', false)

  }, []);

  return (
    <>
    <motion.section
      initial={{ background: '#abbd9a',height: '100vh'}} 
      animate={{height: '0vh'}} 
      transition={{ duration: 1, delay:2.2}} 
      style={{ display: 'flex', zIndex: 1, }}
    >
    </motion.section>
    <motion.div
      style={{
        position: 'absolute',
        top: 0,
        left: 50,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        zIndex: 2,
      }}
    initial={{y:"40vh"}}
    animate={{y:"-40px"}} 
    transition={{y: {duration: 0.8, delay:2.1, ease:"easeIn"}}}>
      <svg width="200" height="200" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" style={{ paddingTop: '30px', transform:"translateX(-8%)"}}>
      <g id="svgGroup" strokeLinecap="round"  transform="translate(100 220)" fillRule="evenodd" fontSize="9pt" strokeWidth="0.25mm" fill="#f3f3f3" style={{ strokeWidth:"0.25mm"}}>  
        <path className="E" d="M 0 1.95 L 66.225 1.95 L 66.225 13.8 L 14.625 13.8 L 14.625 49.5 L 56.4 49.5 L 56.4 60.9 L 14.625 60.9 L 14.625 97.575 L 66.225 97.575 L 66.225 109.425 L 0 109.425 L 0 1.95 Z" id="0" vectorEffect="non-scaling-stroke" fill="transparent"/>
        <path className="c" d="M 140.4 42.15 L 136.875 46.95 Q 136.404 47.598 135.933 48.014 A 4.136 4.136 0 0 1 135.675 48.225 A 1.993 1.993 0 0 1 135.075 48.525 Q 134.801 48.612 134.468 48.648 A 4.737 4.737 0 0 1 133.95 48.675 A 3.176 3.176 0 0 1 132.911 48.489 Q 132.241 48.258 131.513 47.738 A 25.063 25.063 0 0 0 130.428 47.008 Q 129.934 46.693 129.371 46.36 A 50.805 50.805 0 0 0 128.175 45.675 A 22.177 22.177 0 0 0 126.238 44.727 Q 124.887 44.14 123.263 43.613 A 17.437 17.437 0 0 0 120.593 42.988 Q 119.229 42.774 117.659 42.706 A 34.535 34.535 0 0 0 116.175 42.675 Q 110.625 42.675 106.35 44.663 Q 102.075 46.65 99.187 50.4 A 23.803 23.803 0 0 0 96.135 55.703 A 30.446 30.446 0 0 0 94.838 59.475 A 40.053 40.053 0 0 0 93.655 65.869 A 52.547 52.547 0 0 0 93.375 71.4 A 51.728 51.728 0 0 0 93.721 77.531 Q 94.107 80.763 94.924 83.574 A 32.228 32.228 0 0 0 94.95 83.663 A 31.202 31.202 0 0 0 96.707 88.311 A 23.272 23.272 0 0 0 99.375 92.663 Q 102.225 96.3 106.312 98.213 A 20.309 20.309 0 0 0 112.711 99.974 A 25.111 25.111 0 0 0 115.5 100.125 A 33.663 33.663 0 0 0 118.781 99.975 Q 120.314 99.824 121.624 99.523 A 15.607 15.607 0 0 0 123.525 98.963 A 31.153 31.153 0 0 0 125.996 97.935 Q 127.17 97.383 128.146 96.782 A 16.983 16.983 0 0 0 128.775 96.375 A 52.992 52.992 0 0 0 130.245 95.343 Q 130.954 94.826 131.549 94.348 A 25.21 25.21 0 0 0 132.225 93.788 A 5.816 5.816 0 0 1 133.153 93.126 Q 133.748 92.789 134.344 92.679 A 3.183 3.183 0 0 1 134.925 92.625 Q 136.65 92.625 137.475 93.9 L 141.225 98.775 Q 136.275 104.85 128.85 107.663 Q 121.425 110.475 113.175 110.475 A 33.992 33.992 0 0 1 102.858 108.936 A 31.44 31.44 0 0 1 99.937 107.85 Q 93.825 105.225 89.325 100.238 A 33.696 33.696 0 0 1 84.141 92.503 A 42.313 42.313 0 0 1 82.238 87.975 A 43.643 43.643 0 0 1 80.145 79.15 A 58.136 58.136 0 0 1 79.65 71.4 A 53.385 53.385 0 0 1 80.573 61.304 A 45.339 45.339 0 0 1 82.012 55.725 Q 84.375 48.525 88.913 43.313 A 31.221 31.221 0 0 1 99.917 35.267 A 35.851 35.851 0 0 1 100.125 35.175 A 34.295 34.295 0 0 1 109.107 32.679 A 44.889 44.889 0 0 1 115.425 32.25 A 41.633 41.633 0 0 1 122.815 32.877 A 31.794 31.794 0 0 1 129.525 34.838 Q 135.675 37.425 140.4 42.15 Z" id="1" vectorEffect="non-scaling-stroke" fill="transparent"/>
        <path className="o" d="M 194.473 33.08 A 43.103 43.103 0 0 0 185.85 32.25 A 45.678 45.678 0 0 0 180.682 32.535 A 36.512 36.512 0 0 0 170.813 35.025 Q 164.1 37.8 159.375 42.9 A 32.321 32.321 0 0 0 156.137 47.026 A 37.149 37.149 0 0 0 152.1 55.238 A 43.048 43.048 0 0 0 150.27 62.394 A 54.106 54.106 0 0 0 149.55 71.4 Q 149.55 80.4 152.1 87.6 A 40.547 40.547 0 0 0 153.144 90.253 A 34.072 34.072 0 0 0 159.375 99.9 Q 164.1 105 170.812 107.738 A 35.373 35.373 0 0 0 177.001 109.61 Q 181.113 110.463 185.72 110.475 A 50.484 50.484 0 0 0 185.85 110.475 A 46.201 46.201 0 0 0 191.14 110.18 A 36.863 36.863 0 0 0 200.887 107.738 Q 207.6 105 212.287 99.9 A 32.277 32.277 0 0 0 215.376 95.963 A 36.893 36.893 0 0 0 219.487 87.6 A 43.104 43.104 0 0 0 221.312 80.329 A 55.421 55.421 0 0 0 222 71.4 A 57.185 57.185 0 0 0 221.647 64.944 A 45.01 45.01 0 0 0 219.488 55.238 A 40.37 40.37 0 0 0 218.284 52.174 A 33.664 33.664 0 0 0 212.288 42.9 Q 207.6 37.8 200.888 35.025 A 35.102 35.102 0 0 0 194.473 33.08 Z M 185.85 100.05 A 26.534 26.534 0 0 0 192.601 99.243 A 17.657 17.657 0 0 0 202.65 92.513 A 25.742 25.742 0 0 0 206.492 84.617 Q 207.56 81.084 207.96 76.833 A 57.208 57.208 0 0 0 208.2 71.475 A 53.964 53.964 0 0 0 207.658 63.577 Q 207.025 59.303 205.651 55.831 A 24.529 24.529 0 0 0 202.65 50.325 A 17.93 17.93 0 0 0 191.119 43.224 A 27.832 27.832 0 0 0 185.85 42.75 Q 180.2 42.75 176.024 44.666 A 17.874 17.874 0 0 0 175.95 44.7 Q 171.75 46.65 168.937 50.325 Q 166.125 54 164.737 59.363 A 42.147 42.147 0 0 0 163.655 65.452 A 56.859 56.859 0 0 0 163.35 71.475 A 56.346 56.346 0 0 0 163.676 77.68 A 41.365 41.365 0 0 0 164.738 83.55 A 28.566 28.566 0 0 0 166.416 88.313 A 21.651 21.651 0 0 0 168.937 92.513 Q 171.75 96.15 175.95 98.1 A 20.327 20.327 0 0 0 181.11 99.67 A 28.146 28.146 0 0 0 185.85 100.05 Z" id="2" vectorEffect="non-scaling-stroke" fill="transparent"/>
        <path className="f" d="M 240.6 1.95 L 306.825 1.95 L 306.825 13.8 L 255.225 13.8 L 255.225 51.375 L 299.325 51.375 L 299.325 63.225 L 255.225 63.225 L 255.225 109.425 L 240.6 109.425 L 240.6 1.95 Z" id="3" vectorEffect="non-scaling-stroke" fill="transparent"/>
        <path className="i" d="M 324.9 33.45 L 338.25 33.45 L 338.25 109.425 L 324.9 109.425 L 324.9 33.45 Z M 341.25 9.6 Q 341.25 11.55 340.462 13.238 Q 339.675 14.925 338.362 16.238 Q 337.05 17.55 335.325 18.3 Q 333.6 19.05 331.65 19.05 A 8.912 8.912 0 0 1 328.331 18.434 A 8.575 8.575 0 0 1 328.012 18.3 Q 326.325 17.55 325.012 16.238 Q 323.7 14.925 322.95 13.238 A 8.826 8.826 0 0 1 322.201 9.722 A 10.077 10.077 0 0 1 322.2 9.6 Q 322.2 7.65 322.95 5.888 Q 323.7 4.125 325.012 2.813 Q 326.325 1.5 328.012 0.75 A 8.826 8.826 0 0 1 331.528 0.001 A 10.077 10.077 0 0 1 331.65 0 Q 333.6 0 335.325 0.75 Q 337.05 1.5 338.362 2.813 Q 339.675 4.125 340.462 5.888 Q 341.25 7.65 341.25 9.6 Z" id="4" vectorEffect="non-scaling-stroke" fill="transparent"/>
        <path className="t" d="M 366.15 91.125 L 366.15 44.625 L 357 44.625 Q 355.8 44.625 354.975 43.913 A 2.219 2.219 0 0 1 354.319 42.898 Q 354.15 42.38 354.15 41.7 L 354.15 36.375 L 366.6 34.8 L 369.675 11.325 Q 369.825 10.2 370.65 9.488 A 2.889 2.889 0 0 1 372.095 8.827 A 3.984 3.984 0 0 1 372.75 8.775 L 379.5 8.775 L 379.5 34.95 L 401.25 34.95 L 401.25 44.625 L 379.5 44.625 L 379.5 90.225 A 15.755 15.755 0 0 0 379.705 92.857 Q 379.944 94.264 380.461 95.374 A 6.861 6.861 0 0 0 381.825 97.35 A 7.845 7.845 0 0 0 386.71 99.618 A 10.693 10.693 0 0 0 387.825 99.675 Q 389.925 99.675 391.462 99.113 A 18.617 18.617 0 0 0 392.813 98.561 Q 393.527 98.234 394.125 97.875 A 38.272 38.272 0 0 0 394.921 97.385 Q 395.311 97.138 395.65 96.908 A 20.206 20.206 0 0 0 396.038 96.638 A 4.29 4.29 0 0 1 396.489 96.353 Q 396.999 96.078 397.418 96.075 A 1.278 1.278 0 0 1 397.425 96.075 A 1.766 1.766 0 0 1 398.505 96.456 Q 398.926 96.772 399.3 97.35 L 403.2 103.725 A 24.042 24.042 0 0 1 396.94 107.917 A 28.641 28.641 0 0 1 394.875 108.788 Q 390 110.625 384.825 110.625 A 25.859 25.859 0 0 1 379.367 110.084 Q 375.841 109.323 373.202 107.489 A 14.764 14.764 0 0 1 370.987 105.6 Q 366.15 100.575 366.15 91.125 Z" id="5" vectorEffect="non-scaling-stroke" fill="transparent"/>
        <path id = "6" className="leaf" transform="translate(500 -80)  scale(0.5 -0.5) rotate(180)" fill="transparent"
          d="
          M185.471375,190.429260 
          C179.949142,204.917969 175.759857,219.570709 166.868698,232.131104 
          C152.600067,252.288208 132.815933,263.266327 108.784264,267.406158 
          C95.352913,269.719879 81.969604,269.893402 68.556999,267.518677 
          C65.219925,266.927856 63.982094,268.304382 63.177258,271.588501 
          C59.850338,285.163910 57.432190,298.906097 55.049992,312.659821 
          C54.381489,316.519440 52.792110,319.413727 48.342785,319.130524 
          C44.703880,318.898865 42.990417,315.822693 43.614891,310.813751 
          C45.467815,295.951263 48.630352,281.334656 52.320122,266.841827 
          C53.213474,263.332886 52.765240,261.197479 49.861370,258.732056 
          C32.457561,243.956039 20.196512,225.813477 16.464428,202.977081 
          C13.494318,184.803192 16.436298,167.218292 24.318359,150.484436 
          C37.196735,123.143242 58.106384,103.375008 83.369308,87.737648 
          C105.513908,74.030479 129.511169,65.076683 154.925491,59.455685 
          C182.442856,53.369545 210.149902,51.400223 238.205536,53.645424 
          C241.355240,53.897484 244.532654,53.786018 247.694550,53.910530 
          C249.172729,53.968731 250.944260,53.821793 251.692184,55.389175 
          C252.517319,57.118397 250.933685,58.117809 249.891800,59.111038 
          C238.557175,69.916405 229.859879,82.642250 222.458725,96.355606 
          C212.462784,114.876747 205.161636,134.519363 198.127396,154.275452 
          C193.888428,166.180786 189.768372,178.128464 185.471375,190.429260 
          M132.503952,116.191696 
          C131.786057,110.418716 131.145142,104.634811 130.327316,98.876022 
          C129.595108,93.720123 131.467957,90.093590 135.334946,89.613144 
          C138.867935,89.174194 141.739929,92.327354 142.102295,97.276253 
          C142.341110,100.537727 142.462982,103.789787 144.073318,107.111244 
          C149.147186,103.128029 153.880585,99.211632 158.826416,95.584908 
          C163.928070,91.843910 169.182465,88.302773 174.468719,84.824188 
          C180.408020,80.915871 183.844849,80.936371 186.169128,84.620789 
          C188.369446,88.108704 186.931610,90.585861 180.848099,94.586380 
          C173.688049,99.294838 166.542969,104.048172 159.953323,109.824562 
          C160.705704,110.383179 160.959702,110.734993 161.199615,110.725639 
          C165.361984,110.563347 169.454224,111.331284 169.831741,116.174004 
          C170.218124,121.130371 166.152832,122.376289 162.050903,122.642700 
          C148.106155,123.548393 135.906082,127.557625 127.760254,140.099869 
          C124.207726,145.569733 119.194519,150.043472 115.738304,155.785568 
          C117.600540,156.668228 118.793159,155.803574 120.033546,155.483337 
          C126.316666,153.861130 132.573166,152.133270 138.871246,150.572540 
          C142.305298,149.721558 144.928406,151.143494 145.947327,154.445908 
          C146.977356,157.784302 145.450882,160.295059 142.224960,161.645584 
          C140.999878,162.158463 139.723572,162.574509 138.439026,162.915710 
          C128.637970,165.519119 118.857903,168.211380 109.006699,170.610764 
          C105.648552,171.428680 103.487297,173.170273 101.728432,176.056976 
          C95.564331,186.173721 90.176033,196.693985 85.211319,207.428925 
          C83.951653,210.152618 82.259666,212.836899 81.865936,216.431564 
          C88.737038,214.976059 95.078407,213.730667 101.371826,212.277588 
          C111.890549,209.848953 122.379631,207.291763 132.879135,204.780075 
          C137.101456,203.770020 140.823456,205.560898 141.511078,209.226822 
          C142.302490,213.446106 139.563446,215.216049 136.073441,216.269852 
          C135.435669,216.462418 134.789886,216.632996 134.140564,216.782242 
          C115.994766,220.952789 97.854973,225.150101 79.691101,229.240463 
          C77.799294,229.666473 76.010117,230.036011 75.268501,231.966644 
          C72.363472,239.529160 69.862152,247.220718 67.775238,255.307709 
          C69.324638,255.649185 70.430649,255.944778 71.554649,256.132751 
          C84.859283,258.357941 98.045387,257.809692 111.218002,254.863403 
          C136.088455,249.300705 154.573959,235.783554 164.663452,211.995026 
          C173.830887,190.380478 180.695633,167.908478 188.694855,145.857742 
          C198.704376,118.265388 209.177460,90.896500 227.158249,67.200089 
          C227.573212,66.653236 227.816696,66.063713 226.994003,65.049973 
          C207.502075,64.731735 187.840500,65.297264 168.215637,68.857307 
          C144.596680,73.141907 122.011795,80.141304 100.747612,91.265892 
          C76.887070,103.748787 56.259300,120.073669 41.621014,143.010910 
          C20.428398,176.218338 21.424519,214.956329 51.050850,243.762146 
          C52.768974,245.432709 53.986378,247.771439 57.109058,248.334976 
          C59.612392,240.936646 62.116512,233.745010 64.427948,226.491974 
          C64.798332,225.329758 64.508224,223.840561 64.183258,222.591003 
          C60.334091,207.790497 56.416050,193.007919 52.525208,178.218246 
          C50.663727,171.142471 48.720791,164.085800 47.013844,156.972702 
          C46.180576,153.500381 47.256973,150.445007 50.967407,149.461395 
          C54.301579,148.577515 56.785725,150.179855 58.038139,153.462402 
          C58.393826,154.394638 58.777588,155.325165 59.025742,156.288086 
          C61.844872,167.227325 64.588783,178.186218 67.464119,189.110580 
          C68.844925,194.356720 70.462006,199.540665 72.143555,205.344589 
          C73.054405,204.262756 73.591988,203.838898 73.851212,203.284836 
          C79.503540,191.203568 85.749733,179.440536 92.767242,168.096848 
          C94.071640,165.988297 93.610008,164.041260 93.018997,161.890305 
          C90.068298,151.151413 87.220406,140.384308 84.324097,129.630432 
          C83.321884,125.909271 84.742996,123.216049 88.258553,122.180626 
          C92.004181,121.077438 94.260155,123.279259 95.310860,126.736259 
          C96.421036,130.388977 97.353905,134.095261 98.436394,137.756805 
          C99.769363,142.265625 101.176918,146.752411 102.758171,151.921967 
          C110.229172,143.091949 117.075600,135.167664 123.715347,127.073814 
          C126.549995,123.618355 130.601166,121.220139 132.503952,116.191696 
          z"/>
      </g></svg></motion.div>  
      
    </>
  );
};

export default Animation;