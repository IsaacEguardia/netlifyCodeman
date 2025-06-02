import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const HeartRateDetector = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [bpm, setBpm] = useState(null);
  const [error, setError] = useState(null);
  const [greenValues, setGreenValues] = useState([]);
  const [fingerDetected, setFingerDetected] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [stopDueToNoFinger, setStopDueToNoFinger] = useState(false);

  useEffect(() => {
    if (isCapturing) {
      setBpm(null);
      setGreenValues([]);
      setError(null);
      setFingerDetected(false);
      setElapsedTime(0);
      setStopDueToNoFinger(false);
      setCountdown(5);

      const countdownInterval = setInterval(() => {
        setCountdown((c) => {
          if (c === 1) {
            clearInterval(countdownInterval);
            startVideo();
            return null;
          }
          return c - 1;
        });
      }, 1000);

      return () => clearInterval(countdownInterval);
    } else {
      stopVideo();
      setCountdown(null);
      setElapsedTime(0);
    }
  }, [isCapturing]);

  const startVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      captureFrames();
    } catch (err) {
      setError("No se pudo acceder a la cámara.");
      setIsCapturing(false);
    }
  };

  const stopVideo = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  const isFingerOnCamera = (frame) => {
    const data = frame.data;
    let rSum = 0,
      gSum = 0,
      bSum = 0;

    for (let i = 0; i < data.length; i += 4) {
      rSum += data[i];
      gSum += data[i + 1];
      bSum += data[i + 2];
    }

    const pixelCount = data.length / 4;
    const rAvg = rSum / pixelCount;
    const gAvg = gSum / pixelCount;
    const bAvg = bSum / pixelCount;
    const brightness = (rAvg + gAvg + bAvg) / 3;

    return brightness < 50 && rAvg > gAvg && rAvg > bAvg;
  };

  const captureFrames = () => {
    let localGreenValues = [];
    const captureDuration = 20 * 1000;
    const captureInterval = 33;
    const startTime = Date.now();

    const ctx = canvasRef.current.getContext("2d");
    let fingerDetectedFrames = 0;
    const fingerDetectionThreshold = 10;
    let noFingerTime = 0;

    const capture = () => {
      if (!isCapturing || stopDueToNoFinger) return;

      const now = Date.now();
      const elapsed = now - startTime;
      setElapsedTime(elapsed);

      if (elapsed >= captureDuration) {
        stopVideo();  // <-- Detener la cámara inmediatamente
        setIsCapturing(false);
        if (localGreenValues.length > 0) {
          setGreenValues(localGreenValues);
          sendToBackend(localGreenValues);
        } else {
          setError("No se detectó el dedo durante la medición.");
        }
        return;
      }

      if (videoRef.current.readyState === 4) {
        ctx.drawImage(videoRef.current, 0, 0, 320, 240);
        const frame = ctx.getImageData(0, 0, 320, 240);

        if (isFingerOnCamera(frame)) {
          fingerDetectedFrames++;
          noFingerTime = 0;
          if (fingerDetectedFrames >= fingerDetectionThreshold) {
            setFingerDetected(true);
            let sumGreen = 0;
            for (let i = 1; i < frame.data.length; i += 4) {
              sumGreen += frame.data[i];
            }
            const avgGreen = sumGreen / (frame.data.length / 4);
            localGreenValues.push(avgGreen);
          }
        } else {
          fingerDetectedFrames = 0;
          setFingerDetected(false);
          noFingerTime += captureInterval;
          if (noFingerTime >= 3000) {
            stopVideo();  // <-- Detener la cámara inmediatamente
            setStopDueToNoFinger(true);
            setIsCapturing(false);
            setError(
              "No se detectó el dedo durante la medición. Por favor reinicia para obtener resultados confiables."
            );
            return;
          }
        }
      }
      setTimeout(capture, captureInterval);
    };
    capture();
  };

  const sendToBackend = async (greenValues) => {
    try {
      const response = await fetch(
        "https://fcardicacalculo-1074929399831.us-central1.run.app",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ greenValues }),
        }
      );
      const data = await response.json();
      if (data.bpm) {
        setBpm(Math.round(data.bpm));
        setError(null);
      } else {
        setError("No se pudo calcular el BPM.");
      }
    } catch (err) {
      setError("Error enviando datos al servidor.");
    }
  };

  const handleRestart = () => {
    setError(null);
    setBpm(null);
    setGreenValues([]);
    setFingerDetected(false);
    setElapsedTime(0);
    setStopDueToNoFinger(false);
    setIsCapturing(true);
  };

  return (
    <div className="max-w-md mx-auto p-6  rounded-lg shadow-md space-y-6">
      <div className="flex justify-center">
        {isCapturing || countdown !== null || stopDueToNoFinger ? (
          <video
            ref={videoRef}
            width="320"
            height="240"
            className="rounded-lg border border-gray-300 shadow-md"
            autoPlay
            muted
            playsInline
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div className="w-[320px] h-[240px] flex items-center justify-center bg-gray-100 rounded-lg border border-gray-300 shadow-md">
            <svg
              className="w-16 h-16 text-red-500 animate-pulse"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        )}
      </div>
      <canvas
        ref={canvasRef}
        width="320"
        height="240"
        style={{ display: "none" }}
      />

      {!isCapturing && !countdown && !stopDueToNoFinger && (
        <Button className="w-full" onClick={() => setIsCapturing(true)}>
          Iniciar medición (20s)
        </Button>
      )}

      {countdown !== null && (
        <p className="text-center text-lg font-semibold text-blue-600">
          Coloca tu dedo sobre la cámara en: {countdown} s
        </p>
      )}

      {isCapturing && !countdown && (
        <>
          <Button disabled className="w-full mb-2">
            Midiendo...
          </Button>
          {fingerDetected ? (
            <p className="text-center text-green-600 font-semibold mb-1">
              Dedo detectado, medición en progreso...
            </p>
          ) : (
            <p className="text-center text-red-600 font-semibold mb-1">
              Por favor coloca el dedo sobre la cámara.
            </p>
          )}
          <p className="text-center text-gray-700 text-sm">
            Tiempo transcurrido: {(elapsedTime / 1000).toFixed(1)} s / 20 s
          </p>
          <p className="text-center text-gray-700 text-sm">
            Muestras capturadas: {greenValues.length}
          </p>
        </>
      )}

      {stopDueToNoFinger && (
        <>
          <p className="text-center text-red-700 font-semibold mb-4 px-2">
            No se detectó el dedo durante la medición. Por favor reinicia para
            obtener resultados confiables.
          </p>
          <Button className="w-full" onClick={handleRestart}>
            Reiniciar medición
          </Button>
        </>
      )}

      {bpm && (
        <p className="mt-4 text-center text-xl font-bold text-purple-700">
          Ritmo cardíaco estimado: {bpm} BPM
        </p>
      )}

      {error && !stopDueToNoFinger && (
        <p className="mt-4 text-center text-red-500 font-semibold">{error}</p>
      )}

      <p className="mt-6 text-center text-sm text-gray-600">
        Por favor cubre completamente la cámara con tu dedo durante la
        medición.
      </p>
    </div>
  );
};

export default HeartRateDetector;
