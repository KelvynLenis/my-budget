export function BalanceBoard() {

  return (
    <>
      <div className="bg-white rounded-xl p-4 w-52 h-fit flex flex-col text-sm font-medium md:self-end">
        <span className="text-positive">My Budget: R$ 1500.00</span>
        <span className="text-negative">Spent this month: -R$ 0.00</span>
      </div>
    </>
  )
}