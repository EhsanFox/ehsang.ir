import { Background } from "@/components/Background";
import SpotlightCard from "@/components/ui/SpotlightCard/SpotlightCard";
import profilePic from "@/assets/profile.jpg";
import CircularText from "@/components/ui/CircularText/CircularText";
import StarBorder from "@/components/ui/StarBorder/StarBorder";
import TextType from "@/components/ui/TextType/TextType";
export const HeroPage = () => {
  return (
    <>
      <Background mode="light" />

      <div className="relative flex items-center justify-center h-screen z-1">
        <div className="relative flex flex-col items-center justify-center p-6 h-2/3 w-1/3">
          <div className="relative w-60 h-60 flex items-center justify-center overflow-hidden">
            <CircularText
              text="Ehsan ● BackEnd Developer ● "
              onHover="speedUp"
              spinDuration={20}
              className="absolute h-full w-full"
            />
            <img
              src={profilePic}
              alt="profile"
              className="absolute w-[50%] h-[50%] rounded-full object-cover"
            />
            {/*
          <StarBorder
            as="div"
            className="relative w-40 h-40 flex items-center justify-center overflow-hidden rounded-full"
            color="magenta"
            speed="5s"
          >
            <img
              src={profilePic}
              alt="profile"
              className="absolute w-fit h-fit rounded-full object-cover"
            />
                  </StarBorder>
                  */}
          </div>

          <TextType
            text={[
              "Welcome to React Bits! Good to see you!",
              "Build some amazing experiences!",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            variableSpeed={{ min: 60, max: 120 }}
            cursorBlinkDuration={0.5}
            className="text-white"
          />
          <SpotlightCard
            className="custom-spotlight-card w-50 rounded-500"
            spotlightColor="rgba(34, 226, 92, 0.2)"
          >
            <p>This is a test.</p>
          </SpotlightCard>
        </div>
      </div>
      <SpotlightCard
        className="custom-spotlight-card w-50 rounded-500"
        spotlightColor="rgba(34, 226, 92, 0.2)"
      >
        <p>This is a test.</p>
      </SpotlightCard>
    </>
  );
};
