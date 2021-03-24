import { Transition } from "@headlessui/react"

var divStyle = {
 
  
};

export default function Dash({children}) {
  return (

     
    <div style={divStyle} >
    <table class=" table-auto">
      <thead class="justify-between">
        <tr class="bg-gray-800">
          <th class="px-16 py-2">
            <span class="text-gray-300"></span>
          </th>
          <th class="px-16 py-2">
            <span class="text-gray-300">Name</span>
          </th>
          <th class="px-16 py-2">
            <span class="text-gray-300">Invitation</span>
          </th>
          <th class="px-16 py-2">
            <span class="text-gray-300">Date</span>
          </th>

          <th class="px-16 py-2">
            <span class="text-gray-300">Time</span>
          </th>

          <th class="px-16 py-2">
            <span class="text-gray-300">Status</span>
          </th>
        </tr>
      </thead>
      <tbody class="bg-gray-200">
        <tr class="bg-white border-4 border-gray-200">
          <td class="px-16 py-2 flex flex-row items-center">
            <img
              class="h-8 w-8 rounded-full object-cover "
              src=" "
              alt=""
            />
          </td>
          <td>
            <span class="text-center ml-2 font-semibold">Mirrag Admin</span>
          </td>
          <td class="px-16 py-2">
            <button class="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
              Open Link
            </button>
          </td>
          <td class="px-16 py-2">
            <span>18/03/2021</span>
          </td>
          <td class="px-16 py-2">
            <span>10:00</span>
          </td>

          <td class="px-16 py-2">
            <span class="text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h5 "
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
            </span>
          </td>
        </tr>
        <tr class="bg-white border-4 border-gray-200">
          <td class="px-16 py-2 flex flex-row items-center">
          <img
                class="h-8 w-8 rounded-full object-cover "
                src=" "
                alt=""
              />
          </td>
          <td>
            <span class="text-center ml-2 font-semibold">Instinct</span>
          </td>
          <td class="px-16 py-2">
            <button class="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
              Open Link
            </button>
          </td>
          <td class="px-16 py-2">
            <span>18/03/2021</span>
          </td>
          <td class="px-16 py-2">
            <span>12:15</span>
          </td>

          <td class="px-16 py-2">
            <span class="text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="12" r="9" />
                <polyline points="12 7 12 12 15 15" />
              </svg>
            </span>
          </td>
        </tr>
        <tr class="bg-white border-4 border-gray-200">
          <td class="px-16 py-2 flex flex-row items-center">
          <img
                class="h-8 w-8 rounded-full object-cover "
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=Tiy0GlEdb6&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
          </td>
          <td>
            <span class="text-center ml-2 font-semibold">Tom Cook</span>
          </td>
          <td class="px-16 py-2">
            <button class="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
              Open Link
            </button>
          </td>
          <td class="px-16 py-2">
            <span>16/03/2021</span>
          </td>
          <td class="px-16 py-2">
            <span>08:35</span>
          </td>

          <td class="px-16 py-2">
            <span class="text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </span>
          </td>
        </tr>
      </tbody>
    </table>



    
  </div>

  )
}