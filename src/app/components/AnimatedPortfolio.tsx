import { motion } from 'motion/react';
import { useState } from 'react';
import svgPaths from "../../imports/svg-nwkjyu3y3z";
import imgFrame1 from "figma:asset/c926241450618e3253d8d170b6684d71a3041531.png";
import imgProfile from "figma:asset/cedbeb2336539903367b06e92e58be31d8ce65a4.png";

function AvailableForWorkBadge() {
  return (
    <motion.div 
      className="h-[55px] relative rounded-[50px] shrink-0 w-[355px]" 
      data-name="Available-for-work Badge" 
      style={{ backgroundImage: "linear-gradient(-12.0963deg, rgba(0, 0, 0, 0.56) 41.161%, rgba(255, 255, 255, 0.114) 212.24%)" }}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      <div className="content-stretch flex gap-[15px] items-center justify-center overflow-clip px-[35px] py-[9px] relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[25px]">
          <div className="absolute inset-[-28.4%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.2 39.2">
              <g filter="url(#filter0_f_1_114)" id="Ellipse 56">
                <circle cx="19.6" cy="19.6" fill="var(--fill-0, #00FF62)" r="12.5" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="39.2" id="filter0_f_1_114" width="39.2" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_1_114" stdDeviation="3.55" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <p className="font-['Yekan_Bakh:Thin',sans-serif] leading-[normal] not-italic relative shrink-0 text-[30px] text-center text-white">Available for work</p>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[50px]" />
    </motion.div>
  );
}

function Left() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-px px-[24px] py-[30px] top-0 w-[493px]" data-name="Left">
      <AvailableForWorkBadge />
    </div>
  );
}

function EMail({ className }: { className?: string }) {
  return (
    <div className={className || "relative shrink-0 size-[30px]"} data-name="E-mail">
      <div className="absolute inset-[12.5%]">
        <div className="absolute inset-[-4.44%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.5 24.5">
            <path d={svgPaths.p2b4c3ac0} id="Ellipse 54" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.33%]">
        <div className="absolute inset-[-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <circle cx="6" cy="6" id="Ellipse 55" r="5" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_12.5%_33.33%_66.67%]">
        <div className="absolute inset-[-11.43%_-16%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25 10.75">
            <path d={svgPaths.pd4f3280} id="Vector 97" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Email() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="backdrop-blur-[9.5px] bg-[rgba(0,0,0,0.5)] content-stretch flex items-center justify-center max-h-[60px] max-w-[60px] min-h-[20px] min-w-[20px] overflow-clip p-[10px] relative rounded-[15px] shrink-0 size-[60px] cursor-pointer" 
      data-name="Email"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.7)" }}
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      style={{ transitionDelay: '0.9s' }}
    >
      <motion.div
        animate={{ scale: isHovered ? 1.2 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <EMail />
      </motion.div>
    </motion.div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Group">
          <path d={svgPaths.pd451680} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1fe19b00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1d412c80} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Ig() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="backdrop-blur-[9.5px] bg-[rgba(0,0,0,0.5)] content-stretch flex items-center justify-center max-h-[60px] max-w-[60px] min-h-[20px] min-w-[20px] overflow-clip p-[10px] relative rounded-[15px] shrink-0 size-[60px] cursor-pointer" 
      data-name="IG"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.7)" }}
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      style={{ transitionDelay: '0.7s' }}
    >
      <motion.div
        animate={{ scale: isHovered ? 1.2 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <Group />
      </motion.div>
    </motion.div>
  );
}

function Tg() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="max-h-[60px] max-w-[60px] min-h-[20px] min-w-[20px] relative shrink-0 size-[60px] cursor-pointer" 
      data-name="TG"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      style={{ transitionDelay: '0.5s' }}
    >
      <motion.div
        animate={{ scale: isHovered ? 1.2 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
          <g data-figma-bg-blur-radius="19" id="Frame 6">
            <rect fill="var(--fill-0, black)" fillOpacity="0.5" height="60" rx="15" width="60" />
            <path d={svgPaths.p24db2b10} fill="var(--fill-0, #FEFFFC)" id="Vector" />
          </g>
          <defs>
            <clipPath id="bgblur_0_1_124_clip_path" transform="translate(19 19)">
              <rect height="60" rx="15" width="60" />
            </clipPath>
          </defs>
        </svg>
      </motion.div>
    </motion.div>
  );
}

function Github() {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="github">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="github">
          <path clipRule="evenodd" d={svgPaths.p248f9100} fill="var(--fill-0, white)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function GitHub() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="backdrop-blur-[9.5px] bg-[rgba(0,0,0,0.5)] content-stretch flex items-center justify-center max-h-[60px] max-w-[60px] min-h-[20px] min-w-[20px] overflow-clip p-[10px] relative rounded-[15px] shrink-0 size-[60px] cursor-pointer" 
      data-name="GitHub"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.7)" }}
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      style={{ transitionDelay: '0.3s' }}
    >
      <motion.div
        animate={{ scale: isHovered ? 1.2 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <Github />
      </motion.div>
    </motion.div>
  );
}

function Right() {
  return (
    <div className="absolute content-stretch flex gap-[55px] h-[123px] items-center justify-center left-[734px] px-[30px] py-[31px] top-0 w-[496px]" data-name="Right">
      <GitHub />
      <Tg />
      <Ig />
      <Email />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute h-[123px] left-px overflow-clip top-[97px] w-[1230px]" data-name="Header">
      <Left />
      <Right />
    </div>
  );
}

