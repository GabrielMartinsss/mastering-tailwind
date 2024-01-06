export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5">
      <div className="space-y-1">
        <span className="text-sm/5 text-violet-700">Used space</span>
        <p className="text-sm/5 text-violet-500">
          Your team has used 80% of your available space. Need more?
        </p>
      </div>

      <div className="h-2 rounded-full bg-violet-200">
        <div className="h-2 w-4/5 rounded-full bg-violet-600"></div>
      </div>

      <div className="space-x-3">
        <button
          type="button"
          className="rounded text-sm font-medium text-violet-500 outline-none hover:text-violet-700 focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-4"
        >
          Dismiss
        </button>
        <button
          type="button"
          className="rounded text-sm font-medium text-violet-700 outline-none hover:text-violet-900 focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-4"
        >
          Upgrade plan
        </button>
      </div>
    </div>
  )
}
