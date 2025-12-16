const Sidebar = () => {
  return (
    <div className="w-64 bg-white">
      <div className="px-8 py-6">
        <h1 className="text-2xl font-black text-green-600">STOCKLY</h1>
      </div>
      <div className="flex flex-col gap-2 p-2 text-slate-500">
        <button className="px-6 py-3 text-left">Dashboard</button>
        <button className="px-6 py-3 text-left">Vendas</button>
        <button className="px-6 py-3 text-left">Produtos</button>
        <button className="px-6 py-3 text-left">Clientes</button>
      </div>
    </div>
  );
};

export default Sidebar;
