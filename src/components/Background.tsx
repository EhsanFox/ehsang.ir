import LightRays from "@/components/ui/LightRays/LightRays";
import Iridescence from "./ui/Iridescence/Iridescence";

export function Background({ mode = "light" }: { mode: "light" | "wave" }) {
  return mode == "light" ? (
    <div className="absolute w-screen h-screen bg-black z-0">
      <LightRays
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={3}
        lightSpread={2}
        rayLength={3}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0.1}
        className="custom-rays"
        pulsating={false}
        fadeDistance={0.8}
        saturation={0.8}
      />
    </div>
  ) : (
    <Iridescence color={[0.5, 0.6, 0.8]} mouseReact amplitude={0.1} speed={1} />
  );
}
