export default function InfoItem({
  label,
  value,
  children,
}: {
  label: string
  value?: string
  children?: React.ReactNode
}) {
  return (
    <div>
      <p className="text-sm text-foreground-700">{label}</p>
      {children ? children : <p className="font-medium">{value}</p>}
    </div>
  )
}