function Name() {
  return (
    <motion.div 
      className="relative shrink-0 w-full" 
      data-name="Name"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center leading-[normal] not-italic px-[54px] relative w-full">
          <p className="font-['Yekan_Bakh:Thin',sans-serif] relative shrink-0 text-[24px] text-white">my name is</p>
          <motion.p
            className="h-[67px] relative shrink-0 text-[64px] w-[171px] whitespace-pre-wrap font-['Yekan_Bakh:ExtraBlack',sans-serif] rotating-gradient"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Ehsan
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

function JobTitle() {
  return (
    <motion.div 
      className="content-stretch flex items-center justify-between leading-[normal] not-italic overflow-clip px-[9px] py-[5px] relative shrink-0 text-[30px] text-center text-white w-[267px]" 
      data-name="Job Title"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <p className="font-['Yekan_Bakh:Bold',sans-serif] relative shrink-0 shine-text">Backend</p>
      <p className="font-['Yekan_Bakh:Thin',sans-serif] relative shrink-0">Developer</p>
    </motion.div>
  );
}

function HeaderTexts() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[280px]" data-name="Header Texts">
      <Name />
      <JobTitle />
    </div>
  );
}

function Description() {
  return (
    <motion.div 
      className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" 
      data-name="Description"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <p className="font-['Yekan_Bakh:Thin',sans-serif] h-[157px] leading-[normal] not-italic overflow-hidden relative shrink-0 text-[24px] text-center text-ellipsis text-white w-[678px] whitespace-pre-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
    </motion.div>
  );
}

function SuggestionButton({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div 
      className="backdrop-blur-[9.5px] bg-[rgba(0,0,0,0.2)] h-[30px] max-h-[60px] min-h-[20px] min-w-[20px] relative rounded-[50px] shrink-0 w-[80px] cursor-pointer" 
      data-name="Suggestion-Button"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.4)" }}
    >
      <div className="content-stretch flex items-center justify-center max-h-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip px-[10px] relative rounded-[inherit] size-full">
        <p className="font-['Yekan_Bakh:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white">About Me</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(55,55,55,0.6)] border-solid inset-0 pointer-events-none rounded-[50px]" />
    </motion.div>
  );
}

function SuggestionBox() {
  return (
    <div className="h-[45px] relative rounded-tl-[15px] rounded-tr-[15px] shrink-0 w-full" data-name="Suggestion-Box">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[5px] relative size-full">
          <SuggestionButton delay={1.0} />
          <SuggestionButton delay={1.1} />
          <SuggestionButton delay={1.2} />
          <SuggestionButton delay={1.3} />
        </div>
      </div>
    </div>
  );
}

function SendButton() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Send-Button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Send_hor_fill">
          <path d={svgPaths.p6301100} fill="var(--fill-0, white)" id="Vector 121" />
        </g>
      </svg>
    </div>
  );
}

function ChatInput() {
  return (
    <motion.div 
      className="backdrop-blur-[9.5px] bg-[rgba(20,20,20,0.5)] h-[60px] relative rounded-[50px] shrink-0 w-full" 
      data-name="Chat-Input"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 1.4 }}
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[15px] items-center px-[20px] py-[10px] relative size-full">
          <p className="font-['Yekan_Bakh:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] w-[562px] whitespace-pre-wrap">Please enter your message...</p>
          <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">
            <SendButton />
          </motion.div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#373737] border-solid inset-0 pointer-events-none rounded-[50px]" />
    </motion.div>
  );
}

function Components() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Components">
      <SuggestionBox />
      <ChatInput />
    </div>
  );
}

function ChatModels() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[157px] items-start justify-center overflow-clip px-[25px] py-[10px] relative shrink-0 w-[700px]" data-name="Chat-Models">
      <Components />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute content-stretch flex flex-col gap-px h-[477px] items-center left-0 overflow-clip px-[276px] py-[10px] top-[220px] w-[1230px]" data-name="Body">
      <HeaderTexts />
      <Description />
      <ChatModels />
    </div>
  );
}

function Root() {
  return (
    <div className="absolute h-[697px] left-[345px] overflow-clip top-[207px] w-[1231px]" data-name="root">
      <div className="absolute h-[600px] left-0 top-[97px] w-[1230px]" data-name="MainBox">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1230 600">
          <g data-figma-bg-blur-radius="19" id="MainBox">
            <mask fill="white" id="path-1-inside-1_1_132">
              <path d={svgPaths.p2917c500} />
            </mask>
            <path d={svgPaths.p2917c500} fill="url(#paint0_linear_1_132)" fillOpacity="0.52" />
            <path d={svgPaths.p3bb80f00} fill="url(#paint1_linear_1_132)" mask="url(#path-1-inside-1_1_132)" />
          </g>
          <defs>
            <clipPath id="bgblur_0_1_132_clip_path" transform="translate(19 19)">
              <path d={svgPaths.p2917c500} />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_132" x1="284.768" x2="1230.25" y1="187.5" y2="599.437">
              <stop />
              <stop offset="1" stopColor="#A8A8A8" stopOpacity="0.22" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_132" x1="1230" x2="-0.383577" y1="600" y2="0.787613">
              <stop stopOpacity="0" />
              <stop offset="1" stopColor="white" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <motion.div 
        className="-translate-x-1/2 absolute left-[calc(50%-0.5px)] size-[194px] top-0" 
        data-name="Profile"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <img alt="" className="block max-w-none size-full" height="194" src={imgProfile} width="194" />
      </motion.div>
      <Header />
      <Body />
    </div>
  );
}

export default function AnimatedPortfolio() {
  return (
    <div className="relative size-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame1} />
      <Root />
    </div>
  );
}
