import React from 'react'
import DelSvg from './svgs/DelSvg';
import EditSvg from './svgs/EditSvg';
import Image from 'next/image';

export default function Table() {

    // const thStyle = 'px-6 py-4 font-medium text-gray-900'
    const thStyle = 'px-6 py-2  font-medium '
    const tHead = ['Name', 'Status', 'Role', 'Last Login', '']

    return (
        <div>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">

                <section className='px-6 justify-between flex py-4 border-b border-gray-100'>
                    <div >
                        <div className='font-bold flex gap-2 '><span> Users</span>
                            <span
                                className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                            >
                                48 users
                            </span>
                        </div>
                        <p className='text-sm font-semibold text-gray-400'>Manage your team members and their account permissions here.</p>

                    </div>
                    <div> </div>

                </section>
                <table className="min-w-[800px] border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="">
                        <tr>

                            {tHead.map((d, i) =>
                                <th key={i} className={thStyle}>{d}</th>
                            )}

                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 ">
                        <tr className="hover:bg-gray-50">
                            <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                <div className="relative h-10 w-10">
                                    <Image
                                        width={80}
                                        height={80}
                                        className="h-full w-full rounded-full object-cover object-center"
                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                </div>
                                <div className="text-sm">
                                    <div className="font-medium text-gray-700">Steven Jobs</div>
                                    <div className="text-gray-400">jobs@sailboatui.com</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                <span
                                    className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                    Active
                                </span>
                            </td>
                            <td className="px-6 py-4">Admin</td>
                            <td className="px-6 py-4">
                                <div className="flex flex-col">
                                    <span className='font-bold text-gray-500'>Jun 20, 2022</span>
                                    <span>06:57PM </span>

                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex justify-end gap-4">
                                    <DelSvg />
                                    <EditSvg />
                                </div>
                            </td>
                        </tr>
                        {/* 1 */}
                    </tbody>
                </table>
            </div>


        </div>
    )
}
