'use client'

import { useEffect, useRef } from 'react'

/**
 * O vídeo do hero roda em câmera lenta (metade da velocidade), como no design.
 * `playbackRate` não existe em HTML — precisa de JS depois que os metadados
 * carregam, senão o navegador ignora o valor.
 *
 * Quando o sistema pede menos movimento, o vídeo não toca: fica o pôster, que
 * é o primeiro quadro. Ninguém vê uma área preta.
 */
export function VideoFundo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    const menosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (menosMovimento.matches) return

    video.playbackRate = 0.5
    const tocar = () => {
      video.playbackRate = 0.5
      void video.play().catch(() => {
        /* autoplay bloqueado: o pôster segura a cena */
      })
    }

    video.addEventListener('loadedmetadata', tocar)
    tocar()

    return () => video.removeEventListener('loadedmetadata', tocar)
  }, [])

  return (
    <video
      ref={ref}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
      className="absolute inset-0 h-full w-full object-cover"
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
