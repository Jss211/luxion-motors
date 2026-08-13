import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Phone, CheckCircle, XCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const countries = [
  { code: "US", name: "United States", flag: "🇺🇸", phoneCode: "+1", placeholder: "(555) 123-4567", pattern: /^(\([0-9]{3}\))\s?[0-9]{3}-?[0-9]{4}$/, maxLength: 14 },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", phoneCode: "+44", placeholder: "7911 123456", pattern: /^[0-9]{10,11}$/, maxLength: 11 },
  { code: "PE", name: "Peru", flag: "🇵🇪", phoneCode: "+51", placeholder: "987 654 321", pattern: /^[0-9]{9}$/, maxLength: 11 },
  { code: "MX", name: "Mexico", flag: "🇲🇽", phoneCode: "+52", placeholder: "55 1234 5678", pattern: /^[0-9]{10}$/, maxLength: 12 },
  { code: "AR", name: "Argentina", flag: "🇦🇷", phoneCode: "+54", placeholder: "9 11 1234-5678", pattern: /^[0-9]{10,11}$/, maxLength: 14 },
  { code: "CL", name: "Chile", flag: "🇨🇱", phoneCode: "+56", placeholder: "9 8765 4321", pattern: /^[0-9]{9}$/, maxLength: 11 },
  { code: "CO", name: "Colombia", flag: "🇨🇴", phoneCode: "+57", placeholder: "321 1234567", pattern: /^[0-9]{10}$/, maxLength: 12 },
  { code: "ES", name: "Spain", flag: "🇪🇸", phoneCode: "+34", placeholder: "612 34 56 78", pattern: /^[0-9]{9}$/, maxLength: 11 },
  { code: "BR", name: "Brazil", flag: "🇧🇷", phoneCode: "+55", placeholder: "(11) 91234-5678", pattern: /^[0-9]{10,11}$/, maxLength: 15 },
  { code: "EC", name: "Ecuador", flag: "🇪🇨", phoneCode: "+593", placeholder: "9 1234 5678", pattern: /^[0-9]{9}$/, maxLength: 11 },
  { code: "BO", name: "Bolivia", flag: "🇧🇴", phoneCode: "+591", placeholder: "7 123 4567", pattern: /^[0-9]{8}$/, maxLength: 10 },
  { code: "UY", name: "Uruguay", flag: "🇺🇾", phoneCode: "+598", placeholder: "91 123 456", pattern: /^[0-9]{8}$/, maxLength: 8 },
  { code: "PY", name: "Paraguay", flag: "🇵🇾", phoneCode: "+595", placeholder: "981 123 456", pattern: /^[0-9]{9}$/, maxLength: 11 },
  { code: "VE", name: "Venezuela", flag: "🇻🇪", phoneCode: "+58", placeholder: "412-1234567", pattern: /^[0-9]{10}$/, maxLength: 12 },
  { code: "IT", name: "Italy", flag: "🇮🇹", phoneCode: "+39", placeholder: "312 345 6789", pattern: /^[0-9]{9,10}$/, maxLength: 11 },
  { code: "FR", name: "France", flag: "🇫🇷", phoneCode: "+33", placeholder: "6 12 34 56 78", pattern: /^[0-9]{10}$/, maxLength: 12 },
  { code: "DE", name: "Germany", flag: "🇩🇪", phoneCode: "+49", placeholder: "151 12345678", pattern: /^[0-9]{10,12}$/, maxLength: 12 },
  { code: "JP", name: "Japan", flag: "🇯🇵", phoneCode: "+81", placeholder: "90 1234 5678", pattern: /^[0-9]{10,11}$/, maxLength: 13 },
].sort((a, b) => a.name.localeCompare(b.name));

const validatePhoneNumber = (phoneNumber, countryCode) => {
  const country = countries.find((c) => c.code === countryCode);
  if (!country) return false;
  const cleanNumber = phoneNumber.replace(/[\s\-\(\)]/g, "");
  return country.pattern.test(cleanNumber);
};

