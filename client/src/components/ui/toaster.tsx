import { translateText, translateNode } from "@/lib/i18n";
import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {translateNode(toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {translateNode(title && <ToastTitle>{translateNode(title)}</ToastTitle>)}
              {translateNode(description && (
                <ToastDescription>{translateNode(description)}</ToastDescription>
              ))}
            </div>
            {translateNode(action)}
            <ToastClose />
          </Toast>
        )
      }))}
      <ToastViewport />
    </ToastProvider>
  )
}
