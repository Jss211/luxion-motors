"use client"

import * as React from "react"
import { Star } from "lucide-react"
import { cn } from "../../lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"

const Testimonial = React.forwardRef(
  ({ name, role, company, testimonial, rating = 5, image, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 p-6 transition-all hover:border-[#B8860B]/50 hover:shadow-lg md:p-8",
          className
        )}
        {...props}
      >
        <div className="absolute right-6 top-6 text-6xl font-serif text-white/5 pointer-events-none">
          "
        </div>

        <div className="flex flex-col gap-4 justify-between h-full relative z-10">
          {rating > 0 && (
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  className={cn(
                    index < rating
                      ? "fill-[#B8860B] text-[#B8860B]"
                      : "fill-white/10 text-white/10"
                  )}
                />
              ))}
            </div>
          )}

          <p className="text-pretty text-sm sm:text-base text-gray-300">
            "{testimonial}"
          </p>

          <div className="flex items-center gap-4 justify-start mt-4">
            <div className="flex items-center gap-4">
              {image && (
                <Avatar>
                  <AvatarImage src={image} alt={name} height={48} width={48} />
                  <AvatarFallback>{name[0]}</AvatarFallback>
                </Avatar>
              )}

              <div className="flex flex-col">
                <h3 className="font-bold text-white text-base">{name}</h3>
                <p className="text-xs text-[#B8860B]">
                  {role}
                  {company && ` @ ${company}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
)
Testimonial.displayName = "Testimonial"

export { Testimonial }
