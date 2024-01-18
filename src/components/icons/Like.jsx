import React from 'react'

function Like({ size, cursor, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 18 16"
      className={cursor}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M3.662 1.616c-1.389.648-2.406 2.19-2.406 4.029 0 1.878.753 3.326 1.832 4.567.89 1.023 1.966 1.87 3.016 2.697.25.197.498.392.741.588.44.354.833.665 1.212.891.379.226.684.33.943.33.26 0 .564-.104.943-.33.379-.226.771-.537 1.212-.891.244-.196.491-.391.74-.588 1.05-.827 2.128-1.674 3.017-2.697 1.08-1.24 1.832-2.689 1.832-4.567 0-1.839-1.017-3.381-2.406-4.03-1.35-.63-3.163-.462-4.886 1.366a.622.622 0 01-.904 0C6.825 1.153 5.012.986 3.662 1.616zM9 1.646C7.064-.125 4.897-.372 3.14.448 1.285 1.315 0 3.326 0 5.645c0 2.278.93 4.017 2.149 5.419.976 1.122 2.171 2.062 3.227 2.892.239.188.47.37.692.548.428.345.889.713 1.355.992.467.278.999.504 1.577.504s1.11-.226 1.577-.505c.466-.278.927-.646 1.355-.991.221-.178.453-.36.692-.548 1.056-.83 2.25-1.77 3.227-2.892C17.071 9.662 18 7.924 18 5.644c0-2.318-1.285-4.329-3.14-5.195C13.103-.37 10.936-.123 9 1.645z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default Like