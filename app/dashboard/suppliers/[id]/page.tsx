export default async function SupplierDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="space-y-6 pt-10 p-3 text-white min-h-screen h-full ">

      <h1 className="text-4xl font-bold text-white">
        Supplier #{id}
      </h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <h3>Total Purchases</h3>
          <h2>$12,500</h2>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <h3>Due Balance</h3>
          <h2>$2,300</h2>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <h3>Orders</h3>
          <h2>43</h2>
        </div>

        <div className="bg-[#131C31] p-6 rounded-3xl">
          <h3>Status</h3>
          <h2>Active</h2>
        </div>

      </div>

    </div>
  );
}