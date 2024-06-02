import Image from "next/image";

export default function Home() {
  return (
    <div className="container ml-2">
      <div className="heading mt-4 text-center text-2xl">
      <Image
      src="/9070873_stock_market_icon.png"
      width={64}
      height={54}
      alt="Picture of the author"
      className="m-auto"
    />
        <div>Stock Exchange</div>  
      </div>
      <hr/>
      <div className="heading mt-4 mx-auto text-xl">Daily Stock Update</div>
      <table className="border-collapse border my-4 mx-auto shadow-xl  px-2">
  <thead>
    <tr className="text-slate-500 text-sm">
      <th className="border border-transparent">Name</th>
      <th className="border border-transparent w-60">Price</th>
      <th className="border border-transparent w-60">Date</th>
      <th className="border border-transparent w-60">Close</th>
      <th className="border border-transparent w-60">Open</th>
      <th className="border border-transparent w-64"></th>
    </tr>
  </thead>
  <tbody className="text-center">
    <tr className="">
      <td className="border border-transparent pt-4">
        <Image
      src="/7422376_tesla_car_electric_vehicle_icon.png"
      width={64}
      height={54}
      alt="Picture of the author"
      className="m-auto"
    />
    <div className="text-slate-500 pt-2">Tesla</div>
    </td>
      <td className="border border-transparent text-green-600">ZAR 1500,87</td>
      <td className="border border-transparent ...">07 June 2024</td>
      <td className="border border-transparent text-green-600">ZAR 1500,87</td>
      <td className="border border-transparent text-green-600">ZAR 1500,87</td>
      <th className="border border-transparent text-white text-sm"><button className="rounded-full p-2 bg-green-500">Open</button></th>
    </tr>
    <tr>
      <td className="border border-transparent ...">
      <Image
      src="/104447_apple_logo_icon.png"
      width={64}
      height={54}
      alt="Picture of the author"
      className="m-auto"
    />
    <div className="text-slate-500 pt-2">Apple</div>
      </td>
      <td className="border border-transparent text-green-600">ZAR 2200,345</td>
      <td className="border border-transparent ...">07 June 2024</td>
      <td className="border border-transparent text-green-600">ZAR 2200,345</td>
      <td className="border border-transparent text-green-600">ZAR 2200,345</td>
      <th className="border border-transparent text-white text-sm"><button className="rounded-full p-2 bg-green-500">Open</button></th>
    </tr>
    <tr>
      <td className="border border-transparent ...">
      <Image
      src="/294680_cocacola_icon.png"
      width={64}
      height={54}
      alt="Picture of the author"
      className="m-auto"
    />
    <div className="text-slate-500 pt-2">Coca Cola</div>
      </td>
      <td className="border border-transparent text-green-600">ZAR 2200,345</td>
      <td className="border border-transparent ...">07 June 2024</td>
      <td className="border border-transparent text-green-600">ZAR 2200,345</td>
      <td className="border border-transparent text-green-600">ZAR 2200,345</td>
      <th className="border border-transparent text-white text-sm"><button className="rounded-full p-2 bg-green-500">Open</button></th>
    </tr>
  </tbody>
</table>
<div>
</div>
    </div>
  );
}