const phoneInputVariants = cva(
  "flex w-full items-center gap-2 bg-transparent text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        outline: "",
        ghost: "",
      },
      size: {
        sm: "h-9 px-2 text-xs",
        default: "h-11 px-3 text-sm",
        lg: "h-12 px-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export function PhoneInput({
  value = "",
  onChange,
  placeholder,
  className,
  disabled = false,
  defaultCountry = "PE",
  showFlag = true,
  showIcon = false, // disabled icon by default for cleaner look
  error = false,
  showValidation = false,
  onValidationChange,
  variant,
  size,
  name,
  required,
  ...props
}) {
  const [selectedCountry, setSelectedCountry] = React.useState(
    countries.find((c) => c.code === defaultCountry) || countries.find(c => c.code === "PE")
  );
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [isValid, setIsValid] = React.useState(false);

  const effectivePlaceholder = placeholder || selectedCountry.placeholder;

  React.useEffect(() => {
    if (value) {
      const countryMatch = countries.find((c) => value.startsWith(c.phoneCode));
      if (countryMatch) {
        setSelectedCountry(countryMatch);
        setPhoneNumber(value.slice(countryMatch.phoneCode.length).trim());
      } else {
        setPhoneNumber(value);
      }
    }
  }, [value]);

  React.useEffect(() => {
    const valid =
      phoneNumber.length > 0
        ? validatePhoneNumber(phoneNumber, selectedCountry.code)
        : false;
    setIsValid(valid);
    onValidationChange?.(valid);
  }, [phoneNumber, selectedCountry.code, onValidationChange]);

  const handleCountryChange = (countryCode) => {
    const country = countries.find((c) => c.code === countryCode);
    if (country) {
      setSelectedCountry(country);
      const formattedValue = `${country.phoneCode} ${phoneNumber}`;
      const valid = phoneNumber.length > 0 ? validatePhoneNumber(phoneNumber, country.code) : false;
      
      const syntheticEvent = {
        target: { name, value: formattedValue }
      };
      onChange?.(syntheticEvent);
    }
  };

  const handlePhoneChange = (e) => {
    let newValue = e.target.value.replace(/[^\d\s\-\(\)]/g, "");

    if (selectedCountry.maxLength && newValue.length > selectedCountry.maxLength) {
      newValue = newValue.slice(0, selectedCountry.maxLength);
    }

    setPhoneNumber(newValue);
    const formattedValue = `${selectedCountry.phoneCode} ${newValue}`;
    const valid = newValue.length > 0 ? validatePhoneNumber(newValue, selectedCountry.code) : false;
    
    const syntheticEvent = {
      target: { name, value: formattedValue }
    };
    onChange?.(syntheticEvent);
  };

  return (
    <div
      className={cn(
        phoneInputVariants({ variant, size }),
        "rounded-lg border border-white/10 bg-black flex overflow-hidden focus-within:ring-1 focus-within:ring-[#B8860B] focus-within:border-[#B8860B] transition-all",
        className
      )}
      {...props}
    >
      {showIcon && <Phone className="h-4 w-4 shrink-0 text-gray-500 ml-3" />}

      <div className="flex items-center shrink-0 border-r border-white/10 pr-2 pl-1 bg-[#1a1a1a]">
        <Select
          value={selectedCountry.code}
          onValueChange={handleCountryChange}
          disabled={disabled}
        >
          <SelectTrigger className="h-full border-none bg-transparent shadow-none focus:ring-0 focus-visible:ring-transparent focus-visible:outline-transparent py-0 gap-1 pl-2 pr-1 w-[90px] justify-between">
            <SelectValue>
              <div className="flex items-center gap-1.5">
                {showFlag && <span className="text-base">{selectedCountry.flag}</span>}
                <span className="text-xs text-gray-300 font-semibold">{selectedCountry.phoneCode}</span>
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="max-h-60 w-auto min-w-[220px]">
            {countries.map((country) => (
              <SelectItem key={country.code} value={country.code}>
                <div className="flex items-center gap-3">
                  <span className="text-base">{country.flag}</span>
                  <span className="font-medium whitespace-nowrap">{country.name}</span>
                  <span className="text-xs text-gray-500 font-mono">
                    {country.phoneCode}
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <input
        type="hidden"
        name={name}
        required={required}
        value={`${selectedCountry.phoneCode} ${phoneNumber}`}
      />

      <input
        type="tel"
        value={phoneNumber}
        onChange={handlePhoneChange}
        placeholder={effectivePlaceholder}
        disabled={disabled}
        className={cn(
          "flex-1 border-none bg-transparent px-3 py-3 text-sm text-white focus:outline-none focus:ring-0 placeholder-gray-600 w-full",
          showValidation && phoneNumber.length > 0 && (isValid ? "text-green-500" : "text-red-500")
        )}
        maxLength={selectedCountry.maxLength}
      />

      {showValidation && phoneNumber.length > 0 && (
        <div className="mr-3 shrink-0">
          {isValid ? (
            <CheckCircle className="h-4 w-4 text-green-500" />
          ) : (
            <XCircle className="h-4 w-4 text-red-500" />
          )}
        </div>
      )}
    </div>
  );
}
