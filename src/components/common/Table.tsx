import React from 'react'

export interface TableColumn<T> {
  title: string
  key: keyof T // 데이터 항목 key
  render?: (value: T[keyof T], row: T) => React.ReactNode // 렌더 함수 없으면 데이터 사용
}

export interface TableProps<T> {
  columns: TableColumn<T>[] // 테이블의 컬럼
  data: T[] // 데이터
}

const Table = <T,>({ columns, data }: TableProps<T>) => {
  return (
    <div className="overflow-x-auto rounded-lg bg-white shadow-md">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((column) => (
              <th key={column.title} className="px-4 py-2 text-left font-medium text-gray-700">
                {column.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t hover:bg-gray-50">
              {columns.map((column) => (
                <td key={column.key as string} className="px-4 py-2">
                  {
                    column.render
                      ? column.render(row[column.key], row) // render 함수가 있으면 호출
                      : (row[column.key] as string) // render 함수가 없으면 기본 값 사용
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
