import { BalanceBoard } from "@/components/BalanceBoard";
import { SpentForm } from "@/components/SpentForm";

export default function NewList() {
  return (
    <main className="flex flex-col gap-8 items-center py-5 h-screen px-5">
      <BalanceBoard />
      <SpentForm />
    </main>
  );
}
