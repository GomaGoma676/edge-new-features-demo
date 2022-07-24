import type { NextPage } from 'next'
import { CubeTransparentIcon } from '@heroicons/react/solid'

const Renewal: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-mono text-gray-800">
      <p className="my-3 text-xl">Concept B</p>
      <CubeTransparentIcon className="h-12 w-12 text-pink-500" />
    </div>
  )
}

export default Renewal
