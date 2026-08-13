import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Eye, EyeOff, X } from "lucide-react";

const inputVariants = cva(
  "flex w-full rounded-xl border bg-black px-4 py-3 text-sm transition-all placeholder:text-gray-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B8860B] focus-visible:border-[#B8860B] disabled:cursor-not-allowed disabled:opacity-50 shadow-sm",
  {
    variants: {
      variant: {
        default: "border-white/10 text-white",
        destructive: "border-red-500/50 text-white focus-visible:ring-red-500",
        ghost: "border-transparent bg-white/5 focus-visible:bg-black focus-visible:border-white/20",
      },
      size: {
        default: "h-11 px-4 py-3",
        sm: "h-9 px-3 py-1 text-xs",
        lg: "h-12 px-5 py-3",
        xl: "h-14 px-6 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Input = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      type = "text",
      leftIcon,
      rightIcon,
      error,
      clearable,
      onClear,
      value,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [internalValue, setInternalValue] = React.useState(
      props.defaultValue || "",
    );
    
    const internalRef = React.useRef(null);
    const inputRef = ref || internalRef;

    const inputVariant = error ? "destructive" : variant;
    const isPassword = type === "password";
    const actualType = isPassword && showPassword ? "text" : type;

    const isControlled = value !== undefined;
    const inputValue = isControlled ? value : internalValue;
    const showClearButton = clearable && inputValue && String(inputValue).length > 0;

    const handleInputChange = (e) => {
      if (!isControlled) {
        setInternalValue(e.target.value);
      }
      props.onChange?.(e);
    };

    const handleClear = () => {
      const inputElement = typeof inputRef === 'function' ? null : inputRef?.current;
      
      if (inputElement) {
        inputElement.value = "";
        const event = new Event('input', { bubbles: true });
        Object.defineProperty(event, 'target', {
          writable: false,
          value: inputElement
        });
        inputElement.dispatchEvent(event);
      }

      if (!isControlled) {
        setInternalValue("");
      }
      
      onClear?.();
      
      if (props.onChange) {
        const syntheticEvent = {
          target: { value: "" },
          currentTarget: { value: "" },
          preventDefault: () => {},
          stopPropagation: () => {},
        };
        props.onChange(syntheticEvent);
      }
    };

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="relative w-full">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 [&_svg]:size-4 [&_svg]:shrink-0 z-10">
            {leftIcon}
          </div>
        )}

        <input
          type={actualType}
          className={cn(
            inputVariants({ variant: inputVariant, size, className }),
            leftIcon && "pl-10",
            (rightIcon || isPassword || showClearButton) && "pr-10"
          )}
          ref={inputRef}
          {...(isControlled ? { value: inputValue } : { defaultValue: props.defaultValue })}
          onChange={handleInputChange}
          {...(({ defaultValue, ...rest }) => rest)(props)}
        />

        {(rightIcon || isPassword || showClearButton) && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 z-10">
            {rightIcon && (
              <div className="text-gray-500 [&_svg]:size-4 [&_svg]:shrink-0">
                {rightIcon}
              </div>
            )}

            {showClearButton && (
              <button
                type="button"
                onClick={handleClear}
                className="text-gray-500 hover:text-white transition-colors [&_svg]:size-4 [&_svg]:shrink-0"
                tabIndex={-1}
              >
                <X />
              </button>
            )}

            {isPassword && (
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="text-gray-500 hover:text-white transition-colors [&_svg]:size-4 [&_svg]:shrink-0"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            )}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input, inputVariants };
