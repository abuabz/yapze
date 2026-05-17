"use client"

import { useEffect, useRef } from "react"

export function AnimatedCanvasBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const particles: Particle[] = []
    const properties = {
      bgColor: "rgba(0, 0, 0, 1)",
      particleColor: "rgba(128, 102, 247, 0.4)",
      lineColor: "rgba(128, 102, 247, 0.12)",
      particleRadius: 2.5,
      particleCount: 75,
      maxVelocity: 0.6,
      lineLength: 140,
    }

    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 150,
    }

    class Particle {
      x: number
      y: number
      velocityX: number
      velocityY: number

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.velocityX = (Math.random() * 2 - 1) * properties.maxVelocity
        this.velocityY = (Math.random() * 2 - 1) * properties.maxVelocity
      }

      position() {
        if (this.x + this.velocityX > width || this.x + this.velocityX < 0) {
          this.velocityX = -this.velocityX
        }
        if (this.y + this.velocityY > height || this.y + this.velocityY < 0) {
          this.velocityY = -this.velocityY
        }
        this.x += this.velocityX
        this.y += this.velocityY
      }

      reDraw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fillStyle = properties.particleColor
        ctx.fill()
      }
    }

    function drawLines() {
      if (!ctx) return
      let x1, y1, x2, y2, distance

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          x1 = particles[i].x
          y1 = particles[i].y
          x2 = particles[j].x
          y2 = particles[j].y
          distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))

          if (distance < properties.lineLength) {
            ctx.beginPath()
            ctx.moveTo(x1, y1)
            ctx.lineTo(x2, y2)
            ctx.closePath()
            ctx.strokeStyle = properties.lineColor
            ctx.lineWidth = 1 - distance / properties.lineLength
            ctx.stroke()
          }
        }

        // Draw line to mouse
        if (mouse.x !== null && mouse.y !== null) {
          x1 = particles[i].x
          y1 = particles[i].y
          distance = Math.sqrt(Math.pow(mouse.x - x1, 2) + Math.pow(mouse.y - y1, 2))

          if (distance < mouse.radius) {
            ctx.beginPath()
            ctx.moveTo(x1, y1)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.closePath()
            ctx.strokeStyle = `rgba(128, 102, 247, ${0.25 * (1 - distance / mouse.radius)})`
            ctx.lineWidth = 1.2
            ctx.stroke()
          }
        }
      }
    }

    function init() {
      particles.length = 0
      for (let i = 0; i < properties.particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function loop() {
      if (!ctx) return
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].position()
        particles[i].reDraw()
      }

      drawLines()
      animationFrameId = requestAnimationFrame(loop)
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      init()
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    init()
    loop()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div
      className="absolute inset-0 -z-10 w-full h-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/yapazelandingimg.png')" }}
    >
      {/* Dark overlay for contrast and legibility */}
      <div className="absolute inset-0 bg-slate-950/65 z-0 pointer-events-none" />

      {/* The animated interactive particle mesh */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 pointer-events-none w-full h-full block"
      />
    </div>
  )
}
