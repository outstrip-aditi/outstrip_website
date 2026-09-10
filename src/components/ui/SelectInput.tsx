"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { FiChevronDown, FiChevronUp, FiCheck } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

type SelectInputProps = {
  /** Optional field label rendered above the control. */
  label?: string;
  /** When set, a hidden input keeps this select working inside plain <form>/FormData submissions. */
  name?: string;
  options: SelectOption[];
  /** Controlled value. Omit to let the component manage its own state. */
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
};


export function SelectInput({
  label,
  name,
  options,
  value,
  defaultValue,
  onChange,
  placeholder = "Select an option",
  error,
  required,
  disabled = false,
  className,
}: SelectInputProps) {
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const [highlighted, setHighlighted] = useState(0);

  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listboxId = useId();
  const reduced = usePrefersReducedMotion();

  const isControlled = value !== undefined;
  const selectedValue = isControlled ? value : internalValue;
  const selectedIndex = options.findIndex((option) => option.value === selectedValue);
  const selectedOption = selectedIndex >= 0 ? options[selectedIndex] : undefined;

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  function openMenu() {
    setHighlighted(selectedIndex >= 0 ? selectedIndex : 0);
    setOpen(true);
  }

  useEffect(() => {
    if (!open) return;
    listRef.current
      ?.querySelector<HTMLLIElement>(`[data-index="${highlighted}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [open, highlighted]);

  function commit(option: SelectOption) {
    if (option.disabled) return;
    if (!isControlled) setInternalValue(option.value);
    onChange?.(option.value);
    setOpen(false);
    triggerRef.current?.focus();
  }

  function moveHighlight(step: number) {
    setHighlighted((current) => {
      let next = current;
      for (let i = 0; i < options.length; i++) {
        next = (next + step + options.length) % options.length;
        if (!options[next]?.disabled) break;
      }
      return next;
    });
  }

  function onTriggerKeyDown(event: ReactKeyboardEvent<HTMLButtonElement>) {
    if (disabled) return;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        if (!open) openMenu();
        else moveHighlight(1);
        break;
      case "ArrowUp":
        event.preventDefault();
        if (!open) openMenu();
        else moveHighlight(-1);
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        if (!open) {
          openMenu();
        } else if (options[highlighted]) {
          commit(options[highlighted]);
        }
        break;
      case "Escape":
        if (open) {
          event.preventDefault();
          setOpen(false);
        }
        break;
      case "Home":
        if (open) {
          event.preventDefault();
          setHighlighted(0);
        }
        break;
      case "End":
        if (open) {
          event.preventDefault();
          setHighlighted(options.length - 1);
        }
        break;
      case "Tab":
        setOpen(false);
        break;
    }
  }

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      {label && (
        <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted">
          {label}
          {required && <span className="text-danger"> *</span>}
        </span>
      )}

      {name && (
        <input type="hidden" name={name} value={selectedValue} required={required} />
      )}

      <button
        ref={triggerRef}
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        onClick={() => (open ? setOpen(false) : openMenu())}
        onKeyDown={onTriggerKeyDown}
        className={cn(
          "flex w-full items-center justify-between gap-3 rounded-md border border-border bg-surface px-4 py-3 text-left text-sm text-ink outline-none transition focus:border-accent",
          open && "border-accent",
          error && "border-danger",
          disabled && "cursor-not-allowed opacity-60",
        )}
      >
        <span className={cn("truncate", !selectedOption && "text-muted")}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        <span className="shrink-0 text-accent-deep">
          {open ? (
            <FiChevronUp className="h-4 w-4" />
          ) : (
            <FiChevronDown className="h-4 w-4" />
          )}
        </span>
      </button>

      {error && (
        <span className="mt-1.5 block text-xs font-medium text-danger">{error}</span>
      )}

      <AnimatePresence>
        {open && (
          <motion.ul
            ref={listRef}
            id={listboxId}
            role="listbox"
            tabIndex={-1}
            aria-activedescendant={`${listboxId}-${highlighted}`}
            initial={reduced ? false : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="absolute z-30 mt-2 max-h-60 w-full overflow-auto rounded-md border border-border bg-surface p-1.5 shadow-[0_20px_50px_-20px_rgba(7,17,31,0.35)]"
          >
            {options.map((option, index) => {
              const isSelected = option.value === selectedValue;
              const isHighlighted = index === highlighted;

              return (
                <li
                  key={option.value}
                  id={`${listboxId}-${index}`}
                  data-index={index}
                  role="option"
                  aria-selected={isSelected}
                  aria-disabled={option.disabled}
                  onMouseEnter={() => setHighlighted(index)}
                  onClick={() => commit(option)}
                  className={cn(
                    "flex cursor-pointer items-center justify-between gap-3 rounded-sm px-3 py-2.5 text-sm transition-colors",
                    option.disabled
                      ? "cursor-not-allowed text-muted/60"
                      : "text-ink",
                    !option.disabled && isHighlighted && "bg-accent/10",
                    isSelected && "font-semibold text-accent-deep",
                  )}
                >
                  <span className="truncate">{option.label}</span>
                  {isSelected && <FiCheck className="h-4 w-4 shrink-0" />}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
