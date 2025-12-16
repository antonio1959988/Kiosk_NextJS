import OrderSidebar from "@/components/order/OrderSidebar";
import OrderSummary from "@/components/order/OrderSummary";


export default function OrderLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
        <div className="md:flex">
            <OrderSidebar />

            <main>
                {children}
            </main>

            <OrderSummary />
        </div>
    </>
  );
}