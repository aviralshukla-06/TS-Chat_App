export type Size = "sm" | "md" | "lg";

export interface SizeStyles {
    size: Size,

}

export const sizeClasses = {
    sm: "w-5 h-5 ", // You can customize width/height or padding
    md: "w-6 h-6 ",
    lg: "w-6 h-8 ",
}