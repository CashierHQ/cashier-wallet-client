import clsx from "clsx"
import { FC, HTMLAttributes } from "react"
import { useNavigate } from "react-router-dom"

interface NFIDLogoProps {
  className?: string
  assetsLink?: string
}

interface CashierLogoProps extends HTMLAttributes<HTMLSpanElement> {
  text?: string
  variant?: "dark" | "light"
}

export const CashierLogo: FC<CashierLogoProps> = ({
  className,
  text = "Cashier",
  variant = "dark",
  ...props
}) => (
  <span
    aria-label={text}
    className={clsx(
      "inline-flex items-center whitespace-nowrap font-black leading-none tracking-normal",
      "text-[28px]",
      variant === "light" ? "text-white" : "text-black dark:text-white",
      className,
    )}
    {...props}
  >
    {text}
  </span>
)

export const NFIDLogo: FC<NFIDLogoProps> = ({ className, assetsLink }) => {
  const navigate = useNavigate()
  return (
    <CashierLogo
      variant="light"
      className={clsx(assetsLink && "cursor-pointer", className)}
      onClick={() => {
        if (!assetsLink) return
        navigate(assetsLink)
      }}
    />
  )
}

export const NFIDLogoMain: FC<NFIDLogoProps> = ({ className, assetsLink }) => {
  const navigate = useNavigate()
  return (
    <CashierLogo
      className={clsx(assetsLink && "cursor-pointer", className)}
      onClick={() => {
        if (!assetsLink) return
        navigate(assetsLink)
      }}
    />
  )
}
