import * as React from 'react'
import ReactDOM from 'react-dom/client'
import './Table.css'

    import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
    } from '@tanstack/react-table'


    const defaultData  = [
    {
        firstName: 'Riya',
        lastName: 'Shakya',
        age: 19,
        address: 'Dallu',
        department: 'Frontend',
        num_of_employees: 50,
    },
    {
        firstName: 'Lina',
        lastName: 'Khatiwada',
        age: 21,
        address: 'Sakhu',
        department: 'Backend',
        num_of_employees: 80,
    },
    {
        firstName: 'Samyam',
        lastName: 'Rawal',
        age: 25,
        address: 'Jadibuti',
        department: 'UI/UX',
        num_of_employees: 14,
    },
    ]

    const columnHelper = createColumnHelper()

    const columns = [
    columnHelper.accessor('firstName', {
        header: () => <span>First Name</span>,
        cell: info => info.getValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor(row => row.lastName, {
        id: 'lastName',
        cell: info => info.getValue(),
        header: () => <span>Last Name</span>,
        footer: info => info.column.id,
    }),
    columnHelper.accessor('age', {
        header: () => 'Age',
        cell: info => info.renderValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor('address', {
        header: () => <span>Address</span>,
        footer: info => info.column.id,
    }),
    columnHelper.accessor('department', {
        header: 'Department',
        footer: info => info.column.id,
    }),
    columnHelper.accessor('num_of_employees', {
        header: 'No. of Employees',
        footer: info => info.column.id,
    }),
    ]

    function Table() {
    const [data, setData] = React.useState(() => [...defaultData])
    // const rerender = React.useReducer(() => ({}), {})[1]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div className=" px-5 py-6 ">
        <table className='w-[900px] md:w-auto'>
            <thead>
            {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id} className=' h-12 bg-gray-400 '>
                {headerGroup.headers.map(header => (
                    <th key={header.id}>
                    {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                        )}
                    </th>
                ))}
                </tr>
            ))}
            </thead>
            <tbody className=''>
            {table.getRowModel().rows.map(row => (
                <tr className='border mx-2 ' key={row.id}>
                {row.getVisibleCells().map(cell => (
                    <td className='text-center py-2' key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>        
        </div>
    )
    }

export default Table;


