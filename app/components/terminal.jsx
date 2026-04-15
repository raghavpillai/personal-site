"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";

const SequenceContext = createContext({ step: -1, advance: () => {} });

export function SequenceProvider({ children }) {
  const [step, setStep] = useState(-1);
  const advance = useCallback(() => setStep((s) => s + 1), []);

  useEffect(() => {
    const timer = setTimeout(() => setStep(0), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SequenceContext.Provider value={{ step, advance }}>
      {children}
    </SequenceContext.Provider>
  );
}

function Typewriter({ text, speed = 25, onDone }) {
  const [index, setIndex] = useState(0);
  const doneRef = useRef(false);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => setIndex((i) => i + 1), speed);
      return () => clearTimeout(timer);
    } else if (!doneRef.current) {
      doneRef.current = true;
      const timer = setTimeout(() => onDone?.(), 120);
      return () => clearTimeout(timer);
    }
  }, [index, text.length, speed, onDone]);

  return (
    <div className="text-[13px] text-[#98c379] mb-3">
      {text.slice(0, index)}
      <span className="inline-block w-[7px] h-[15px] bg-[#98c379] ml-[1px] align-middle animate-[blink_1s_step-end_infinite]" />
    </div>
  );
}

export function WarpBlock({ blockIndex, prompt, command, children }) {
  const { step, advance } = useContext(SequenceContext);
  const [phase, setPhase] = useState("hidden");
  const blockRef = useRef(null);

  useEffect(() => {
    if (step === blockIndex && phase === "hidden") {
      setPhase("typing");
      // Scroll block into view if needed
      if (blockRef.current) {
        blockRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  }, [step, blockIndex, phase]);

  const handleTypingDone = useCallback(() => {
    setPhase("revealed");
    setTimeout(() => advance(), 200);
  }, [advance]);

  if (phase === "hidden") return null;

  return (
    <>
      {blockIndex > 0 && <div className="border-t border-white/[0.03]" />}
      <div
        ref={blockRef}
        className="border-l-2 border-transparent hover:border-[#9653fb] transition-colors duration-150"
      >
        <div className="px-4 md:px-6 py-4">
          <div className="text-[11px] text-[#3a3a3a] mb-1">{prompt}</div>

          {phase === "typing" && (
            <Typewriter text={command} speed={25} onDone={handleTypingDone} />
          )}

          {phase === "revealed" && (
            <>
              <div className="text-[13px] text-[#98c379] mb-3">{command}</div>
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
              >
                {children}
              </motion.div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
