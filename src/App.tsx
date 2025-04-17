"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import styled, { keyframes, ThemeProvider, css } from "styled-components";
import {
  Moon,
  Pause,
  Play,
  Volume2,
  User,
  Clock,
  AlignLeft,
  Sun,
  CloudRain,
} from "lucide-react";

// 테마 정의
const theme = {
  colors: {
    primary: "#4e73df",
    background: {
      start: "#1a1a4f",
      end: "#2a2a7f",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.8)",
    },
  },
  shadows: {
    glow: "0 0 30px rgba(78, 115, 223, 0.6)",
  },
};

// 애니메이션 키프레임 정의
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const rainDrop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
    transform: translateY(1000%);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const twinkle = keyframes`
  0% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.3;
  }
`;

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const bounceIn = keyframes`
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const AppContainer = styled.div<{ $isRaining: boolean }>`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    to bottom,
    ${(props) => (props.$isRaining ? "#1a344f" : "#1a1a4f")},
    ${(props) => (props.$isRaining ? "#2a547f" : "#2a2a7f")}
  );
  color: white;
  display: flex;
  flex-direction: column;
  font-family: "Pretendard", -apple-system, BlinkMacSystemFont, system-ui,
    Roboto, sans-serif;
  position: relative;
  overflow: hidden;
  transition: background 1s ease-in-out;
`;

const StarBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
`;

const Star = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 50%;
  animation: ${css`
    ${twinkle} 3s infinite ease-in-out
  `};
`;

const RainBackground = styled.div<{ $isRaining: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  display: ${(props) => (props.$isRaining ? "block" : "none")};
`;

const RainDrop = styled.div`
  position: absolute;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.8)
  );
  width: 1px;
  border-radius: 0;
  opacity: 0;
  animation-name: ${rainDrop};
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const Header = styled.header<{ $isInitialLoad: boolean }>`
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  animation: ${(props) =>
    props.$isInitialLoad
      ? "none"
      : css`
          ${slideInFromLeft} 0.8s ease-out
        `};
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0)
    );
  }
`;

const Subtitle = styled.p`
  font-size: 14px;
  margin: 8px 0 0;
  opacity: 0.8;
`;

const TimeIcon = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  animation: ${css`
    ${spin} 20s linear infinite
  `};

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.7);
    transform-origin: left;
    transform: rotate(45deg);
  }
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const MoonGlow = styled.div<{ $isPlaying: boolean }>`
  position: absolute;
  width: 150%;
  height: 150%;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(78, 115, 223, 0.6) 0%,
    rgba(41, 66, 146, 0) 70%
  );
  animation: ${(props) =>
    props.$isPlaying
      ? css`
          ${pulse} 4s infinite ease-in-out
        `
      : "none"};
  z-index: -1;
`;

const MoonIconContainer = styled.div<{ $isPlaying: boolean }>`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(78, 115, 223, 0.8) 0%,
    rgba(41, 66, 146, 0.4) 70%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  box-shadow: 0 0 30px rgba(78, 115, 223, 0.6);
  position: relative;
  animation: ${css`
    ${float} 6s infinite ease-in-out
  `};
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 40px rgba(78, 115, 223, 0.8);
  }
`;

const StyledMoonIcon = styled(Moon)`
  color: white;
  width: 60px;
  height: 60px;
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
`;

const SleepInfo = styled.div<{ $isInitialLoad: boolean }>`
  animation: ${(props) =>
    props.$isInitialLoad
      ? "none"
      : css`
          ${fadeIn} 0.8s ease-out
        `};
`;

const SleepTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin: 10px 0 5px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const SleepSubtitle = styled.p`
  font-size: 14px;
  opacity: 0.8;
  margin: 0 0 30px;
`;

const TimeBadge = styled.div<{ $isInitialLoad: boolean }>`
  background-color: rgba(78, 115, 223, 0.3);
  border-radius: 20px;
  padding: 8px 20px;
  font-size: 16px;
  margin-bottom: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  animation: ${(props) =>
    props.$isInitialLoad
      ? "none"
      : css`
          ${bounceIn} 0.6s ease-out
        `};
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    animation: ${css`
      ${shimmer} 3s infinite
    `};
  }
`;

const Controls = styled.div<{ $isInitialLoad: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  animation: ${(props) =>
    props.$isInitialLoad
      ? "none"
      : css`
          ${fadeIn} 0.8s ease-out 0.3s
        `};
  animation-fill-mode: backwards;
`;

const ControlButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(78, 115, 223, 0.3);
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(78, 115, 223, 0.5);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const PlayButton = styled(ControlButton)<{ $isPlaying: boolean }>`
  width: 60px;
  height: 60px;
  background-color: #4e73df;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transform: ${(props) => (props.$isPlaying ? "scale(1.1)" : "scale(1)")};

  &:hover {
    background-color: #3a5bbf;
    transform: ${(props) => (props.$isPlaying ? "scale(1.15)" : "scale(1.05)")};
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: rgba(78, 115, 223, 0.3);
    z-index: -1;
    opacity: ${(props) => (props.$isPlaying ? 1 : 0)};
    transform: ${(props) => (props.$isPlaying ? "scale(1.2)" : "scale(1)")};
    transition: transform 0.3s ease, opacity 0.3s ease;
    animation: ${(props) =>
      props.$isPlaying
        ? css`
            ${pulse} 2s infinite
          `
        : "none"};
  }
`;

const VolumeControl = styled.div<{ $isInitialLoad: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  gap: 10px;
  margin-bottom: 40px;
  position: relative;
  touch-action: none;
  animation: ${(props) =>
    props.$isInitialLoad
      ? "none"
      : css`
          ${fadeIn} 0.8s ease-out 0.5s
        `};
  animation-fill-mode: backwards;
`;

const VolumeSlider = styled.div`
  flex: 1;
  height: 6px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  position: relative;
  cursor: pointer;
`;

const VolumeProgress = styled.div<{ $value: number }>`
  position: absolute;
  height: 100%;
  width: ${(props) => props.$value}%;
  background: linear-gradient(to right, #4e73df, #7e93ff);
  border-radius: 3px;
  transition: width 0.1s ease;
`;

const VolumeThumb = styled.div<{ $value: number }>`
  position: absolute;
  left: ${(props) => props.$value}%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.1s ease;

  &:active {
    transform: translate(-50%, -50%) scale(1.2);
  }
`;

const VolumeInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  -webkit-appearance: none;
  z-index: 10;
`;

const VolumeText = styled.span`
  font-size: 12px;
  min-width: 40px;
  text-align: right;
`;

const FeatureGrid = styled.div<{ $isInitialLoad: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  width: 100%;
  max-width: 400px;
  animation: ${(props) =>
    props.$isInitialLoad
      ? "none"
      : css`
          ${fadeIn} 0.8s ease-out 0.7s
        `};
  animation-fill-mode: backwards;
`;

const FeatureButton = styled.button<{
  $isActive?: boolean;
  $isRaining?: boolean;
}>`
  background-color: ${(props) => {
    if (props.$isRaining && props.$isActive) return "rgba(41, 128, 185, 0.6)";
    if (props.$isRaining) return "rgba(41, 128, 185, 0.3)";
    return props.$isActive
      ? "rgba(78, 115, 223, 0.4)"
      : "rgba(78, 115, 223, 0.2)";
  }};
  border: none;
  border-radius: 10px;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: ${(props) =>
      props.$isRaining ? "rgba(41, 128, 185, 0.5)" : "rgba(78, 115, 223, 0.3)"};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(-1px);
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: all 0.3s ease;
    transform: skewX(-15deg);
    opacity: 0;
  }

  &:hover:after {
    left: 100%;
    opacity: 1;
  }
`;

const FeatureIcon = styled.div<{ $isActive?: boolean; $isRaining?: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => {
    if (props.$isRaining && props.$isActive) return "rgba(41, 128, 185, 0.8)";
    if (props.$isRaining) return "rgba(41, 128, 185, 0.6)";
    return props.$isActive
      ? "rgba(78, 115, 223, 0.7)"
      : "rgba(78, 115, 223, 0.5)";
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  transition: all 0.3s ease;
  transform: ${(props) => (props.$isActive ? "scale(1.1)" : "scale(1)")};
  box-shadow: ${(props) => {
    if (props.$isRaining && props.$isActive)
      return "0 0 20px rgba(41, 128, 185, 0.7)";
    return props.$isActive ? "0 0 20px rgba(78, 115, 223, 0.5)" : "none";
  }};
`;

const FeatureText = styled.span`
  font-size: 14px;
  transition: all 0.3s ease;
`;

const BottomNav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 15px 0;
  background-color: rgba(26, 26, 79, 0.8);
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 2;
  animation: ${css`
    ${slideInFromRight} 0.8s ease-out
  `};
`;

const NavItem = styled.button<{ $active?: boolean }>`
  background: none;
  border: none;
  color: ${(props) => (props.$active ? "white" : "rgba(255, 255, 255, 0.6)")};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    color: white;
  }
`;

const NavText = styled.span`
  font-size: 12px;
`;

const NavIndicator = styled.div`
  position: absolute;
  bottom: -15px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: white;
  animation: ${css`
    ${pulse} 2s infinite
  `};
`;

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [isRaining, setIsRaining] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const rainAudioRef = useRef<HTMLAudioElement | null>(null);

  // 빗방울 효과 생성
  const generateRaindrops = useCallback(() => {
    const drops = [];
    const dropCount = 150;

    for (let i = 0; i < dropCount; i++) {
      drops.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 50}%`,
        animationDelay: `${Math.random() * 2}s`,
        height: `${Math.random() * 20 + 10}px`,
        animationDuration: `${Math.random() * 1 + 0.5}s`,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    return drops;
  }, []);

  const [raindrops, setRaindrops] = useState(() => generateRaindrops());

  // 별을 표시하기 위한 랜덤 데이터 생성
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
  }));

  useEffect(() => {
    // 앱 초기화 시 볼륨 값 적용
    const savedVolume = localStorage.getItem("whispy_volume");
    if (savedVolume) {
      setVolume(parseInt(savedVolume, 10));
    }

    // 초기 로드 상태를 false로 설정
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 1500);

    // 오디오 요소 초기화
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }

    if (rainAudioRef.current) {
      rainAudioRef.current.volume = volume / 100;
    }

    return () => clearTimeout(timer);
  }, []);

  // 빗방울 애니메이션을 위한 useEffect
  useEffect(() => {
    if (isRaining) {
      const interval = setInterval(() => {
        setRaindrops(generateRaindrops());
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [isRaining, generateRaindrops]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        if (isRaining && rainAudioRef.current) {
          rainAudioRef.current.pause();
        }
      } else {
        const playPromise = audioRef.current.play();

        // play() 메서드가 Promise를 반환하므로 적절히 처리
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error("오디오 재생 오류:", error);
          });
        }

        if (isRaining && rainAudioRef.current) {
          const rainPlayPromise = rainAudioRef.current.play();
          if (rainPlayPromise !== undefined) {
            rainPlayPromise.catch((error) => {
              console.error("빗소리 재생 오류:", error);
            });
          }
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleRain = () => {
    setIsRaining((prevState) => {
      const newState = !prevState;

      // 비 효과를 켤 때
      if (newState) {
        // 현재 재생 중이면 빗소리도 재생
        if (isPlaying && rainAudioRef.current) {
          rainAudioRef.current.volume = volume / 100;
          const rainPlayPromise = rainAudioRef.current.play();
          if (rainPlayPromise !== undefined) {
            rainPlayPromise.catch((error) => {
              console.error("빗소리 재생 오류:", error);
            });
          }
        }
      } else {
        // 비 효과를 끌 때
        if (rainAudioRef.current) {
          rainAudioRef.current.pause();
        }
      }

      return newState;
    });
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseInt(e.target.value);
    setVolume(newVolume);

    // 메인 오디오 볼륨 설정
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }

    // 비 오디오 볼륨 설정
    if (rainAudioRef.current) {
      rainAudioRef.current.volume = newVolume / 100;
    }

    // 볼륨 값 저장
    localStorage.setItem("whispy_volume", newVolume.toString());
  };

  const handleVolumeSliderClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const slider = e.currentTarget;
    const rect = slider.getBoundingClientRect();
    const percentage = ((e.clientX - rect.left) / rect.width) * 100;
    const newVolume = Math.min(100, Math.max(0, Math.round(percentage)));

    setVolume(newVolume);

    // 메인 오디오 볼륨 설정
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }

    // 비 오디오 볼륨 설정
    if (rainAudioRef.current) {
      rainAudioRef.current.volume = newVolume / 100;
    }

    // 볼륨 값 저장
    localStorage.setItem("whispy_volume", newVolume.toString());
  };

  return (
    <ThemeProvider theme={theme}>
      <AppContainer $isRaining={isRaining}>
        <StarBackground>
          {stars.map((star) => (
            <Star
              key={star.id}
              style={{
                top: star.top,
                left: star.left,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDelay: `${star.delay}s`,
                opacity: isRaining ? "0.4" : "1",
              }}
            />
          ))}
        </StarBackground>

        <RainBackground $isRaining={isRaining}>
          {raindrops.map((drop) => (
            <RainDrop
              key={drop.id}
              style={{
                left: drop.left,
                top: drop.top,
                height: drop.height,
                animationDelay: drop.animationDelay,
                animationDuration: drop.animationDuration,
                opacity: drop.opacity,
              }}
            />
          ))}
        </RainBackground>

        <Header $isInitialLoad={isInitialLoad}>
          <Title>Whispy</Title>
          <Subtitle>편안한 밤을 위한 수면 도우미</Subtitle>
          <TimeIcon />
        </Header>

        <MainContent>
          <MoonIconContainer $isPlaying={isPlaying}>
            <StyledMoonIcon />
            <MoonGlow $isPlaying={isPlaying} />
          </MoonIconContainer>

          <SleepInfo $isInitialLoad={isInitialLoad}>
            <SleepTitle>깊은 수면</SleepTitle>
            <SleepSubtitle>포근한 밤을 위한 수면 사운드</SleepSubtitle>
          </SleepInfo>

          <TimeBadge $isInitialLoad={isInitialLoad}>8시간</TimeBadge>

          <Controls $isInitialLoad={isInitialLoad}>
            <ControlButton>
              <Pause size={20} />
            </ControlButton>
            <PlayButton onClick={togglePlay} $isPlaying={isPlaying}>
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </PlayButton>
            <ControlButton>
              <Clock size={20} />
            </ControlButton>
          </Controls>

          <VolumeControl $isInitialLoad={isInitialLoad}>
            <Volume2 size={20} />
            <VolumeSlider onClick={handleVolumeSliderClick}>
              <VolumeProgress $value={volume} />
              <VolumeThumb $value={volume} />
              <VolumeInput
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
              />
            </VolumeSlider>
            <VolumeText>{volume}%</VolumeText>
          </VolumeControl>

          <FeatureGrid $isInitialLoad={isInitialLoad}>
            <FeatureButton
              onMouseEnter={() => setActiveFeature(0)}
              onMouseLeave={() => setActiveFeature(null)}
              $isActive={activeFeature === 0}
              $isRaining={isRaining}
            >
              <FeatureIcon
                $isActive={activeFeature === 0}
                $isRaining={isRaining}
              >
                <User size={24} />
              </FeatureIcon>
              <FeatureText>명상</FeatureText>
            </FeatureButton>
            <FeatureButton
              onMouseEnter={() => setActiveFeature(1)}
              onMouseLeave={() => setActiveFeature(null)}
              $isActive={activeFeature === 1}
              $isRaining={isRaining}
            >
              <FeatureIcon
                $isActive={activeFeature === 1}
                $isRaining={isRaining}
              >
                <Clock size={24} />
              </FeatureIcon>
              <FeatureText>수면 분석</FeatureText>
            </FeatureButton>
            <FeatureButton
              onClick={toggleRain}
              onMouseEnter={() => setActiveFeature(2)}
              onMouseLeave={() => setActiveFeature(null)}
              $isActive={isRaining || activeFeature === 2}
              $isRaining={isRaining}
            >
              <FeatureIcon
                $isActive={isRaining || activeFeature === 2}
                $isRaining={isRaining}
              >
                <CloudRain size={24} />
              </FeatureIcon>
              <FeatureText>{isRaining ? "비 효과 끄기" : "빗소리"}</FeatureText>
            </FeatureButton>
            <FeatureButton
              onMouseEnter={() => setActiveFeature(3)}
              onMouseLeave={() => setActiveFeature(null)}
              $isActive={activeFeature === 3}
              $isRaining={isRaining}
            >
              <FeatureIcon
                $isActive={activeFeature === 3}
                $isRaining={isRaining}
              >
                <Sun size={24} />
              </FeatureIcon>
              <FeatureText>백색 소음</FeatureText>
            </FeatureButton>
          </FeatureGrid>
        </MainContent>

        <BottomNav>
          <NavItem $active>
            <Moon size={20} />
            <NavText>수면</NavText>
            <NavIndicator />
          </NavItem>
          <NavItem>
            <AlignLeft size={20} />
            <NavText>통계</NavText>
          </NavItem>
          <NavItem>
            <User size={20} />
            <NavText>프로필</NavText>
          </NavItem>
        </BottomNav>

        <audio ref={audioRef} loop>
          <source src="./sounds/wave.mp3" type="audio/mp3" />
        </audio>

        <audio ref={rainAudioRef} loop>
          <source src="./sounds/wave.mp3" type="audio/mp3" />
        </audio>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
