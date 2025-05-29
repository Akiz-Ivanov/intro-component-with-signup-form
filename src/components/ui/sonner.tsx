import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "light" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      {...props}
      toastOptions={{
        classNames: {
          toast: 'toast',
          title: 'title',
          description: 'description',
          actionButton: 'action-button',
          cancelButton: 'cancel-button',
          closeButton: 'close-button',
        },
      }}
    />
  )
}

export { Toaster }