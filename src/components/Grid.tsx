import { cx } from "cva"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
    className?: string
}

export default function Grid({ children, className }: Props) {
    return (
        <div className={cx("grid grid-cols-4 lg:grid-cols-12 gap-4 lg:gap-5 m-5", className)}>{children}</div>
    )
}