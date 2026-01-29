import { Link } from 'react-router-dom'

function AdminPage() {
  return (
    <div className="admin-theme dark bg-background-light dark:bg-background-dark font-display text-white min-h-screen">
      <main className="max-w-[1200px] mx-auto px-6 py-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl font-black uppercase tracking-tight text-white">Product Inventory</h1>
            <p className="text-white/50 text-sm font-medium">Managing 1,284 SKUs across 12 categories</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              className="inline-flex items-center gap-2 text-white/70 hover:text-black hover:bg-primary px-4 py-3 rounded-lg text-xs font-black uppercase tracking-widest transition-colors"
              to="/"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Back to Website
            </Link>
            <button className="flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-lg font-black uppercase tracking-wide hover:scale-[1.02] active:scale-[0.98] transition-all">
              <span className="material-symbols-outlined">add_circle</span>
              Add New Product
            </button>
          </div>
        </div>
        <section className="bg-industrial-gray rounded-xl p-6 mb-10 shadow-2xl">
          <div className="flex items-center gap-2 mb-6 pl-4">
            <h2 className="text-lg font-black uppercase tracking-widest text-white">Quick Add / Update</h2>
          </div>
          <form className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
              <div className="md:col-span-2">
                <label className="block text-xs font-black uppercase mb-2 text-white/70">Product Title</label>
                <input
                  className="industrial-input w-full rounded-lg h-12 border-none px-4 focus:ring-4 focus:ring-primary/30"
                  placeholder="e.g. Aggro Pro XL Frame - Matte Black"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase mb-2 text-white/70">Price (USD)</label>
                <input
                  className="industrial-input w-full rounded-lg h-12 border-none px-4 focus:ring-4 focus:ring-primary/30"
                  placeholder="549.00"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase mb-2 text-white/70">Category</label>
                <select className="industrial-input w-full rounded-lg h-12 border-none px-4 focus:ring-4 focus:ring-primary/30 appearance-none">
                  <option>Frames</option>
                  <option>Wheelsets</option>
                  <option>Drivetrain</option>
                  <option>Handlebars</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-black uppercase mb-2 text-white/70">Brand</label>
                <select className="industrial-input w-full rounded-lg h-12 border-none px-4 focus:ring-4 focus:ring-primary/30 appearance-none">
                  <option>Aggro Racing</option>
                  <option>Box Components</option>
                  <option>Answer BMX</option>
                  <option>Tioga</option>
                </select>
              </div>
              <div className="flex items-center gap-4 py-3">
                <div className="flex items-center gap-3">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input defaultChecked className="sr-only peer" type="checkbox" value="" />
                  <div className="w-11 h-6 bg-border-gray peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                  <span className="text-xs font-black uppercase text-white/70">Ships from Warehouse</span>
                </div>
              </div>
              <div className="md:col-span-2 pt-4">
                <button className="w-full bg-white text-black h-12 rounded-lg font-black uppercase tracking-wide hover:bg-primary transition-colors" type="submit">
                  Save SKU
                </button>
              </div>
            </div>
            <div className="lg:col-span-2 pl-0 lg:pl-8">
              <label className="block text-xs font-black uppercase mb-3 text-white/70">Product Images</label>
              <div className="dashed-neon-border p-8 flex flex-col items-center justify-center text-center bg-black/20 group hover:bg-black/40 transition-colors">
                <span className="material-symbols-outlined text-4xl text-primary mb-3">cloud_upload</span>
                <p className="text-sm font-bold text-white mb-1 uppercase">Drag &amp; Drop Product Media</p>
                <p className="text-[10px] text-white/40 uppercase mb-4 tracking-tighter">JPG, PNG, WEBP (Max 5MB)</p>
                <button
                  className="bg-primary text-black px-5 py-2 rounded text-xs font-black uppercase tracking-widest hover:brightness-110 transition-all"
                  type="button"
                >
                  Browse Files
                </button>
                <input className="hidden" multiple type="file" />
              </div>
              <div className="mt-4">
                <p className="text-[10px] font-black uppercase text-white/40 mb-2">Staged for Upload (3)</p>
                <div className="flex gap-2">
                  <div className="relative w-14 h-14 bg-white rounded overflow-hidden group">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8V6PY2G3vInrO8lvlHMz0aJKSt5SABuc_5HDnZaTeCS7KsL6ZFUuwvNfMwO8mWR6HL8U0dAun7ADUkPfBVgtjhP5U71jN3c-1z8asngIRtFR7iuu55S4tOaRqIWDpu4kpT8KPxiD0cyp7RTIT9ZdRklQWXk4cTR82xhKRwRVOyaSJ73c5sAVTqnYrSj9QgknCGaLjRsbNuXoJoYQ47BXe1N2i61YOFtxM5aUXMIKrm13A5skMKsk37Yo0vFTjfqhe810Wk_l6jQ')",
                      }}
                    ></div>
                    <button className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-white text-sm">close</span>
                    </button>
                  </div>
                  <div className="relative w-14 h-14 bg-white rounded overflow-hidden group">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-IktrzJO6ATvNzU-DK4S6OpxWmIoKKdDdCZQBMHY_WU6NUdar-40GOAbq8ArXcFmgK6M_NC4JQsCy7YWMDo76zc0aGUdbnCUj2ulyVbtQg8r3ZILd8YoZSvffsELU22TFLLi0MBefWk5KyMvivNZH49KvlhS5NrV6omXJG1gzUIcWh0AvaLXGdhNMJa_dzfwj8qAG0xuuBz_jLHL5UsFofYKlVf3LTQvokDkoTOI5a4E16h-_DZi0hNVXICzOLN9h4hxe1amn2g')",
                      }}
                    ></div>
                    <button className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-white text-sm">close</span>
                    </button>
                  </div>
                  <div className="relative w-14 h-14 bg-white rounded overflow-hidden group">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBPT0EezRG-_cu74jkwCAbaHnKOf5F6gNimpngH-ywdV-VDP6xX7UGhWl2ApS-O9tXJ2Od9U600K0i7Br-WvRybY_AOmJQasKVnmybKrgKoSJ3pEPiHknfRwNdBWsTupAUBlOwUarkAfJiYzORSD-_h06b-hN7S1H9ilEEUOKMatItapA7h0FNOWo2BPlMYHPPMLKcQODcLomkLju7r6XtaDmFUXXaySW1Ur5S5yNJ29vTa_hGGCZ0VNXFsGxDvEtyMQqvAMNyfYw')",
                      }}
                    ></div>
                    <button className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-white text-sm">close</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
        <section className="bg-industrial-gray rounded-xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse zebra-table">
              <thead>
                <tr className="bg-background-dark">
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-white/50">Image</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-white/50">Product Name</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-white/50">Category</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-white/50">Brand</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-white/50 text-right">Price</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-white/50 text-center">
                    Status
                  </th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-white/50 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-4">
                    <div className="w-12 h-12 bg-white rounded p-1">
                      <div
                        className="w-full h-full bg-cover bg-center rounded"
                        data-alt="Black BMX carbon fiber racing frame"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8V6PY2G3vInrO8lvlHMz0aJKSt5SABuc_5HDnZaTeCS7KsL6ZFUuwvNfMwO8mWR6HL8U0dAun7ADUkPfBVgtjhP5U71jN3c-1z8asngIRtFR7iuu55S4tOaRqIWDpu4kpT8KPxiD0cyp7RTIT9ZdRklQWXk4cTR82xhKRwRVOyaSJ73c5sAVTqnYrSj9QgknCGaLjRsbNuXoJoYQ47BXe1N2i61YOFtxM5aUXMIKrm13A5skMKsk37Yo0vFTjfqhe810Wk_l6jQ')",
                        }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-bold text-sm">Aggro Carbon V3 Pro XXL</td>
                  <td className="px-6 py-4 text-sm text-white/60">Frames</td>
                  <td className="px-6 py-4 text-sm text-white/60">Aggro Racing</td>
                  <td className="px-6 py-4 text-right font-black text-primary">$1,299.00</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-black uppercase bg-primary text-black">
                      In-Stock
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-3">
                      <button className="text-white hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">edit_note</span>
                      </button>
                      <button className="text-red-500 hover:text-red-400 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4">
                    <div className="w-12 h-12 bg-white rounded p-1">
                      <div
                        className="w-full h-full bg-cover bg-center rounded"
                        data-alt="Chrome BMX racing handlebars"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-IktrzJO6ATvNzU-DK4S6OpxWmIoKKdDdCZQBMHY_WU6NUdar-40GOAbq8ArXcFmgK6M_NC4JQsCy7YWMDo76zc0aGUdbnCUj2ulyVbtQg8r3ZILd8YoZSvffsELU22TFLLi0MBefWk5KyMvivNZH49KvlhS5NrV6omXJG1gzUIcWh0AvaLXGdhNMJa_dzfwj8qAG0xuuBz_jLHL5UsFofYKlVf3LTQvokDkoTOI5a4E16h-_DZi0hNVXICzOLN9h4hxe1amn2g')",
                        }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-bold text-sm">Chrome-Moly 8.5&quot; Bars</td>
                  <td className="px-6 py-4 text-sm text-white/60">Handlebars</td>
                  <td className="px-6 py-4 text-sm text-white/60">Box Components</td>
                  <td className="px-6 py-4 text-right font-black text-primary">$89.00</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-black uppercase bg-border-gray text-white/50">
                      Drop Ship
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-3">
                      <button className="text-white hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">edit_note</span>
                      </button>
                      <button className="text-red-500 hover:text-red-400 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4">
                    <div className="w-12 h-12 bg-white rounded p-1">
                      <div
                        className="w-full h-full bg-cover bg-center rounded"
                        data-alt="Neon yellow BMX hubs"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBPT0EezRG-_cu74jkwCAbaHnKOf5F6gNimpngH-ywdV-VDP6xX7UGhWl2ApS-O9tXJ2Od9U600K0i7Br-WvRybY_AOmJQasKVnmybKrgKoSJ3pEPiHknfRwNdBWsTupAUBlOwUarkAfJiYzORSD-_h06b-hN7S1H9ilEEUOKMatItapA7h0FNOWo2BPlMYHPPMLKcQODcLomkLju7r6XtaDmFUXXaySW1Ur5S5yNJ29vTa_hGGCZ0VNXFsGxDvEtyMQqvAMNyfYw')",
                        }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-bold text-sm">Turbo Hub Set 36H</td>
                  <td className="px-6 py-4 text-sm text-white/60">Drivetrain</td>
                  <td className="px-6 py-4 text-sm text-white/60">Answer BMX</td>
                  <td className="px-6 py-4 text-right font-black text-primary">$420.00</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-black uppercase bg-primary text-black">
                      In-Stock
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-3">
                      <button className="text-white hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">edit_note</span>
                      </button>
                      <button className="text-red-500 hover:text-red-400 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4">
                    <div className="w-12 h-12 bg-white rounded p-1">
                      <div
                        className="w-full h-full bg-cover bg-center rounded"
                        data-alt="High performance bike tires"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC4eFB6o_Phuid8UEzpDNScpZvUfmwFBKFcdgDHpooS7kFSV3vllXXYNtOVO3W_tFW0D-PiSgo3LPSoYp-kiWaLga1lCTiWohmuwAPRwyEK9KpPGIFV8teGlpygUUe40qM1JKTFSRYJAE6dyRiKq7AOAXdjmrAMDf1JxbOeR4jXpII7SbusTm88Ld6wX_QfKREc9yiHTizafyKp1NmNuEgRBRoiFM8IkG2duSmufnsvnD0U_eD-Qi53cJVAYd7SSg_Z0Uy9mDcjcg')",
                        }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-bold text-sm">PowerBlock 20x1.75</td>
                  <td className="px-6 py-4 text-sm text-white/60">Tires</td>
                  <td className="px-6 py-4 text-sm text-white/60">Tioga</td>
                  <td className="px-6 py-4 text-right font-black text-primary">$45.00</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-black uppercase bg-primary text-black">
                      In-Stock
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-3">
                      <button className="text-white hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">edit_note</span>
                      </button>
                      <button className="text-red-500 hover:text-red-400 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-background-dark/50 flex items-center justify-between">
            <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Showing 1 to 10 of 1,284 entries</span>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded bg-border-gray flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              <button className="w-8 h-8 rounded bg-primary text-black font-black text-xs">1</button>
              <button className="w-8 h-8 rounded bg-border-gray flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default AdminPage
